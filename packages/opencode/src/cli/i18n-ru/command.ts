import type { I18nParams } from "../i18n"

export const ru: Record<string, string | ((params?: I18nParams) => string)> = {
  // --- built-in command descriptions (Command service) ---
  "guided AGENTS.md setup": "пошаговая настройка AGENTS.md",
  "review changes [commit|branch|pr], defaults to uncommitted":
    "ревью изменений [commit|branch|pr], по умолчанию — незакоммиченные",
}
