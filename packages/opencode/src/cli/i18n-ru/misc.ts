import type { I18nParams } from "../i18n"

export const ru: Record<string, string | ((params?: I18nParams) => string)> = {
  // --- ui ---
  "Error: ": "Ошибка: ",

  // --- error formatting ---
  'MCP server "{name}" failed. Note, opencode does not support MCP authentication yet.':
    'MCP-сервер "{name}" не работает. Обратите внимание: opencode пока не поддерживает MCP-авторизацию.',
  "Model not found: {model}": "Модель не найдена: {model}",
  "Did you mean: {suggestions}": "Возможно, вы имели в виду: {suggestions}",
  "Try: `opencode models` to list available models": "Попробуйте: `opencode models` для списка доступных моделей",
  "Or check your config (opencode.json) provider/model names":
    "Или проверьте имена провайдер/модель в конфиге (opencode.json)",
  'Failed to initialize provider "{provider}". Check credentials and configuration.':
    'Не удалось инициализировать провайдера "{provider}". Проверьте учётные данные и конфигурацию.',
  "Config file at {path} is not valid JSON(C)": "Файл конфигурации {path} не является корректным JSON(C)",
  'Directory "{dir}" in {path} is not valid. Rename the directory to "{suggestion}" or remove it. This is a common typo.':
    'Каталог "{dir}" в {path} недопустим. Переименуйте каталог в "{suggestion}" или удалите его. Это распространённая опечатка.',
  "Failed to load remote config{remote}: the server returned a login page instead of JSON.":
    "Не удалось загрузить удалённый конфиг{remote}: сервер вернул страницу входа вместо JSON.",
  "Authentication is missing or has expired (the endpoint is likely behind an SSO or identity-aware proxy).":
    "Авторизация отсутствует или истекла (вероятно, конечная точка находится за SSO или прокси с аутентификацией).",
  "Run `opencode auth login {url}` to re-authenticate.": "Выполните `opencode auth login {url}` для повторной авторизации.",
  "Configuration is invalid{where}{message}": "Конфигурация недействительна{where}{message}",

  // --- web ---
  "start opencode server and open web interface": "запустить opencode-сервер и открыть веб-интерфейс",
  "OPENCODE_SERVER_PASSWORD is not set; server is unsecured.":
    "OPENCODE_SERVER_PASSWORD не задан; сервер не защищён.",
  "  Local access:      ": "  Локальный доступ:   ",
  "  Network access:    ": "  Сетевой доступ:     ",
  "  mDNS:              ": "  mDNS:               ",
  "  Web interface:    ": "  Веб-интерфейс:     ",

  // --- plug ---
  "install plugin and update config": "установить плагин и обновить конфигурацию",
  "npm module name": "имя npm-модуля",
  "install in global config": "установить в глобальный конфиг",
  "replace existing plugin version": "заменить существующую версию плагина",
  "module is required": "требуется модуль",
  "Install plugin {module}": "Установка плагина {module}",

  // --- upgrade ---
  "upgrade opencode to the latest or a specific version": "обновить opencode до последней или указанной версии",
  "version to upgrade to, for ex '0.1.48' or 'v0.1.48'": "версия для обновления, например '0.1.48' или 'v0.1.48'",
  "installation method to use": "используемый метод установки",
  "Upgrade": "Обновление",
  "opencode is installed to {path} and may be managed by a package manager":
    "opencode установлен в {path} и, возможно, управляется пакетным менеджером",
  "Install anyways?": "Всё равно установить?",
  "Yes": "Да",
  "No": "Нет",
  "Using method: ": "Используемый метод: ",
  "opencode upgrade skipped: {version} is already installed":
    "обновление opencode пропущено: версия {version} уже установлена",
  "From {from} → {to}": "С {from} → {to}",
  "Upgrading...": "Обновление...",
  "Upgrade failed": "Обновление не удалось",
  "Please run the terminal as Administrator and try again":
    "Запустите терминал от имени администратора и попробуйте снова",
  "Upgrade complete": "Обновление завершено",

  // --- uninstall ---
  "uninstall opencode and remove all related files": "удалить opencode и все связанные файлы",
  "keep configuration files": "сохранить файлы конфигурации",
  "keep session data and snapshots": "сохранить данные сессий и снимки",
  "show what would be removed without removing": "показать, что будет удалено, без удаления",
  "skip confirmation prompts": "пропустить запросы подтверждения",
  "Uninstall OpenCode": "Удаление OpenCode",
  "Installation method: {method}": "Метод установки: {method}",
  "Are you sure you want to uninstall?": "Вы уверены, что хотите удалить?",
  "Cancelled": "Отменено",
  "Dry run - no changes made": "Пробный запуск — изменения не внесены",
  "The following will be removed:": "Будет удалено следующее:",
  "(keeping)": "(сохраняется)",
  "Binary: ": "Бинарный файл: ",
  "Shell PATH in ": "Путь в Shell: ",
  "Package: ": "Пакет: ",
  "Skipping {label} (--keep-{flag})": "Пропуск {label} (--keep-{flag})",
  "Removing {label}...": "Удаление {label}...",
  "Failed to remove {label}": "Не удалось удалить {label}",
  "Removed {label}": "Удалено: {label}",
  "Cleaning shell config...": "Очистка конфигурации оболочки...",
  "Failed to clean shell config": "Не удалось очистить конфигурацию оболочки",
  "Cleaned shell config": "Конфигурация оболочки очищена",
  "Running {command}...": "Выполнение {command}...",
  "Package manager uninstall failed: exit code {code}":
    "Не удалось удалить через пакетный менеджер: код выхода {code}",
  "You may need to run '{command}' from an elevated command shell":
    "Возможно, вам нужно запустить '{command}' из оболочки с правами администратора",
  "You may need to run manually: {command}": "Возможно, вам нужно выполнить вручную: {command}",
  "Package removed": "Пакет удалён",
  "To finish removing the binary, run:": "Чтобы завершить удаление бинарного файла, выполните:",
  "Some operations failed:": "Некоторые операции не удались:",
  "Thank you for using OpenCode!": "Спасибо, что пользуетесь OpenCode!",

  // --- network ---
  "port to listen on": "порт для прослушивания",
  "hostname to listen on": "имя хоста для прослушивания",
  "enable mDNS service discovery (defaults hostname to 0.0.0.0)":
    "включить обнаружение служб mDNS (по умолчанию hostname становится 0.0.0.0)",
  "custom domain name for mDNS service (default: opencode.local)":
    "пользовательское доменное имя для mDNS-службы (по умолчанию: opencode.local)",
  "additional domains to allow for CORS": "дополнительные домены, разрешённые для CORS",
}
