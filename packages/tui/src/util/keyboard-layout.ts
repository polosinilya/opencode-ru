/**
 * Keyboard layout conversion (QWERTY <-> ЙЦУКЕН) for the TUI prompt.
 *
 * Powers the "input.fix.layout" command: it converts the last word typed in
 * the wrong layout, e.g. "Ghbdtn" -> "Привет" or "Руддщ" -> "Hello".
 *
 * The conversion is purely script based: a Latin word becomes Cyrillic and a
 * Cyrillic word becomes Latin. It never touches mixed-script words.
 */

import { isKnownWord } from "./layout-dictionary"
import { isRussianWord } from "./hunspell"

const LAT_TO_CYR: Record<string, string> = {
  q: "й",
  w: "ц",
  e: "у",
  r: "к",
  t: "е",
  y: "н",
  u: "г",
  i: "ш",
  o: "щ",
  p: "з",
  "[": "х",
  "]": "ъ",
  a: "ф",
  s: "ы",
  d: "в",
  f: "а",
  g: "п",
  h: "р",
  j: "о",
  k: "л",
  l: "д",
  ";": "ж",
  "'": "э",
  z: "я",
  x: "ч",
  c: "с",
  v: "м",
  b: "и",
  n: "т",
  m: "ь",
  ",": "б",
  ".": "ю",
  "/": ".",
  "`": "ё",
}

const CYR_TO_LAT: Record<string, string> = Object.fromEntries(
  Object.entries(LAT_TO_CYR).map(([lat, cyr]) => [cyr, lat]),
)

const LATIN = /[a-z]/i
const CYRILLIC = /[а-яё]/i
const WORD = /[\[\];',.\/`]*[a-zа-яё]+(?:[\[\];',.\/`]+[a-zа-яё]+)*[\[\]]?/gi
const LAST_WORD = /[\[\];',.\/`]*[a-zа-яё]+(?:[\[\];',.\/`]+[a-zа-яё]+)*[\[\]]?$/i

function mapChar(char: string, map: Record<string, string>) {
  const mapped = map[char.toLowerCase()]
  if (mapped === undefined) return char
  return char === char.toLowerCase() ? mapped : mapped.toUpperCase()
}

/** Convert a single word to the opposite keyboard layout. */
export function convertWord(word: string) {
  const hasLatin = LATIN.test(word)
  const hasCyrillic = CYRILLIC.test(word)
  if (hasLatin === hasCyrillic) return word
  const map = hasLatin ? LAT_TO_CYR : CYR_TO_LAT
  return [...word].map((char) => mapChar(char, map)).join("")
}

export function convertText(text: string) {
  return text.replace(WORD, (word) => convertWord(word))
}

export type LastWordFix = {
  start: number
  end: number
  replacement: string
  cursor: number
}

/**
 * Find the last word before the cursor and convert it to the opposite layout.
 * Returns undefined when there is nothing to convert.
 */
export function fixLastWord(text: string, cursor: number): LastWordFix | undefined {
  const match = text.slice(0, cursor).match(LAST_WORD)
  if (!match) return undefined
  const word = match[0]
  const replacement = convertWord(word)
  if (replacement === word) return undefined
  const start = cursor - word.length
  return { start, end: cursor, replacement, cursor: start + replacement.length }
}

export type LayoutIssues = {
  corrected: string
  changed: string[]
}

const COMMON_SHORT = new Set([
  "a",
  "i",
  "am",
  "an",
  "as",
  "at",
  "be",
  "by",
  "do",
  "go",
  "he",
  "if",
  "in",
  "is",
  "it",
  "me",
  "my",
  "no",
  "of",
  "on",
  "or",
  "so",
  "to",
  "up",
  "us",
  "we",
  "ok",
  "hi",
])

export function findLayoutIssues(text: string): LayoutIssues | undefined {
  const changed: string[] = []
  const corrected = text.replace(WORD, (word) => {
    const hasLatin = LATIN.test(word)
    const hasCyrillic = CYRILLIC.test(word)
    if (hasLatin === hasCyrillic) return word
    if (hasLatin) {
      const letters = word.replace(/[^a-z]/gi, "").toLowerCase()
      const known = letters.length <= 2 ? COMMON_SHORT.has(letters) : isKnownWord(word)
      if (known) return word
      const fixed = convertWord(word)
      if (fixed === word) return word
      if (isRussianWord(fixed) === false) return word
      changed.push(word)
      return fixed
    }
    const fixed = convertWord(word)
    const latin = fixed.replace(/[^a-z]/gi, "")
    if (fixed === word || latin.length < 3 || !isKnownWord(fixed)) return word
    changed.push(word)
    return fixed
  })
  if (!changed.length) return undefined
  return { corrected, changed }
}
