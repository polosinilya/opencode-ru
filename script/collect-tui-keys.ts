#!/usr/bin/env bun
/**
 * Collect all t("...") keys from the TUI source and report which keys
 * are missing from the Russian dictionary in packages/tui/src/util/i18n.ts.
 *
 * Usage: bun run script/collect-tui-keys.ts
 */

import { readdirSync, readFileSync } from "node:fs"
import { join, relative } from "node:path"

const TUI_SRC = join(import.meta.dir, "../packages/tui/src")
const I18N_FILE = join(TUI_SRC, "util/i18n.ts")

function walk(dir: string): string[] {
  const out: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue
      out.push(...walk(full))
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      out.push(full)
    }
  }
  return out
}

const KEY_RE = /\bt\(\s*"((?:[^"\\]|\\.)*)"/g

const keys = new Set<string>()
for (const file of walk(TUI_SRC)) {
  if (file.endsWith("util/i18n.ts")) continue
  const content = readFileSync(file, "utf8")
  for (const match of content.matchAll(KEY_RE)) {
    keys.add(match[1])
  }
}

const i18nContent = readFileSync(I18N_FILE, "utf8")
const dictMatch = i18nContent.match(/const ru: Record<string, Entry> = \{([\s\S]*?)\n\}/)
if (!dictMatch) {
  console.error("Could not find the ru dictionary in i18n.ts")
  process.exit(1)
}
const dictBody = dictMatch[1]
const dictKeys = new Set<string>()
const DICT_KEY_RE = /^\s*"((?:[^"\\]|\\.)*)":/gm
for (const m of dictBody.matchAll(DICT_KEY_RE)) dictKeys.add(m[1])

const sorted = [...keys].sort()
const missing = sorted.filter((k) => !dictKeys.has(k))
const extra = [...dictKeys].filter((k) => !keys.has(k)).sort()

console.log(`Total t() keys: ${keys.size}`)
console.log(`Dictionary entries: ${dictKeys.size}`)
console.log(`Missing translations: ${missing.length}`)
if (missing.length > 0) {
  console.log("\n--- Missing keys (need translation in i18n.ts) ---")
  for (const k of missing) console.log(`  "${k}": "${k}",`)
}
if (extra.length > 0) {
  console.log("\n--- Unused dictionary entries ---")
  for (const k of extra) console.log(`  ${k}`)
}
