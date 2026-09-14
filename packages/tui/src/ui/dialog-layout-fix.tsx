import { TextAttributes } from "@opentui/core"
import { For } from "solid-js"
import { createStore } from "solid-js/store"
import { useTheme } from "../context/theme"
import { useBindings } from "../keymap"
import { t } from "../util/i18n"
import { useDialog, type DialogContext } from "./dialog"

export type DialogLayoutFixResult = "fix" | "asis" | "cancel"

const options = ["fix", "asis", "cancel"] as const

export function DialogLayoutFix(props: {
  corrected: string
  changed: string[]
  onChoose: (result: DialogLayoutFixResult) => void
}) {
  const dialog = useDialog()
  const { theme } = useTheme()
  const [store, setStore] = createStore({ active: "fix" as DialogLayoutFixResult })
  const move = (step: number) => {
    const index = options.indexOf(store.active)
    setStore("active", options[(index + step + options.length) % options.length])
  }
  useBindings(() => ({
    bindings: [
      {
        key: "return",
        desc: t("Confirm dialog selection"),
        group: "Dialog",
        cmd: () => {
          props.onChoose(store.active)
          dialog.clear()
        },
      },
      {
        key: "left",
        desc: t("Previous dialog option"),
        group: "Dialog",
        cmd: () => move(-1),
      },
      {
        key: "right",
        desc: t("Next dialog option"),
        group: "Dialog",
        cmd: () => move(1),
      },
    ],
  }))
  const labels: Record<DialogLayoutFixResult, string> = {
    fix: t("Send corrected"),
    asis: t("Send as is"),
    cancel: t("Cancel"),
  }
  return (
    <box paddingLeft={2} paddingRight={2} gap={1}>
      <box flexDirection="row" justifyContent="space-between">
        <text attributes={TextAttributes.BOLD} fg={theme.text}>
          {t("Wrong keyboard layout?")}
        </text>
        <text fg={theme.textMuted} onMouseUp={() => dialog.clear()}>
          esc
        </text>
      </box>
      <box paddingBottom={1}>
        <text fg={theme.textMuted}>{t("Found {count} words in the wrong layout:", { count: props.changed.length })}</text>
      </box>
      <box paddingBottom={1}>
        <text fg={theme.text} wrapMode="word">
          {props.corrected}
        </text>
      </box>
      <box flexDirection="row" justifyContent="flex-end" paddingBottom={1} gap={1}>
        <For each={options}>
          {(key) => (
            <box
              paddingLeft={1}
              paddingRight={1}
              backgroundColor={key === store.active ? theme.primary : undefined}
              onMouseUp={() => {
                props.onChoose(key)
                dialog.clear()
              }}
            >
              <text fg={key === store.active ? theme.selectedListItemText : theme.textMuted}>{labels[key]}</text>
            </box>
          )}
        </For>
      </box>
    </box>
  )
}

DialogLayoutFix.show = (dialog: DialogContext, corrected: string, changed: string[]) =>
  new Promise<DialogLayoutFixResult | undefined>((resolve) => {
    dialog.replace(
      () => <DialogLayoutFix corrected={corrected} changed={changed} onChoose={(result) => resolve(result)} />,
      () => resolve(undefined),
    )
  })
