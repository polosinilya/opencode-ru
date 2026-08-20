import type { I18nParams } from "../i18n"

export const ru: Record<string, string | ((params?: I18nParams) => string)> = {
  // --- serve ---
  "starts a headless opencode server": "запуск автономного opencode-сервера",
  "Warning: OPENCODE_SERVER_PASSWORD is not set; server is unsecured.":
    "Предупреждение: OPENCODE_SERVER_PASSWORD не задан; сервер не защищён.",
  "opencode server listening on http://{host}:{port}": "opencode-сервер слушает http://{host}:{port}",

  // --- session ---
  "manage sessions": "управление сессиями",
  "delete a session": "удалить сессию",
  "session ID to delete": "идентификатор сессии для удаления",
  "Session not found: {id}": "Сессия не найдена: {id}",
  "Session {id} deleted": "Сессия {id} удалена",
  "list sessions": "список сессий",
  "limit to N most recent sessions": "ограничить N последними сессиями",
  "output format": "формат вывода",
  "Session ID": "ID сессии",
  "Title": "Название",
  "Updated": "Обновлено",

  // --- attach ---
  "attach to a running opencode server": "подключиться к запущенному opencode-серверу",
  "directory to run in": "каталог для запуска",
  "continue the last session": "продолжить последнюю сессию",
  "session id to continue": "идентификатор сессии для продолжения",
  "fork the session when continuing (use with --continue or --session)":
    "создать ответвление сессии при продолжении (используйте с --continue или --session)",
  "basic auth password (defaults to OPENCODE_SERVER_PASSWORD)":
    "пароль basic auth (по умолчанию OPENCODE_SERVER_PASSWORD)",
  "basic auth username (defaults to OPENCODE_SERVER_USERNAME or 'opencode')":
    "имя пользователя basic auth (по умолчанию OPENCODE_SERVER_USERNAME или 'opencode')",
  "start the minimal interactive interface": "запустить минимальный интерактивный интерфейс",
  "disable mini session history replay on resume and after resize":
    "отключить повтор истории мини-сессии при возобновлении и после изменения размера",
  "cap visible mini replay to the newest N messages":
    "ограничить видимый повтор мини-сессии последними N сообщениями",
  "--replay is not supported; replay is enabled by default":
    "--replay не поддерживается; повтор включён по умолчанию",
  "{flag} requires --mini": "{flag} требует --mini",
  "--fork requires --continue or --session": "--fork требует --continue или --session",
  "Failed to change directory to {dir}": "Не удалось перейти в каталог {dir}",

  // --- run ---
  "run opencode with a message": "запустить opencode с сообщением",
  "message to send": "сообщение для отправки",
  "the command to run, use message for args": "команда для выполнения, для аргументов используйте message",
  "fork the session before continuing (requires --continue or --session)":
    "создать ответвление сессии перед продолжением (требуется --continue или --session)",
  "share the session": "опубликовать сессию",
  "model to use in the format of provider/model": "модель в формате провайдер/модель",
  "agent to use": "используемый агент",
  "format: default (formatted) or json (raw JSON events)":
    "формат: default (форматированный) или json (сырые JSON-события)",
  "file(s) to attach to message": "файл(ы) для прикрепления к сообщению",
  "title for the session (uses truncated prompt if no value provided)":
    "название сессии (если не указано, используется усечённый промпт)",
  "attach to a running opencode server (e.g., http://localhost:4096)":
    "подключиться к запущенному opencode-серверу (например, http://localhost:4096)",
  "directory to run in, path on remote server if attaching":
    "каталог для запуска, путь на удалённом сервере при подключении",
  "port for the local server (defaults to random port if no value provided)":
    "порт локального сервера (если не указан, используется случайный порт)",
  "model variant (provider-specific reasoning effort, e.g., high, max, minimal)":
    "вариант модели (уровень рассуждений, специфичный для провайдера, например high, max, minimal)",
  "show thinking blocks": "показывать блоки рассуждений",
  "replay interactive session history on resume and after resize (use --no-replay to disable)":
    "повтор истории интерактивной сессии при возобновлении и после изменения размера (--no-replay для отключения)",
  "cap visible interactive replay to the newest N messages":
    "ограничить видимый повтор интерактивной сессии последними N сообщениями",
  "run in direct interactive split-footer mode": "запуск в прямом интерактивном режиме с разделённым нижним колонтитулом",
  "auto-approve permissions that are not explicitly denied (dangerous!)":
    "автоматически одобрять разрешения, которые явно не запрещены (опасно!)",
  "enable direct interactive demo slash commands; pass one as the message to run it immediately":
    "включить демо-слэш-команды прямого интерактивного режима; передайте одну как сообщение для немедленного запуска",
  "--mini cannot be used with --command": "--mini нельзя использовать с --command",
  "--mini must be used without the run subcommand": "--mini нужно использовать без подкоманды run",
  "--demo requires --mini": "--demo требует --mini",
  "--mini cannot be used with --format json": "--mini нельзя использовать с --format json",
  "--replay-limit requires --mini": "--replay-limit требует --mini",
  "--replay-limit must be a positive integer": "--replay-limit должен быть положительным целым числом",
  "--mini requires a TTY stdout": "--mini требует TTY в stdout",
  "File not found: {file}": "Файл не найден: {file}",
  "Cannot attach local directory without a shared filesystem: {file}":
    "Нельзя прикрепить локальный каталог без общей файловой системы: {file}",
  "Cannot attach local file larger than 10 MiB or a special file: {file}":
    "Нельзя прикрепить локальный файл больше 10 МиБ или специальный файл: {file}",
  "You must provide a message or a command": "Вы должны указать сообщение или команду",
  "Session not found": "Сессия не найдена",
  "Failed to create session": "Не удалось создать сессию",
  "Failed to resolve remote directory": "Не удалось определить удалённый каталог",
  'agent "{name}" not found. Falling back to default agent':
    'агент "{name}" не найден. Используется агент по умолчанию',
  'agent "{name}" is a subagent, not a primary agent. Falling back to default agent':
    'агент "{name}" является субагентом, а не основным агентом. Используется агент по умолчанию',
  "failed to list agents from {url}. Falling back to default agent":
    "не удалось получить список агентов с {url}. Используется агент по умолчанию",
  "Thinking: ": "Размышление: ",
  "permission requested: {permission} ({patterns}); auto-rejecting":
    "запрошено разрешение: {permission} ({patterns}); автоматический отказ",
  "Mini command handler is unavailable": "Обработчик мини-команды недоступен",
  "{title} failed": "{title} не удалось",

  // --- tui ---
  "start opencode tui": "запуск opencode TUI",
  "path to start opencode in": "путь, в котором запустить opencode",
  "prompt to use": "используемый промпт",
  "{flag} cannot be used with --mini": "{flag} нельзя использовать с --mini",

  // --- stats ---
  "show token usage and cost statistics": "показать статистику использования токенов и стоимость",
  "show stats for the last N days (default: all time)":
    "показать статистику за последние N дней (по умолчанию: за всё время)",
  "number of tools to show (default: all)": "количество инструментов для показа (по умолчанию: все)",
  "show model statistics (default: hidden). Pass a number to show top N, otherwise shows all":
    "показать статистику по моделям (по умолчанию: скрыта). Передайте число, чтобы показать топ N, иначе покажутся все",
  "filter by project (default: all projects, empty string: current project)":
    "фильтр по проекту (по умолчанию: все проекты, пустая строка: текущий проект)",
  "Large dataset detected ({count} sessions). This may take a while...":
    "Обнаружен большой набор данных ({count} сессий). Это может занять некоторое время...",
  "Sessions": "Сессии",
  "Messages": "Сообщения",
  "Days": "Дней",
  "Total Cost": "Общая стоимость",
  "Avg Cost/Day": "Среднее в день",
  "Avg Tokens/Session": "Среднее токенов/сессия",
  "Median Tokens/Session": "Медиана токенов/сессия",
  "Input": "Вход",
  "Output": "Выход",
  "Cache Read": "Чтение кэша",
  "Cache Write": "Запись кэша",
  "  Messages": "  Сообщения",
  "  Input Tokens": "  Входные токены",
  "  Output Tokens": "  Выходные токены",
  "  Cache Read": "  Чтение кэша",
  "  Cache Write": "  Запись кэша",
  "  Cost": "  Стоимость",
}
