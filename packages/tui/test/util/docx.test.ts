import { describe, expect, test } from "bun:test"
import { buildDocx } from "../../src/util/docx"

describe("util.docx", () => {
  test("builds a zip package that contains the document part", () => {
    const bytes = buildDocx("# Title\n\nHello **world**\n\n```js\nconst x = 1\n```\n")
    expect(bytes[0]).toBe(0x50)
    expect(bytes[1]).toBe(0x4b)
    const text = new TextDecoder().decode(bytes)
    expect(text).toContain("word/document.xml")
    expect(text).toContain("[Content_Types].xml")
    expect(text).toContain("Hello")
  })

  test("escapes xml special characters", () => {
    const text = new TextDecoder().decode(buildDocx("a < b & c > d"))
    expect(text).toContain("a &lt; b &amp; c &gt; d")
  })

  test("renders markdown tables as word tables", () => {
    const text = new TextDecoder().decode(buildDocx("| A | B |\n|---|---|\n| 1 | 2 |\n"))
    expect(text).toContain("<w:tbl>")
    expect(text).toContain("<w:tr>")
    expect(text).toContain("<w:tc>")
  })

  test("renders lists with numbering and links as hyperlinks", () => {
    const text = new TextDecoder().decode(buildDocx("1. one\n\n- two\n\n[x](https://a.b)\n"))
    expect(text).toContain("<w:numPr>")
    expect(text).toContain("<w:hyperlink")
    expect(text).toContain("word/numbering.xml")
    expect(text).toContain('Target="https://a.b"')
  })
})
