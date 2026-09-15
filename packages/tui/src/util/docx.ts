/**
 * Minimal native DOCX writer for session transcripts.
 *
 * Produces a valid OOXML package (stored ZIP) that opens in Word, LibreOffice
 * and OpenOffice without any external tools. Supports the Markdown subset used
 * by the transcript plus the common formatting found in assistant answers:
 * headings, bold/italic/inline code, code blocks, bullet/numbered lists,
 * tables and clickable hyperlinks.
 */

const encoder = new TextEncoder()

const CRC_TABLE = (() => {
  const table = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[i] = c >>> 0
  }
  return table
})()

function crc32(data: Uint8Array) {
  let crc = 0xffffffff
  for (let i = 0; i < data.length; i++) crc = CRC_TABLE[(crc ^ data[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function zip(entries: { name: string; data: Uint8Array }[]) {
  const chunks: Uint8Array[] = []
  const central: Uint8Array[] = []
  let offset = 0
  for (const entry of entries) {
    const name = encoder.encode(entry.name)
    const crc = crc32(entry.data)
    const size = entry.data.length
    const local = new Uint8Array(30 + name.length)
    const lv = new DataView(local.buffer)
    lv.setUint32(0, 0x04034b50, true)
    lv.setUint16(4, 20, true)
    lv.setUint32(14, crc, true)
    lv.setUint32(18, size, true)
    lv.setUint32(22, size, true)
    lv.setUint16(26, name.length, true)
    local.set(name, 30)
    chunks.push(local, entry.data)

    const cd = new Uint8Array(46 + name.length)
    const cv = new DataView(cd.buffer)
    cv.setUint32(0, 0x02014b50, true)
    cv.setUint16(4, 20, true)
    cv.setUint16(6, 20, true)
    cv.setUint32(16, crc, true)
    cv.setUint32(20, size, true)
    cv.setUint32(24, size, true)
    cv.setUint16(28, name.length, true)
    cv.setUint32(42, offset, true)
    cd.set(name, 46)
    central.push(cd)
    offset += local.length + size
  }

  const centralSize = central.reduce((sum, c) => sum + c.length, 0)
  const end = new Uint8Array(22)
  const ev = new DataView(end.buffer)
  ev.setUint32(0, 0x06054b50, true)
  ev.setUint16(8, entries.length, true)
  ev.setUint16(10, entries.length, true)
  ev.setUint32(12, centralSize, true)
  ev.setUint32(16, offset, true)

  const total = chunks.reduce((sum, c) => sum + c.length, 0) + centralSize + end.length
  const out = new Uint8Array(total)
  let pos = 0
  for (const chunk of [...chunks, ...central, end]) {
    out.set(chunk, pos)
    pos += chunk.length
  }
  return out
}

function escapeXml(text: string) {
  return text
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

type Run = { text: string; bold?: boolean; italic?: boolean; code?: boolean; link?: string }

type LinkMap = Map<string, string>

function linkId(links: LinkMap, url: string) {
  const existing = links.get(url)
  if (existing) return existing
  const id = `rIdLink${links.size + 1}`
  links.set(url, id)
  return id
}

function inlineRuns(text: string): Run[] {
  const runs: Run[] = []
  const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*\n]+\*|_[^_\n]+_|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0
    if (index > last) runs.push({ text: text.slice(last, index) })
    const token = match[0]
    if (token.startsWith("**") || token.startsWith("__")) runs.push({ text: token.slice(2, -2), bold: true })
    else if (token.startsWith("`")) runs.push({ text: token.slice(1, -1), code: true })
    else if (token.startsWith("[")) {
      const label = token.slice(1, token.indexOf("]"))
      const url = token.slice(token.indexOf("(") + 1, -1)
      runs.push({ text: label || url, link: url })
    } else runs.push({ text: token.slice(1, -1), italic: true })
    last = index + token.length
  }
  if (last < text.length) runs.push({ text: text.slice(last) })
  return runs
}

function runXml(run: Run, links: LinkMap) {
  if (!run.text) return ""
  const props: string[] = []
  if (run.bold) props.push("<w:b/>")
  if (run.italic) props.push("<w:i/>")
  if (run.code) props.push('<w:rFonts w:ascii="Courier New" w:hAnsi="Courier New"/>')
  if (run.link) props.push('<w:color w:val="0563C1"/><w:u w:val="single"/>')
  const rpr = props.length ? `<w:rPr>${props.join("")}</w:rPr>` : ""
  const text = `<w:r>${rpr}<w:t xml:space="preserve">${escapeXml(run.text)}</w:t></w:r>`
  if (run.link) return `<w:hyperlink r:id="${linkId(links, run.link)}">${text}</w:hyperlink>`
  return text
}

function paragraph(runs: Run[], options: { numId?: number; spacing?: number; shading?: string } | undefined, links: LinkMap) {
  const ppr: string[] = []
  if (options?.numId) ppr.push(`<w:numPr><w:ilvl w:val="0"/><w:numId w:val="${options.numId}"/></w:numPr>`)
  if (options?.shading) ppr.push(`<w:shd w:val="clear" w:fill="${options.shading}"/>`)
  if (options?.spacing) ppr.push(`<w:spacing w:before="${options.spacing}" w:after="${options.spacing}"/>`)
  const head = ppr.length ? `<w:pPr>${ppr.join("")}</w:pPr>` : ""
  return `<w:p>${head}${runs.map((run) => runXml(run, links)).join("")}</w:p>`
}

const TABLE_BORDERS = ["top", "left", "bottom", "right", "insideH", "insideV"]
  .map((side) => `<w:${side} w:val="single" w:sz="4" w:space="0" w:color="999999"/>`)
  .join("")

function tableXml(rows: string[][], links: LinkMap) {
  const grid = `<w:tblGrid>${rows[0].map(() => `<w:gridCol w:w="3000"/>`).join("")}</w:tblGrid>`
  const trs = rows
    .map(
      (cells, rowIndex) =>
        `<w:tr>${cells
          .map(
            (cell) =>
              `<w:tc><w:tcPr><w:tcW w:w="0" w:type="auto"/></w:tcPr>${paragraph(
                inlineRuns(cell).map((run) => (rowIndex === 0 ? { ...run, bold: true } : run)),
                undefined,
                links,
              )}</w:tc>`,
          )
          .join("")}</w:tr>`,
    )
    .join("")
  return `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:tblBorders>${TABLE_BORDERS}</w:tblBorders></w:tblPr>${grid}${trs}</w:tbl>`
}

const HEADINGS: Record<number, { size: number; spacing: number }> = {
  1: { size: 36, spacing: 240 },
  2: { size: 30, spacing: 200 },
  3: { size: 26, spacing: 160 },
  4: { size: 24, spacing: 140 },
  5: { size: 22, spacing: 120 },
  6: { size: 22, spacing: 120 },
}

function renderMarkdown(markdown: string, links: LinkMap): string {
  const body: string[] = []
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n")
  let index = 0
  let paragraphLines: string[] = []

  const flush = () => {
    if (!paragraphLines.length) return
    body.push(paragraph(inlineRuns(paragraphLines.join(" ")), undefined, links))
    paragraphLines = []
  }

  while (index < lines.length) {
    const line = lines[index]

    if (line.startsWith("```")) {
      flush()
      const code: string[] = []
      index++
      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index])
        index++
      }
      index++
      for (const codeLine of code.length ? code : [""]) {
        body.push(paragraph([{ text: codeLine || " ", code: true }], { shading: "F5F5F5" }, links))
      }
      continue
    }

    if (line.trim().startsWith("|") && /^\s*\|?[\s:|-]+\|/.test(lines[index + 1] ?? "")) {
      flush()
      const cells = (row: string) =>
        row
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((cell) => cell.trim())
      const rows: string[][] = [cells(line)]
      index += 2
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(cells(lines[index]))
        index++
      }
      body.push(tableXml(rows, links))
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (heading) {
      flush()
      const spec = HEADINGS[heading[1].length]
      const runs = inlineRuns(heading[2]).map((run) => ({ ...run, bold: true }))
      body.push(paragraph(runs, { spacing: spec.spacing }, links))
      index++
      continue
    }

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      flush()
      body.push(paragraph([{ text: "" }], undefined, links))
      index++
      continue
    }

    const list = line.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/)
    if (list) {
      flush()
      const ordered = /\d/.test(list[2])
      body.push(paragraph(inlineRuns(list[3]), { numId: ordered ? 2 : 1 }, links))
      index++
      continue
    }

    const quote = line.match(/^>\s?(.*)$/)
    if (quote) {
      flush()
      body.push(paragraph(inlineRuns(quote[1]).map((run) => ({ ...run, italic: true })), undefined, links))
      index++
      continue
    }

    if (!line.trim()) {
      flush()
      index++
      continue
    }

    paragraphLines.push(line.trim())
    index++
  }
  flush()
  return body.join("")
}

const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/></Types>`

const PACKAGE_RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`

const NUMBERING = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="720" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default"/></w:rPr></w:lvl></w:abstractNum><w:abstractNum w:abstractNumId="1"><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="decimal"/><w:lvlText w:val="%1."/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="720" w:hanging="360"/></w:pPr></w:lvl></w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num><w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num></w:numbering>`

function documentRels(links: LinkMap) {
  const hyperlinks = [...links.entries()]
    .map(
      ([url, id]) =>
        `<Relationship Id="${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${escapeXml(url)}" TargetMode="External"/>`,
    )
    .join("")
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdNumbering" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>${hyperlinks}</Relationships>`
}

export function buildDocx(markdown: string): Uint8Array {
  const links: LinkMap = new Map()
  const body = renderMarkdown(markdown, links)
  const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body></w:document>`
  return zip([
    { name: "[Content_Types].xml", data: encoder.encode(CONTENT_TYPES) },
    { name: "_rels/.rels", data: encoder.encode(PACKAGE_RELS) },
    { name: "word/document.xml", data: encoder.encode(document) },
    { name: "word/_rels/document.xml.rels", data: encoder.encode(documentRels(links)) },
    { name: "word/numbering.xml", data: encoder.encode(NUMBERING) },
  ])
}
