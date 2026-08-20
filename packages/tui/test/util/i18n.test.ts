import { describe, expect, test } from "bun:test"
import { getLanguage, setLanguage, t } from "../../src/util/i18n"

describe("util.i18n", () => {
  test("defaults to English and passes strings through", () => {
    expect(getLanguage()).toBe("en")
    expect(t("Cancel")).toBe("Cancel")
    expect(t("Unknown string here")).toBe("Unknown string here")
  })

  test("translates to Russian after setLanguage", () => {
    setLanguage("ru")
    expect(t("Cancel")).toBe("Отмена")
    expect(t("Submit")).toBe("Отправить")
    setLanguage("en")
  })

  test("fills placeholders", () => {
    setLanguage("ru")
    expect(t("Delete {name}?", { name: "file.ts" })).toBe("Удалить file.ts?")
    setLanguage("en")
  })

  test("applies Russian pluralization", () => {
    setLanguage("ru")
    expect(t("{count} files", { count: 1 })).toBe("1 файл")
    expect(t("{count} files", { count: 3 })).toBe("3 файла")
    expect(t("{count} files", { count: 5 })).toBe("5 файлов")
    setLanguage("en")
  })
})
