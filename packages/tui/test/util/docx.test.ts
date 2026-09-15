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
})
