import type { DialogContext } from "../ui/dialog"
import { DialogLayoutFix } from "../ui/dialog-layout-fix"
import { findLayoutIssues } from "./keyboard-layout"
import { rememberWords } from "./layout-dictionary"

export async function confirmLayout(dialog: DialogContext, text: string): Promise<string | undefined> {
  const issues = findLayoutIssues(text)
  if (!issues) return text
  const choice = await DialogLayoutFix.show(dialog, issues.corrected, issues.changed)
  if (!choice || choice === "cancel") return undefined
  if (choice === "fix") return issues.corrected
  rememberWords(issues.changed)
  return text
}
