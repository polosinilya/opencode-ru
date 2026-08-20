import type { Argv } from "yargs"
import { UI } from "../ui"
import * as prompts from "@clack/prompts"
import { Installation } from "../../installation"
import { InstallationVersion } from "@opencode-ai/core/installation/version"
import { t } from "../i18n"

export const UpgradeCommand = {
  command: "upgrade [target]",
  describe: t("upgrade opencode to the latest or a specific version"),
  builder: (yargs: Argv) => {
    return yargs
      .positional("target", {
        describe: t("version to upgrade to, for ex '0.1.48' or 'v0.1.48'"),
        type: "string",
      })
      .option("method", {
        alias: "m",
        describe: t("installation method to use"),
        type: "string",
        choices: ["curl", "npm", "pnpm", "bun", "brew", "choco", "scoop"],
      })
  },
  handler: async (args: { target?: string; method?: string }) => {
    UI.empty()
    UI.println(UI.logo("  "))
    UI.empty()
    prompts.intro(t("Upgrade"))
    const detectedMethod = await Installation.method()
    const method = (args.method as Installation.Method) ?? detectedMethod
    if (method === "unknown") {
      prompts.log.error(t("opencode is installed to {path} and may be managed by a package manager", { path: process.execPath }))
      const install = await prompts.select({
        message: t("Install anyways?"),
        options: [
          { label: t("Yes"), value: true },
          { label: t("No"), value: false },
        ],
        initialValue: false,
      })
      if (!install) {
        prompts.outro(t("Done"))
        return
      }
    }
    prompts.log.info(t("Using method: ") + method)
    const target = args.target ? args.target.replace(/^v/, "") : await Installation.latest()

    if (InstallationVersion === target) {
      prompts.log.warn(t("opencode upgrade skipped: {version} is already installed", { version: target }))
      prompts.outro(t("Done"))
      return
    }

    prompts.log.info(t("From {from} → {to}", { from: InstallationVersion, to: target }))
    const spinner = prompts.spinner()
    spinner.start(t("Upgrading..."))
    const err = await Installation.upgrade(method, target).catch((err) => err)
    if (err) {
      spinner.stop(t("Upgrade failed"), 1)
      if (err instanceof Installation.UpgradeFailedError) {
        // necessary because choco only allows install/upgrade in elevated terminals
        if (method === "choco" && err.stderr.includes("not running from an elevated command shell")) {
          prompts.log.error(t("Please run the terminal as Administrator and try again"))
        } else {
          prompts.log.error(err.stderr)
        }
      } else if (err instanceof Error) prompts.log.error(err.message)
      prompts.outro(t("Done"))
      return
    }
    spinner.stop(t("Upgrade complete"))
    prompts.outro(t("Done"))
  },
}
