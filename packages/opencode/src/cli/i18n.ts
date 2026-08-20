/**
 * i18n for the opencode CLI.
 *
 * Language detection order:
 *   1. OPENCODE_LANG environment variable
 *   2. LC_ALL / LC_MESSAGES / LANG environment variables
 *   3. default: English
 *
 * Usage:
 *   import { t } from "../i18n"
 *   t("List all available models")
 *   t("Provider not found: {provider}", { provider: id })
 *
 * Translation keys are the original English strings, which allows a
 * graceful fallback to English when a translation is missing.
 */

import { ru as coreRu } from "./i18n-ru/core"
import { ru as modelsRu } from "./i18n-ru/models"
import { ru as integrationsRu } from "./i18n-ru/integrations"
import { ru as mcpRu } from "./i18n-ru/mcp"
import { ru as sessionRu } from "./i18n-ru/session"
import { ru as miscRu } from "./i18n-ru/misc"

export type I18nParams = Record<string, string | number | undefined>

export type Entry = string | ((params?: I18nParams) => string)

const ru: Record<string, Entry> = {
  ...coreRu,
  ...modelsRu,
  ...integrationsRu,
  ...mcpRu,
  ...sessionRu,
  ...miscRu,
}

function detectLanguage(): string {
  const env = process.env.OPENCODE_LANG
  if (env) return env
  return (
    process.env.LC_ALL ??
    process.env.LC_MESSAGES ??
    process.env.LANG ??
    "en"
  )
}

let currentLanguage = detectLanguage().toLowerCase()

export function isRussian(): boolean {
  return currentLanguage.startsWith("ru")
}

export function getLanguage(): string {
  return currentLanguage
}

/** Force the active language at runtime, e.g. for tests. */
export function setLanguage(lang: string): void {
  currentLanguage = lang.toLowerCase()
}

// --- pluralization ---

export function pluralRu(count: string | number | undefined, forms: [string, string, string]): string {
  const n = Math.abs(Number(count ?? 0))
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return `${count} ${forms[0]}`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} ${forms[1]}`
  return `${count} ${forms[2]}`
}

// --- translation ---

function fill(template: string, params?: I18nParams): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match,
  )
}

/**
 * Translate a string. Falls back to the original English string when no
 * translation exists. Placeholders use the {name} syntax:
 *
 *   t("Delete {name}?", { name: "file.ts" })
 */
export function t(input: string, params?: I18nParams): string {
  if (!isRussian()) return fill(input, params)
  const entry = ru[input]
  if (entry === undefined) return fill(input, params)
  if (typeof entry === "function") return entry(params)
  return fill(entry, params)
}
