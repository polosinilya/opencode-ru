#!/usr/bin/env bun
/**
 * Collect all t("...") keys from the CLI source and report which keys
 * are missing from the Russian dictionaries in packages/opencode/src/cli/i18n-ru/.
 *
 * Usage: bun run script/collect-cli-keys.ts
 */

import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

const CLI_SRC = join(import.meta.dir, "../packages/opencode/src/cli")
const I18N_DIR = join(CLI_SRC, "i18n-ru")

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

const KEY_RE = /\bt\(/g

function splitTopLevelComma(expr: string): string[] {
  const parts: string[] = []
  let depth = 0
  let inString = false
  let current = ""
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i]
    if (ch === '"' && expr[i - 1] !== "\\") inString = !inString
    if (!inString) {
      if (ch === "{" || ch === "(" || ch === "[") depth++
      if (ch === "}" || ch === ")" || ch === "]") depth--
      if (ch === "," && depth === 0) {
        parts.push(current)
        current = ""
        continue
      }
    }
    current += ch
  }
  parts.push(current)
  return parts
}

function collectStringConcats(source: string): string[] {
  const out: string[] = []
  for (const match of source.matchAll(KEY_RE)) {
    const start = match.index + match[0].length
    let i = start
    let depth = 0
    const expr: string[] = []
    while (i < source.length) {
      const ch = source[i]
      if (ch === "(") depth++
      if (ch === ")") {
        if (depth === 0) break
        depth--
      }
      expr.push(ch)
      i++
    }
    const parts = expr.join("")
    const firstArg = splitTopLevelComma(parts)[0]
    const strLit = /"(?:[^"\\]|\\.)*"/g
    const literals = [...firstArg.matchAll(strLit)].map((m) => m[0])
    if (literals.length > 0) {
      const stripped = firstArg.replace(/"(?:[^"\\]|\\.)*"/g, "").replace(/\s/g, "")
      if (/^[+]*$/.test(stripped)) {
        out.push(
          literals
            .map((l) => l.slice(1, -1).replace(/\\(["\\])/g, "$1"))
            .join(""),
        )
      }
    }
  }
  return out
}

const keys = new Set<string>()
for (const file of walk(CLI_SRC)) {
  if (file.startsWith(I18N_DIR) || file.endsWith("i18n.ts")) continue
  const content = readFileSync(file, "utf8")
  for (const key of collectStringConcats(content)) keys.add(key)
}

const dictKeys = new Set<string>()
const DICT_KEY_RE = /^\s*"((?:[^"\\]|\\.)*)":/gm
const DICT_COMPUTED_RE = /^\s*\[([^\]]*)\]:/gm
const STR_LIT = /"(?:[^"\\]|\\.)*"/g
for (const file of walk(I18N_DIR)) {
  const content = readFileSync(file, "utf8")
  for (const m of content.matchAll(DICT_KEY_RE)) dictKeys.add(m[1])
  for (const m of content.matchAll(DICT_COMPUTED_RE)) {
    const literals = [...m[1].matchAll(STR_LIT)].map((l) => l[0].slice(1, -1).replace(/\\(["\\])/g, "$1"))
    if (literals.length > 0) dictKeys.add(literals.join(""))
  }
}

const sorted = [...keys].sort()
const missing = sorted.filter((k) => !dictKeys.has(k))
const extra = [...dictKeys].filter((k) => !keys.has(k)).sort()

console.log(`Total t() keys: ${keys.size}`)
console.log(`Dictionary entries: ${dictKeys.size}`)
console.log(`Missing translations: ${missing.length}`)
if (missing.length > 0) {
  console.log("\n--- Missing keys (need translation in i18n-ru/*.ts) ---")
  for (const k of missing) console.log(`  "${k}": "${k}",`)
}
if (extra.length > 0) {
  console.log("\n--- Unused dictionary entries ---")
  for (const k of extra) console.log(`  ${k}`)
}
