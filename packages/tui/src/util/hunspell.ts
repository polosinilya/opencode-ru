import affSource from "./dict/ru_RU.aff" with { type: "text" }
import dicSource from "./dict/ru_RU.dic" with { type: "text" }

type Rule = { flag: string; strip: string; add: string; condition: RegExp | null }

function normalizeAffix(value: string) {
  return value === "0" ? "" : value
}

function compileCondition(condition: string) {
  if (condition === ".") return null
  return new RegExp(condition + "$", "u")
}

let dictionary: Map<string, string> | null = null
let rules: Rule[] = []

function load() {
  if (dictionary) return
  const parsed = new Map<string, string>()
  const lines = dicSource.split("\n")
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (!line) continue
    const slash = line.indexOf("/")
    if (slash === -1) parsed.set(line, "")
    else parsed.set(line.slice(0, slash), line.slice(slash + 1))
  }
  dictionary = parsed

  const compiled: Rule[] = []
  for (const line of affSource.split("\n")) {
    if (!line.startsWith("SFX ")) continue
    const parts = line.split(/\s+/)
    if (parts.length < 5) continue
    compiled.push({
      flag: parts[1],
      strip: normalizeAffix(parts[2]),
      add: normalizeAffix(parts[3]),
      condition: compileCondition(parts[4]),
    })
  }
  rules = compiled
}

function hasFlag(word: string, flag: string) {
  const flags = dictionary!.get(word)
  return flags !== undefined && flags.includes(flag)
}

function matchesCondition(rule: Rule, stem: string) {
  if (!rule.condition) return stem.length > 0
  return rule.condition.test(stem)
}

function inDictionary(word: string) {
  if (dictionary!.has(word)) return true
  for (const rule of rules) {
    if (rule.add === "") {
      const stem = word + rule.strip
      if (hasFlag(stem, rule.flag) && matchesCondition(rule, stem)) return true
      continue
    }
    if (!word.endsWith(rule.add)) continue
    const stem = word.slice(0, word.length - rule.add.length) + rule.strip
    if (!hasFlag(stem, rule.flag)) continue
    if (!matchesCondition(rule, stem)) continue
    return true
  }
  return false
}

export function isRussianWord(word: string): boolean {
  load()
  const letters = word.replace(/[^а-яё]/gi, "")
  if (!letters) return false
  const lower = letters.toLowerCase()
  const candidates = [letters, lower, lower.charAt(0).toUpperCase() + lower.slice(1)]
  for (const candidate of candidates) {
    if (inDictionary(candidate)) return true
  }
  return false
}
