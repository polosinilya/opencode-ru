/**
 * Russian word check backed by the system hunspell dictionary (libhunspell).
 *
 * Used to avoid converting Latin words that are not actually Russian typed in
 * the wrong layout (product names, identifiers, English words). Returns
 * `undefined` when no Russian dictionary is available, so callers can fall back
 * to their previous behavior.
 */

import { dlopen, FFIType, ptr, type Pointer } from "bun:ffi"
import { existsSync } from "node:fs"

const AFF_PATHS = [
  "/usr/share/hunspell/ru_RU.aff",
  "/usr/share/myspell/ru_RU.aff",
  "/usr/share/myspell/dicts/ru_RU.aff",
  "/usr/share/hunspell/ru_RU.aff",
]

const DIC_PATHS = [
  "/usr/share/hunspell/ru_RU.dic",
  "/usr/share/myspell/ru_RU.dic",
  "/usr/share/myspell/dicts/ru_RU.dic",
]

const encoder = new TextEncoder()

type Hunspell = {
  Hunspell_create: (aff: Pointer, dic: Pointer) => Pointer | null
  Hunspell_spell: (handle: Pointer, word: Pointer) => number
  Hunspell_destroy: (handle: Pointer) => void
}

const SYMBOLS = {
  Hunspell_create: { args: [FFIType.cstring, FFIType.cstring], returns: FFIType.ptr },
  Hunspell_spell: { args: [FFIType.ptr, FFIType.cstring], returns: FFIType.int },
  Hunspell_destroy: { args: [FFIType.ptr], returns: FFIType.void },
} as const

let initialized = false
let handle: Pointer | null = null
let library: ReturnType<typeof dlopen<typeof SYMBOLS>> | null = null

function cstring(value: string) {
  return ptr(encoder.encode(value + "\0"))
}

function init() {
  if (initialized) return
  initialized = true
  try {
    const aff = AFF_PATHS.find((path) => existsSync(path))
    const dic = DIC_PATHS.find((path) => existsSync(path))
    if (!aff || !dic) return
    library = dlopen("libhunspell-1.7.so.0", SYMBOLS)
    const symbols = library.symbols as Hunspell
    const created = symbols.Hunspell_create(cstring(aff), cstring(dic))
    if (created) handle = created
  } catch {
    handle = null
  }
}

export function isRussianWord(word: string): boolean | undefined {
  init()
  if (!handle || !library) return undefined
  const letters = word.replace(/[^а-яё]/gi, "")
  if (!letters) return false
  return (library.symbols as Hunspell).Hunspell_spell(handle, cstring(letters)) === 1
}
