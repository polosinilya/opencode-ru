import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs"
import { homedir } from "node:os"
import { dirname, join } from "node:path"

const SYSTEM_PATHS = ["/usr/share/dict/words", "/etc/dictionaries-common/words", "/usr/dict/words"]

const COMMON =
  "print if else for while return def class import from as try except finally with open read write close int str float bool list dict set tuple none true false this self super var let const function async await yield new delete include define typedef struct namespace using virtual override abstract len range map filter sorted reversed min max sum abs round format input output exit quit exec eval append extend insert remove pop clear split join replace find index count path file dir os sys math time json xml html http url api sql txt exe dll lib bin tmp log www com org net ru en start stop step".split(
    /\s+/,
  )

const LETTERS = /^[a-z]{2,}$/

function personalPath() {
  const base = process.env.XDG_CONFIG_HOME ?? join(homedir(), ".config")
  return join(base, "opencode", "layout-words.txt")
}

function readWords(path: string) {
  if (!existsSync(path)) return []
  return readFileSync(path, "utf8")
    .split("\n")
    .map((line) => line.trim().toLowerCase())
    .filter((word) => word.length > 0)
}

let dictionary: Set<string> | undefined

function dict() {
  if (dictionary) return dictionary
  const words = new Set(COMMON)
  for (const path of SYSTEM_PATHS) {
    const loaded = readWords(path).filter((word) => LETTERS.test(word))
    if (!loaded.length) continue
    for (const word of loaded) words.add(word)
    break
  }
  for (const word of readWords(personalPath())) {
    if (LETTERS.test(word)) words.add(word)
  }
  dictionary = words
  return words
}

export function isKnownWord(word: string) {
  const letters = word.replace(/[^a-z]/gi, "").toLowerCase()
  return letters.length > 0 && dict().has(letters)
}

export function rememberWords(words: string[]) {
  const known = dict()
  const seen = new Set(readWords(personalPath()))
  const additions = words
    .map((word) => word.replace(/[^a-z]/gi, "").toLowerCase())
    .filter((word) => word.length > 0 && !seen.has(word) && !known.has(word))
  if (!additions.length) return
  const path = personalPath()
  mkdirSync(dirname(path), { recursive: true })
  appendFileSync(path, additions.join("\n") + "\n")
  for (const word of additions) known.add(word)
}
