import { describe, expect, test } from "bun:test"
import { convertText, convertWord, findLayoutIssues, fixLastWord } from "../../src/util/keyboard-layout"
import { isRussianWord } from "../../src/util/russian-dictionary"

describe("util.layout", () => {
  test("converts Latin word to Cyrillic", () => {
    expect(convertWord("Ghbdtn")).toBe("Привет")
    expect(convertWord("Djn")).toBe("Вот")
    expect(convertWord("ntrcn")).toBe("текст")
  })

  test("converts Cyrillic word to Latin", () => {
    expect(convertWord("Руддщ")).toBe("Hello")
    expect(convertWord("Иуддщ")).toBe("Bello")
  })

  test("preserves case", () => {
    expect(convertWord("GHBDTN")).toBe("ПРИВЕТ")
    expect(convertWord("РУДДЩ")).toBe("HELLO")
  })

  test("leaves mixed-script words untouched", () => {
    expect(convertWord("GhbdtnПривет")).toBe("GhbdtnПривет")
  })

  test("converts every word in a text", () => {
    expect(convertText("Djn nfrjq ntrcn")).toBe("Вот такой текст")
    expect(convertText("Ghbdtn, rfr ltkf?")).toBe("Привет, как дела?")
    expect(convertText("GhbdtnПривет")).toBe("GhbdtnПривет")
  })

  test("findLayoutIssues detects a prompt typed in the wrong layout", () => {
    const issues = findLayoutIssues("Ghbdtn rfr ltkf")
    expect(issues?.changed).toEqual(["Ghbdtn", "rfr", "ltkf"])
    expect(issues?.corrected).toBe("Привет как дела")
  })

  test("findLayoutIssues ignores correct Russian text", () => {
    expect(findLayoutIssues("Привет, как дела?")).toBeUndefined()
  })

  test("findLayoutIssues ignores single-letter Russian prepositions", () => {
    expect(findLayoutIssues("Привет, я в кино с другом")).toBeUndefined()
    expect(findLayoutIssues("я к тебе о нём")).toBeUndefined()
    expect(findLayoutIssues("Это в доме у окна")).toBeUndefined()
    expect(findLayoutIssues("мы с тобой")).toBeUndefined()
  })

  test("findLayoutIssues converts single-letter words typed in the wrong layout", () => {
    expect(findLayoutIssues("Z d rbyj c lheujv")?.corrected).toBe("Я в кино с другом")
  })

  test("findLayoutIssues converts short prepositions and pronouns typed in the wrong layout", () => {
    expect(findLayoutIssues("nj bp cjctlytuj")?.corrected).toBe("то из соседнего")
    expect(findLayoutIssues("z r nt,t j ytv")?.corrected).toBe("я к тебе о нем")
    expect(findLayoutIssues("nj,jq")?.corrected).toBe("тобой")
  })

  test("findLayoutIssues keeps trailing punctuation", () => {
    expect(findLayoutIssues("Ghbdtn, rfr ltkf?")?.corrected).toBe("Привет, как дела?")
  })

  test("findLayoutIssues converts words with mapped punctuation at boundaries", () => {
    expect(findLayoutIssues("[jhjij")?.corrected).toBe("хорошо")
    expect(findLayoutIssues(";bpym")?.corrected).toBe("жизнь")
    expect(findLayoutIssues("'nj")?.corrected).toBe("это")
    expect(findLayoutIssues(",snm")?.corrected).toBe("быть")
    expect(findLayoutIssues("Ghbdtn]")).toBeUndefined()
  })

  test("findLayoutIssues converts consecutive mapped punctuation", () => {
    expect(findLayoutIssues("j,]`v")?.corrected).toBe("объём")
    expect(findLayoutIssues("dth,k.l")?.corrected).toBe("верблюд")
  })

  test("findLayoutIssues leaves product names alone when a Russian dictionary is available", () => {
    if (isRussianWord("тест") === undefined) return
    for (const name of ["Google", "opencode", "LibreOffice", "Docker", "Python", "GitHub", "Kubernetes"]) {
      expect(findLayoutIssues(name)).toBeUndefined()
    }
    expect(findLayoutIssues("Ghbdtn")?.corrected).toBe("Привет")
    expect(findLayoutIssues("Ghbdtnf")?.corrected).toBe("Привета")
  })

  test("findLayoutIssues returns undefined when nothing changes", () => {
    expect(findLayoutIssues("")).toBeUndefined()
  })

  test("fixLastWord converts the word before the cursor", () => {
    expect(fixLastWord("Djn nfrjq ntrcn", 15)).toEqual({
      start: 10,
      end: 15,
      replacement: "текст",
      cursor: 15,
    })
    expect(fixLastWord("Ghbdtn", 6)).toEqual({
      start: 0,
      end: 6,
      replacement: "Привет",
      cursor: 6,
    })
  })

  test("fixLastWord returns undefined when there is nothing to convert", () => {
    expect(fixLastWord("Ghbdtn ", 7)).toBeUndefined()
    expect(fixLastWord("", 0)).toBeUndefined()
    expect(fixLastWord("GhbdtnПривет", 12)).toBeUndefined()
  })
})
