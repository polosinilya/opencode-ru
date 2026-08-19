/**
 * i18n for the opencode TUI.
 *
 * Language detection order:
 *   1. OPENCODE_LANG environment variable
 *   2. LC_ALL / LC_MESSAGES / LANG environment variables
 *   3. default: English
 *
 * Usage:
 *   import { t } from "../../util/i18n"
 *   t("Submit")
 *   t("Delete {name}?", { name: "file.ts" })
 *
 * Translation keys are the original English strings, which allows a
 * graceful fallback to English when a translation is missing.
 */

export type I18nParams = Record<string, string | number>

type Entry = string | ((params?: I18nParams) => string)

const ru: Record<string, Entry> = {
  // --- common actions ---
  "Submit": "Отправить",
  "Cancel": "Отмена",
  "Confirm": "Подтвердить",
  "OK": "ОК",
  "Close": "Закрыть",
  "Back": "Назад",
  "Next": "Далее",
  "Previous": "Предыдущий",
  "Skip": "Пропустить",
  "Save": "Сохранить",
  "Edit": "Изменить",
  "Delete": "Удалить",
  "Copy": "Копировать",
  "Paste": "Вставить",
  "Rename": "Переименовать",
  "Open": "Открыть",
  "Create": "Создать",
  "Add": "Добавить",
  "Remove": "Удалить",
  "Search": "Поиск",
  "Loading": "Загрузка",
  "Done": "Готово",
  "Exit": "Выход",
  "Help": "Справка",
  "Settings": "Настройки",
  "Preferences": "Параметры",
  "Refresh": "Обновить",
  "Retry": "Повторить",
  "Clear": "Очистить",
  "Select": "Выбрать",
  "Deselect": "Снять выбор",
  "Expand": "Развернуть",
  "Collapse": "Свернуть",
  "Toggle": "Переключить",
  "Apply": "Применить",
  "Accept": "Принять",
  "Reject": "Отклонить",
  "Continue": "Продолжить",
  "Stop": "Остановить",
  "Start": "Начать",
  "Pause": "Пауза",
  "Resume": "Продолжить",
  "Send": "Отправить",
  "Reset": "Сбросить",
  "Hide": "Скрыть",
  "Show": "Показать",
  "Yes": "Да",
  "No": "Нет",
  "None": "Нет",
  "All": "Все",
  "None selected": "Ничего не выбрано",

  // --- dialog basics ---
  "Confirm dialog selection": "Подтвердить выбор",
  "Previous dialog option": "Предыдущий вариант",
  "Next dialog option": "Следующий вариант",
  "Close help": "Закрыть справку",
  "Close dialog": "Закрыть диалог",
  "Dialog": "Диалог",
  "Select an option": "Выберите вариант",

  // --- help dialog ---
  "Keyboard shortcuts": "Горячие клавиши",
  "Commands": "Команды",
  "General": "Общие",
  "Session": "Сессия",
  "Editing": "Редактирование",
  "View": "Вид",
  "Navigation": "Навигация",
  "Open the command palette": "Открыть палитру команд",
  "Cycle themes": "Сменить тему",
  "Toggle sidebar": "Переключить боковую панель",
  "Switch to model": "Переключить модель",
  "Add new session": "Новая сессия",
  "Add new workspace": "Новая рабочая область",
  "Open sessions list": "Список сессий",
  "Open workspaces list": "Список рабочих областей",
  "Show help": "Показать справку",

  // --- session ---
  "Send message": "Отправить сообщение",
  "New session": "Новая сессия",
  "Session title": "Название сессии",
  "Session created": "Сессия создана",
  "Session deleted": "Сессия удалена",
  "Session renamed": "Сессия переименована",
  "Delete session": "Удалить сессию",
  "Are you sure you want to delete this session?": "Вы уверены, что хотите удалить эту сессию?",
  "Copy session link": "Скопировать ссылку на сессию",
  "Session link copied": "Ссылка на сессию скопирована",
  "Share": "Поделиться",
  "Share session": "Поделиться сессией",

  // --- workspaces ---
  "New workspace": "Новая рабочая область",
  "Workspace title": "Название рабочей области",
  "Workspace created": "Рабочая область создана",
  "Workspace unavailable": "Рабочая область недоступна",
  "Switch workspace": "Переключить рабочую область",
  "Delete workspace": "Удалить рабочую область",

  // --- providers / models ---
  "Connect provider": "Подключить провайдера",
  "View all providers": "Все провайдеры",
  "Favorite": "Избранное",
  "Model": "Модель",
  "Models": "Модели",
  "Provider": "Провайдер",
  "Providers": "Провайдеры",

  // --- MCP ---
  "Manage MCP servers": "Управление MCP-серверами",
  "MCP servers": "MCP-серверы",
  "Add MCP server": "Добавить MCP-сервер",

  // --- permissions ---
  "Allow": "Разрешить",
  "Deny": "Запретить",
  "Always allow": "Разрешать всегда",
  "Always deny": "Запрещать всегда",
  "Requesting permission": "Запрос разрешения",
  "Approve": "Одобрить",

  // --- status / errors ---
  "Connecting": "Подключение",
  "Connected": "Подключено",
  "Disconnected": "Отключено",
  "Reconnecting": "Переподключение",
  "Waiting for response": "Ожидание ответа",
  "Thinking": "Размышление",
  "Generating": "Генерация",
  "Error": "Ошибка",
  "Warning": "Предупреждение",
  "Info": "Информация",
  "Failed": "Не удалось",
  "Success": "Успешно",
  "No results": "Ничего не найдено",
  "No items": "Нет элементов",
  "Not found": "Не найдено",
  "Unknown error": "Неизвестная ошибка",
  "Something went wrong": "Что-то пошло не так",
  "Loading session": "Загрузка сессии",

  // --- todo ---
  "Mark as done": "Отметить выполненным",
  "Mark as pending": "Отметить как ожидающее",

  // --- agents ---
  "Agents": "Агенты",
  "Agent": "Агент",
  "Tasks": "Задачи",
  "Add agent": "Добавить агента",

  // --- misc UI ---
  "Type a message": "Введите сообщение",
  "Search files": "Поиск файлов",
  "File changes": "Изменения файлов",
  "No changes": "Без изменений",
  "Press Enter to send": "Нажмите Enter для отправки",
  "Press Esc to cancel": "Нажмите Esc для отмены",
  "Press Tab to autocomplete": "Нажмите Tab для автодополнения",
  "All systems operational": "Все системы работают",

  // --- dynamic strings ---
  "Delete {name}?": "Удалить {name}?",
  "Rename {name}": "Переименовать {name}",
  "{count} files": (p) => pluralRu(p?.count, ["файл", "файла", "файлов"]),
  "{count} sessions": (p) => pluralRu(p?.count, ["сессия", "сессии", "сессий"]),
  "{count} messages": (p) => pluralRu(p?.count, ["сообщение", "сообщения", "сообщений"]),

  // --- diff viewer ---
  "Diff": "Дифф",
  "Diff shortcuts": "Горячие клавиши диффа",
  "Close diff viewer": "Закрыть просмотр диффов",
  "Move diff viewer down": "Прокрутить дифф вниз",
  "Move diff viewer up": "Прокрутить дифф вверх",
  "Page diff viewer down": "Страница диффа вниз",
  "Page diff viewer up": "Страница диффа вверх",
  "Toggle diff viewer item": "Переключить элемент просмотра диффов",
  "Expand diff viewer item": "Развернуть элемент просмотра диффов",
  "Expand all diff viewer folders": "Развернуть все папки просмотра диффов",
  "Collapse diff viewer item": "Свернуть элемент просмотра диффов",
  "Jump to next diff hunk": "К следующему фрагменту диффа",
  "Jump to previous diff hunk": "К предыдущему фрагменту диффа",
  "Jump to next diff file": "К следующему файлу диффа",
  "Jump to previous diff file": "К предыдущему файлу диффа",
  "Toggle selected diff file reviewed": "Переключить статус «просмотрено» для файла",
  "Switch diff viewer focus": "Переключить фокус просмотра диффов",
  "Toggle diff viewer file tree": "Переключить дерево файлов просмотра диффов",
  "Toggle single patch view": "Переключить вид одного патча",
  "Switch diff viewer source": "Переключить источник диффа",
  "Toggle diff viewer split or unified view": "Переключить разделённый или объединённый вид диффа",
  "Show more diff viewer shortcuts": "Показать больше горячих клавиш диффа",
  "Working tree": "Рабочее дерево",
  "Main branch": "Главная ветка",
  "Last turn": "Последний ход",
  "Show current git changes": "Показать текущие git-изменения",
  "Show changes compared to main branch": "Показать изменения относительно главной ветки",
  "Show changes from the last assistant turn": "Показать изменения с последнего хода ассистента",
  "Switch source": "Переключить источник",
  "Mark selected file reviewed": "Отметить выбранный файл как просмотренный",
  "Loading diff...": "Загрузка диффа...",
  "No diff!": "Нет диффа!",
  "Failed to load diff": "Не удалось загрузить дифф",
  "No patch available for this file.": "Для этого файла нет патча.",
  "focus file tree": "фокус на дерево файлов",
  "next file": "следующий файл",
  "next hunk": "следующий фрагмент",
  "previous hunk": "предыдущий фрагмент",
  "previous file": "предыдущий файл",
  "switch source": "переключить источник",
  "mark reviewed": "отметить просмотренным",
  "all": "все",
  "Close viewer": "Закрыть просмотр",
  "Quit the diff viewer": "Выйти из просмотра диффов",
  "Focus file tree": "Фокус на дерево файлов",
  "Move keyboard focus between the file tree and patch pane": "Перемещение фокуса между деревом файлов и областью патча",
  "Next hunk": "Следующий фрагмент",
  "Jump to the next diff hunk": "Перейти к следующему фрагменту диффа",
  "Previous hunk": "Предыдущий фрагмент",
  "Jump to the previous diff hunk": "Перейти к предыдущему фрагменту диффа",
  "Next file": "Следующий файл",
  "Select the next changed file in file-tree order": "Выбрать следующий изменённый файл в порядке дерева",
  "Previous file": "Предыдущий файл",
  "Select the previous changed file in file-tree order": "Выбрать предыдущий изменённый файл в порядке дерева",
  "Toggle file tree": "Переключить дерево файлов",
  "Show or hide the file tree sidebar": "Показать или скрыть боковую панель дерева файлов",
  "Toggle patches": "Переключить патчи",
  "Switch between one selected patch and all patches": "Переключение между одним выбранным патчем и всеми патчами",
  "Choose working tree, main branch, or last-turn changes": "Выбор рабочего дерева, главной ветки или изменений последнего хода",
  "Toggle view": "Переключить вид",
  "Switch between split and unified diff layout": "Переключение между разделённой и объединённой раскладкой диффа",
  "Expand all folders": "Развернуть все папки",
  "Open every folder in the file tree": "Открыть все папки в дереве файлов",
  "Mark reviewed": "Отметить просмотренным",
  "Toggle reviewed state for the selected file": "Переключить статус «просмотрено» для выбранного файла",
  "Key": "Клавиша",
  "Open diff viewer": "Открыть просмотр диффов",
  "working tree": "рабочее дерево",
  "last turn": "последний ход",
  "main branch": "главная ветка",

  // --- which-key ---
  "Previous key binding group": "Предыдущая группа привязок клавиш",
  "Show the previous which-key group": "Показать предыдущую группу which-key",
  "Next key binding group": "Следующая группа привязок клавиш",
  "Show the next which-key group": "Показать следующую группу which-key",
  "Scroll key bindings up": "Прокрутить привязки клавиш вверх",
  "Scroll the which-key panel up": "Прокрутить панель which-key вверх",
  "Scroll key bindings down": "Прокрутить привязки клавиш вниз",
  "Scroll the which-key panel down": "Прокрутить панель which-key вниз",
  "Page key bindings up": "Страница привязок клавиш вверх",
  "Page the which-key panel up": "Страница панели which-key вверх",
  "Page key bindings down": "Страница привязок клавиш вниз",
  "Page the which-key panel down": "Страница панели which-key вниз",
  "First key binding": "Первая привязка клавиш",
  "Jump to the first which-key binding": "Перейти к первой привязке which-key",
  "Last key binding": "Последняя привязка клавиш",
  "Jump to the last which-key binding": "Перейти к последней привязке which-key",
  "Jump to first which-key binding": "Перейти к первой привязке which-key",
  "Jump to last which-key binding": "Перейти к последней привязке which-key",
  "No reachable bindings": "Нет доступных привязок",
  "toggle": "переключить",
  "Show key bindings": "Показать привязки клавиш",
  "Toggle which-key overlay": "Переключить оверлей which-key",
  "Toggle key bindings layout": "Переключить раскладку привязок клавиш",
  "Switch which-key between dock and overlay mode": "Переключение which-key между режимами панели и оверлея",
  "Toggle pending key preview": "Переключить предпросмотр ожидающих клавиш",
  "Automatically show which-key for pending key sequences in overlay mode":
    "Автоматически показывать which-key для ожидающих последовательностей клавиш в режиме оверлея",
  "Scroll which-key up": "Прокрутить which-key вверх",
  "Scroll which-key down": "Прокрутить which-key вниз",
  "Page which-key up": "Страница which-key вверх",
  "Page which-key down": "Страница which-key вниз",
  "Switch which-key layout": "Переключить раскладку which-key",
  "Toggle which-key panel": "Переключить панель which-key",
  "Toggle which-key pending preview": "Переключить предпросмотр which-key",

  // --- notifications ---
  "Session aborted": "Сессия прервана",
  "Model stopped responding": "Модель перестала отвечать",
  "Session error": "Ошибка сессии",
  "Question needs input": "Вопрос требует ответа",
  "Permission needs input": "Разрешение требует решения",
  "Session done": "Сессия завершена",

  // --- sidebar / home ---
  "Getting started": "Начало работы",
  "OpenCode includes free models so you can start immediately.":
    "OpenCode включает бесплатные модели, так что вы можете начать сразу.",
  "Connect from 75+ providers to use other models, including Claude, GPT, Gemini etc":
    "Подключите более 75 провайдеров, чтобы использовать другие модели: Claude, GPT, Gemini и др.",
  "Todo": "Задачи",
  "Context": "Контекст",
  "LSPs are disabled": "LSP отключены",
  "LSPs will activate as files are read": "LSP активируются по мере чтения файлов",
  "Modified Files": "Изменённые файлы",
  "Needs auth": "Требуется авторизация",
  "Needs client ID": "Требуется client ID",
  "Get started": "Начать",
  "Show tips": "Показать советы",
  "Hide tips": "Скрыть советы",
  "Tip": "Совет",
  "or": "или",
  "Press": "Нажмите",
  "Use": "Используйте",
  "through": "до",
  "in": "в",
  "built-in themes": "встроенных тем",
  "to switch between": "для переключения между",
  "to cycle between Build and Plan agents": "для переключения между агентами Build и Plan",
  "to paste images from your clipboard into the prompt": "чтобы вставить изображения из буфера обмена в промпт",
  "to compose messages in your external editor": "для набора сообщений во внешнем редакторе",
  "to switch between available AI models": "для переключения между доступными AI-моделями",
  "to start a fresh conversation session": "для начала новой сессии разговора",
  "to list, pin, and continue sessions": "для просмотра, закрепления и продолжения сессий",
  "in the session list to pin one at the top": "в списке сессий, чтобы закрепить одну вверху",
  "to switch pinned sessions": "для переключения закреплённых сессий",
  "to save the conversation as Markdown": "для сохранения разговора в Markdown",
  "to copy the assistant's last message to clipboard": "чтобы скопировать последнее сообщение ассистента в буфер обмена",
  "to see all available actions and commands": "чтобы увидеть все доступные действия и команды",
  "The leader key is": "Клавиша-лидер — это",
  "combine with other keys for quick actions": "объединяйте с другими клавишами для быстрых действий",
  "to quickly switch between recently used models": "для быстрого переключения между недавно использованными моделями",
  "in a session to show or hide the sidebar panel": "в сессии, чтобы показать или скрыть боковую панель",
  "to navigate through conversation history": "для навигации по истории разговора",
  "to jump to the beginning of the conversation": "для перехода к началу разговора",
  "to jump to the most recent message": "для перехода к самому последнему сообщению",
  "to add newlines in your prompt": "для добавления переносов строк в промпте",
  "when typing to clear the input field": "при вводе, чтобы очистить поле ввода",
  "to stop the AI mid-response": "чтобы остановить AI на середине ответа",
  "for parent/child sessions": "для родительских/дочерних сессий",
  "to jump to specific messages": "для перехода к конкретным сообщениям",
  "to toggle code block visibility in messages": "для переключения видимости блоков кода в сообщениях",
  "to see system status info": "для просмотра информации о состоянии системы",
  "to show the help dialog": "для показа диалога справки",
  "to undo changes in your prompt": "чтобы отменить изменения в промпте",
  "to suspend the terminal and return to your shell": "чтобы приостановить терминал и вернуться в оболочку",

  // --- tips (with highlight markers) ---
  "Run {highlight}/connect{/highlight} to add an AI provider and start coding":
    "Выполните {highlight}/connect{/highlight}, чтобы добавить AI-провайдера и начать кодить",
  "Type {highlight}@{/highlight} followed by a filename to fuzzy search and attach files":
    "Введите {highlight}@{/highlight} и имя файла для нечёткого поиска и прикрепления файлов",
  "Start a message with {highlight}!{/highlight} to run shell commands (e.g., {highlight}!ls -la{/highlight})":
    "Начинайте сообщение с {highlight}!{/highlight}, чтобы выполнять команды оболочки (например, {highlight}!ls -la{/highlight})",
  "Use {highlight}/undo{/highlight} to revert the last message and file changes":
    "Используйте {highlight}/undo{/highlight}, чтобы отменить последнее сообщение и изменения файлов",
  "Use {highlight}/redo{/highlight} to restore previously undone messages and file changes":
    "Используйте {highlight}/redo{/highlight}, чтобы восстановить ранее отменённые сообщения и изменения файлов",
  "Run {highlight}/share{/highlight} to create a public opencode.ai link":
    "Выполните {highlight}/share{/highlight}, чтобы создать публичную ссылку opencode.ai",
  "Drag and drop images or PDFs into the terminal as context":
    "Перетащите изображения или PDF в терминал как контекст",
  "Run {highlight}/init{/highlight} to auto-generate project rules based on your codebase":
    "Выполните {highlight}/init{/highlight} для автоматической генерации правил проекта на основе вашего кода",
  "Run {highlight}/compact{/highlight} to summarize long sessions near context limits":
    "Выполните {highlight}/compact{/highlight}, чтобы сжать длинные сессии вблизи лимита контекста",
  "Run {highlight}/connect{/highlight} to add API keys for 75+ supported LLM providers":
    "Выполните {highlight}/connect{/highlight}, чтобы добавить API-ключи для 75+ поддерживаемых LLM-провайдеров",
  "Switch to {highlight}Plan{/highlight} agent for suggestions without making changes":
    "Переключитесь на агента {highlight}Plan{/highlight} для предложений без изменений",
  "Use {highlight}@agent-name{/highlight} in prompts to invoke specialized subagents":
    "Используйте {highlight}@agent-name{/highlight} в промптах для вызова специализированных субагентов",
  "Create {highlight}opencode.json{/highlight} for server settings, and {highlight}tui.json{/highlight} for TUI":
    "Создайте {highlight}opencode.json{/highlight} для настроек сервера и {highlight}tui.json{/highlight} для TUI",
  "Place TUI settings in {highlight}~/.config/opencode/tui.json{/highlight} for global config":
    "Поместите настройки TUI в {highlight}~/.config/opencode/tui.json{/highlight} для глобальной конфигурации",
  "Add {highlight}$schema{/highlight} to your config for autocomplete in your editor":
    "Добавьте {highlight}$schema{/highlight} в конфиг для автодополнения в редакторе",
  "Configure {highlight}model{/highlight} in config to set your default model":
    "Настройте {highlight}model{/highlight} в конфиге, чтобы задать модель по умолчанию",
  "Override any keybind in {highlight}tui.json{/highlight} via the {highlight}keybinds{/highlight} section":
    "Переопределите любую привязку в {highlight}tui.json{/highlight} через секцию {highlight}keybinds{/highlight}",
  "Set any keybind to {highlight}none{/highlight} to disable it completely":
    "Установите привязку в {highlight}none{/highlight}, чтобы полностью её отключить",
  "Configure local or remote MCP servers in the {highlight}mcp{/highlight} config section":
    "Настройте локальные или удалённые MCP-серверы в секции конфига {highlight}mcp{/highlight}",
  "Add {highlight}.md{/highlight} files to {highlight}.opencode/commands/{/highlight} for reusable prompts":
    "Добавляйте файлы {highlight}.md{/highlight} в {highlight}.opencode/commands/{/highlight} для переиспользуемых промптов",
  "Use {highlight}$ARGUMENTS{/highlight}, {highlight}$1{/highlight}, {highlight}$2{/highlight} in custom commands for dynamic input":
    "Используйте {highlight}$ARGUMENTS{/highlight}, {highlight}$1{/highlight}, {highlight}$2{/highlight} в пользовательских командах для динамического ввода",
  "Use backticks to inject shell output (e.g., {highlight}`git status`{/highlight})":
    "Используйте обратные кавычки для вставки вывода оболочки (например, {highlight}`git status`{/highlight})",
  "Add {highlight}.md{/highlight} files to {highlight}.opencode/agents/{/highlight} for specialized AI personas":
    "Добавляйте файлы {highlight}.md{/highlight} в {highlight}.opencode/agents/{/highlight} для специализированных AI-персон",
  "Configure per-agent permissions for {highlight}edit{/highlight}, {highlight}bash{/highlight}, and {highlight}webfetch{/highlight} tools":
    "Настройте разрешения для инструментов {highlight}edit{/highlight}, {highlight}bash{/highlight} и {highlight}webfetch{/highlight} для каждого агента",
  'Use patterns like {highlight}"git *": "allow"{/highlight} for granular bash permissions':
    'Используйте шаблоны вроде {highlight}"git *": "allow"{/highlight} для детальных разрешений bash',
  'Set {highlight}"rm -rf *": "deny"{/highlight} to block destructive commands':
    'Задайте {highlight}"rm -rf *": "deny"{/highlight}, чтобы блокировать разрушительные команды',
  'Configure {highlight}"git push": "ask"{/highlight} to require approval before pushing':
    'Настройте {highlight}"git push": "ask"{/highlight}, чтобы требовать подтверждение перед push',
  'Set {highlight}"formatter": true{/highlight} to enable built-in formatters':
    'Установите {highlight}"formatter": true{/highlight}, чтобы включить встроенные форматтеры',
  'Set {highlight}"formatter": false{/highlight} to disable inherited formatters':
    'Установите {highlight}"formatter": false{/highlight}, чтобы отключить наследуемые форматтеры',
  "Define custom formatter commands with file extensions in config":
    "Определите команды пользовательских форматтеров с расширениями файлов в конфиге",
  'Set {highlight}"lsp": true{/highlight} to enable built-in LSP code analysis':
    'Установите {highlight}"lsp": true{/highlight}, чтобы включить встроенный LSP-анализ кода',
  "Create {highlight}.ts{/highlight} files in {highlight}.opencode/tools/{/highlight} to define new LLM tools":
    "Создавайте файлы {highlight}.ts{/highlight} в {highlight}.opencode/tools/{/highlight}, чтобы определять новые LLM-инструменты",
  "Tool definitions can invoke scripts written in Python, Go, etc":
    "Определения инструментов могут вызывать скрипты на Python, Go и др.",
  "Add {highlight}.ts{/highlight} files to {highlight}.opencode/plugins/{/highlight} for event hooks":
    "Добавляйте файлы {highlight}.ts{/highlight} в {highlight}.opencode/plugins/{/highlight} для обработчиков событий",
  "Use plugins to send OS notifications when sessions complete":
    "Используйте плагины для отправки системных уведомлений по завершении сессий",
  "Create a plugin to prevent OpenCode from reading sensitive files":
    "Создайте плагин, чтобы запретить OpenCode читать чувствительные файлы",
  "Use {highlight}opencode run{/highlight} for non-interactive scripting":
    "Используйте {highlight}opencode run{/highlight} для неинтерактивных скриптов",
  "Use {highlight}opencode --continue{/highlight} to resume the last session":
    "Используйте {highlight}opencode --continue{/highlight}, чтобы продолжить последнюю сессию",
  "Use {highlight}opencode run -f file.ts{/highlight} to attach files via CLI":
    "Используйте {highlight}opencode run -f file.ts{/highlight}, чтобы прикрепить файлы через CLI",
  "Use {highlight}--format json{/highlight} for machine-readable output in scripts":
    "Используйте {highlight}--format json{/highlight} для машиночитаемого вывода в скриптах",
  "Run {highlight}opencode serve{/highlight} for headless API access to OpenCode":
    "Выполните {highlight}opencode serve{/highlight} для headless-доступа к API OpenCode",
  "Use {highlight}opencode run --attach{/highlight} to connect to a running server":
    "Используйте {highlight}opencode run --attach{/highlight}, чтобы подключиться к запущенному серверу",
  "Run {highlight}opencode upgrade{/highlight} to update to the latest version":
    "Выполните {highlight}opencode upgrade{/highlight}, чтобы обновиться до последней версии",
  "Run {highlight}opencode auth list{/highlight} to see all configured providers":
    "Выполните {highlight}opencode auth list{/highlight}, чтобы увидеть все настроенные провайдеры",
  "Run {highlight}opencode agent create{/highlight} for guided agent creation":
    "Выполните {highlight}opencode agent create{/highlight} для пошагового создания агента",
  "Use {highlight}/opencode{/highlight} in GitHub issues/PRs to trigger AI actions":
    "Используйте {highlight}/opencode{/highlight} в issue/PR GitHub для запуска AI-действий",
  "Run {highlight}opencode github install{/highlight} to set up the GitHub workflow":
    "Выполните {highlight}opencode github install{/highlight}, чтобы настроить GitHub workflow",
  "Comment {highlight}/opencode fix this{/highlight} on issues to auto-create PRs":
    "Напишите {highlight}/opencode fix this{/highlight} в issue, чтобы автоматически создавать PR",
  "Comment {highlight}/oc{/highlight} on PR code lines for targeted code reviews":
    "Напишите {highlight}/oc{/highlight} на строки кода в PR для точечных ревью",
  'Use {highlight}"theme": "system"{/highlight} to match your terminal\'s colors':
    'Используйте {highlight}"theme": "system"{/highlight}, чтобы подстроиться под цвета терминала',
  "Create JSON theme files in {highlight}.opencode/themes/{/highlight} directory":
    "Создавайте JSON-файлы тем в директории {highlight}.opencode/themes/{/highlight}",
  "Themes support dark/light variants for both modes":
    "Темы поддерживают тёмный/светлый варианты для обоих режимов",
  "Use numeric xterm color codes 0-255 in custom theme JSON":
    "Используйте числовые xterm-коды цветов 0-255 в пользовательском JSON темы",
  "Use {highlight}{env:VAR_NAME}{/highlight} for environment variables in config":
    "Используйте {highlight}{env:VAR_NAME}{/highlight} для переменных окружения в конфиге",
  "Use {highlight}{file:path}{/highlight} to include file contents in config values":
    "Используйте {highlight}{file:path}{/highlight}, чтобы включить содержимое файлов в значения конфига",
  "Use {highlight}instructions{/highlight} in config to load additional rules files":
    "Используйте {highlight}instructions{/highlight} в конфиге для загрузки дополнительных файлов правил",
  "Set agent {highlight}temperature{/highlight} from 0.0 (focused) to 1.0 (creative)":
    "Установите {highlight}temperature{/highlight} агента от 0.0 (сфокусированный) до 1.0 (креативный)",
  "Configure {highlight}steps{/highlight} to limit agentic iterations per request":
    "Настройте {highlight}steps{/highlight}, чтобы ограничить итерации агента на запрос",
  'Set {highlight}"tools": {"bash": false}{/highlight} to disable specific tools':
    'Задайте {highlight}"tools": {"bash": false}{/highlight}, чтобы отключить отдельные инструменты',
  'Set {highlight}"mcp_*": false{/highlight} to disable all tools from an MCP server':
    'Задайте {highlight}"mcp_*": false{/highlight}, чтобы отключить все инструменты MCP-сервера',
  "Override global tool settings per agent configuration":
    "Переопределите глобальные настройки инструментов в конфигурации агента",
  'Set {highlight}"share": "auto"{/highlight} to automatically share all sessions':
    'Задайте {highlight}"share": "auto"{/highlight}, чтобы автоматически публиковать все сессии',
  'Set {highlight}"share": "disabled"{/highlight} to prevent any session sharing':
    'Задайте {highlight}"share": "disabled"{/highlight}, чтобы запретить публикацию сессий',
  "Run {highlight}/unshare{/highlight} to remove a session from public access":
    "Выполните {highlight}/unshare{/highlight}, чтобы убрать сессию из публичного доступа",
  "Permission {highlight}doom_loop{/highlight} prevents infinite tool call loops":
    "Разрешение {highlight}doom_loop{/highlight} предотвращает бесконечные циклы вызова инструментов",
  "Permission {highlight}external_directory{/highlight} protects files outside project":
    "Разрешение {highlight}external_directory{/highlight} защищает файлы вне проекта",
  "Run {highlight}opencode debug config{/highlight} to troubleshoot configuration":
    "Выполните {highlight}opencode debug config{/highlight} для диагностики конфигурации",
  "Use {highlight}--print-logs{/highlight} flag to see detailed logs in stderr":
    "Используйте флаг {highlight}--print-logs{/highlight}, чтобы увидеть подробные логи в stderr",
  "Enable {highlight}scroll_acceleration{/highlight} in {highlight}tui.json{/highlight} for smooth scrolling":
    "Включите {highlight}scroll_acceleration{/highlight} в {highlight}tui.json{/highlight} для плавной прокрутки",
  "Toggle username display in chat via the command palette":
    "Переключение отображения имени пользователя в чате через палитру команд",
  "Run {highlight}docker run -it --rm ghcr.io/anomalyco/opencode{/highlight} in a container":
    "Выполните {highlight}docker run -it --rm ghcr.io/anomalyco/opencode{/highlight} в контейнере",
  "Use {highlight}/connect{/highlight} with OpenCode Zen for curated, tested models":
    "Используйте {highlight}/connect{/highlight} с OpenCode Zen для отобранных, проверенных моделей",
  "Commit your project's {highlight}AGENTS.md{/highlight} file to Git for team sharing":
    "Закоммитьте файл {highlight}AGENTS.md{/highlight} проекта в Git для командного использования",
  "Use {highlight}/review{/highlight} to review uncommitted changes, branches, or PRs":
    "Используйте {highlight}/review{/highlight} для ревью незакоммиченных изменений, веток или PR",
  "Use {highlight}/rename{/highlight} to rename the current session":
    "Используйте {highlight}/rename{/highlight}, чтобы переименовать текущую сессию",

  // --- app commands ---
  "Show command palette": "Показать палитру команд",
  "Switch session": "Переключить сессию",
  "Copy worktree path": "Скопировать путь рабочего дерева",
  "Copied worktree path": "Путь рабочего дерева скопирован",
  "Manage workspaces": "Управление рабочими областями",
  "Switch to session in quick slot {slot}": "Переключиться на сессию в быстром слоте {slot}",
  "Switch to session in quick slot 1": "Переключиться на сессию в быстром слоте 1",
  "Switch to session in quick slot 2": "Переключиться на сессию в быстром слоте 2",
  "Switch to session in quick slot 3": "Переключиться на сессию в быстром слоте 3",
  "Switch to session in quick slot 4": "Переключиться на сессию в быстром слоте 4",
  "Switch to session in quick slot 5": "Переключиться на сессию в быстром слоте 5",
  "Switch to session in quick slot 6": "Переключиться на сессию в быстром слоте 6",
  "Switch to session in quick slot 7": "Переключиться на сессию в быстром слоте 7",
  "Switch to session in quick slot 8": "Переключиться на сессию в быстром слоте 8",
  "Switch to session in quick slot 9": "Переключиться на сессию в быстром слоте 9",
  "Switch model": "Переключить модель",
  "Model cycle": "Цикл моделей",
  "Model cycle reverse": "Цикл моделей (назад)",
  "Favorite cycle": "Цикл избранных",
  "Favorite cycle reverse": "Цикл избранных (назад)",
  "Switch agent": "Переключить агента",
  "Toggle MCPs": "Переключить MCP",
  "Agent cycle": "Цикл агентов",
  "Agent cycle reverse": "Цикл агентов (назад)",
  "Variant cycle": "Цикл вариантов",
  "Switch model variant": "Переключить вариант модели",
  "No variants available": "Нет доступных вариантов",
  "The current model does not support any variants.": "Текущая модель не поддерживает варианты.",
  "Switch org": "Переключить организацию",
  "View status": "Показать статус",
  "View debug info": "Показать отладочную информацию",
  "Switch theme": "Переключить тему",
  "Switch to light mode": "Переключиться на светлый режим",
  "Switch to dark mode": "Переключиться на тёмный режим",
  "Unlock theme mode": "Разблокировать режим темы",
  "Lock theme mode": "Заблокировать режим темы",
  "Open docs": "Открыть документацию",
  "Exit the app": "Выйти из приложения",
  "Toggle debug panel": "Переключить панель отладки",
  "Toggle console": "Переключить консоль",
  "Write heap snapshot": "Записать снимок кучи",
  "Heap snapshot written to {files}": "Снимок кучи записан в {files}",
  "Suspend terminal": "Приостановить терминал",
  "Disable terminal title": "Отключить заголовок терминала",
  "Enable terminal title": "Включить заголовок терминала",
  "Disable animations": "Отключить анимации",
  "Enable animations": "Включить анимации",
  "Disable file context": "Отключить контекст файлов",
  "Enable file context": "Включить контекст файлов",
  "Disable diff wrapping": "Отключить перенос диффа",
  "Enable diff wrapping": "Включить перенос диффа",
  "Disable paste summary": "Отключить сводку вставки",
  "Enable paste summary": "Включить сводку вставки",
  "Disable session directory filtering": "Отключить фильтрацию по директории сессии",
  "Enable session directory filtering": "Включить фильтрацию по директории сессии",
  "Disable auto-approve permissions": "Отключить авто-одобрение разрешений",
  "Enable auto-approve permissions": "Включить авто-одобрение разрешений",
  "The current session was deleted": "Текущая сессия была удалена",
  "Update Available": "Доступно обновление",
  "A new release v{version} is available. Would you like to update now?":
    "Доступна новая версия v{version}. Хотите обновить сейчас?",
  "Updating to v{version}...": "Обновление до v{version}...",
  "Update Failed": "Ошибка обновления",
  "Update failed": "Не удалось обновить",
  "Update Complete": "Обновление завершено",
  "Successfully updated to OpenCode v{version}. Please restart the application.":
    "Успешно обновлено до OpenCode v{version}. Пожалуйста, перезапустите приложение.",
  "Invalid model format: {model}": "Неверный формат модели: {model}",
  "Copied to clipboard": "Скопировано в буфер обмена",
  "Failed to fork session": "Не удалось форкнуть сессию",

  // --- prompt ---
  "Connect a provider to send prompts": "Подключите провайдера, чтобы отправлять промпты",
  "Clear prompt": "Очистить промпт",
  "Submit prompt": "Отправить промпт",
  "Remove editor context": "Убрать контекст редактора",
  "Interrupt session": "Прервать сессию",
  "Open editor": "Открыть редактор",
  "Warp": "Перенести",
  "Change the workspace for the session": "Изменить рабочую область сессии",
  "Move session": "Переместить сессию",
  "Move to another project dir": "Переместить в другую директорию проекта",
  "Stash prompt": "Отложить промпт",
  "Stash pop": "Вернуть отложенный промпт",
  "Stash list": "Список отложенных",
  "Shell mode": "Режим оболочки",
  "Exit shell mode": "Выйти из режима оболочки",
  "Previous prompt history": "Предыдущий промпт в истории",
  "Next prompt history": "Следующий промпт в истории",
  "Creating a session failed. Open console for more details.":
    "Не удалось создать сессию. Откройте консоль для подробностей.",
  "Failed to send prompt": "Не удалось отправить промпт",
  "Retry Error": "Ошибка повтора",
  " (click to expand)": " (нажмите, чтобы развернуть)",
  "[retrying": "[повтор",
  "attempt": "попытка",
  "Creating copy": "Создание копии",
  "Creating session": "Создание сессии",
  "Creating workspace failed": "Не удалось создать рабочую область",
  "Moving session": "Перемещение сессии",
  "Submitting prompt": "Отправка промпта",
  "No project copy directory returned": "Не получена директория копии проекта",
  "Previous autocomplete item": "Предыдущий элемент автодополнения",
  "Next autocomplete item": "Следующий элемент автодополнения",
  "Hide autocomplete": "Скрыть автодополнение",
  "Select autocomplete item": "Выбрать элемент автодополнения",
  "Complete autocomplete item": "Завершить элемент автодополнения",
  "Move to next autocomplete item": "К следующему элементу автодополнения",
  "Move to previous autocomplete item": "К предыдущему элементу автодополнения",

  // --- dialog-confirm ---

  // --- permissions / tool calls ---
  "Call tool {permission}": "Вызвать инструмент {permission}",
  "Tool: {permission}": "Инструмент: {permission}",
  "Access external directory {dir}": "Доступ к внешней директории {dir}",
  "Read {path}": "Прочитать {path}",
  "Edit {path}": "Изменить {path}",
  "WebFetch {url}": "WebFetch {url}",
  "List {path}": "Список {path}",
  "This will allow the following patterns until OpenCode is restarted":
    "Это разрешит следующие шаблоны до перезапуска OpenCode",
  "This will allow {permission} until OpenCode is restarted.":
    "Это разрешит {permission} до перезапуска OpenCode.",
  "Permission required": "Требуется разрешение",
  "Allow always": "Разрешать всегда",
  "Allow once": "Разрешить один раз",

  // --- session dialogs ---
  "Delete broken session": "Удалить повреждённую сессию",
  "Restore broken session": "Восстановить повреждённую сессию",
  "Choose how you want to recover this broken workspace session.":
    "Выберите, как восстановить эту повреждённую сессию рабочей области.",
  "This session is attached to a workspace that is no longer available.":
    "Эта сессия привязана к рабочей области, которая больше недоступна.",
  "Would you like to restore this session into a new workspace?":
    "Хотите восстановить эту сессию в новой рабочей области?",
  "Try to restore this session into a new workspace.":
    "Попробуйте восстановить эту сессию в новой рабочей области.",
  "Restore to new workspace": "Восстановить в новой рабочей области",
  "Restore workspace": "Восстановить рабочую область",
  "Cancel workspace restore": "Отменить восстановление рабочей области",
  "Confirm recovery option": "Подтвердить вариант восстановления",
  "Continue after repeated failures": "Продолжить после повторных сбоев",
  "This keeps the session running despite repeated failures.":
    "Это позволяет сессии продолжаться, несмотря на повторные сбои.",
  "Delete the workspace and all sessions attached to it.":
    "Удалить рабочую область и все привязанные к ней сессии.",
  "Delete working copy?": "Удалить рабочую копию?",
  "This working copy has file changes. Do you want to delete it anyway?":
    "В этой рабочей копии есть изменения файлов. Всё равно удалить её?",
  "Delete project copy": "Удалить копию проекта",
  "New project copy": "Новая копия проекта",
  "Choose workspace": "Выбрать рабочую область",
  "Choose from all workspaces": "Выбрать из всех рабочих областей",
  "Set workspace": "Установить рабочую область",
  "Use the local project": "Использовать локальный проект",
  "Do you want to move these changes with the session?": "Перенести эти изменения вместе с сессией?",
  "Are you sure you want to restore the reverted messages?":
    "Вы уверены, что хотите восстановить отменённые сообщения?",
  "Are you sure you want to share it?": "Вы уверены, что хотите поделиться?",
  "Delete {name}? Press delete again": "Удалить {name}? Нажмите delete ещё раз",
  "Press {key} again to confirm": "Нажмите {key} ещё раз для подтверждения",
  "Press {hint} again to confirm": "Нажмите {hint} ещё раз для подтверждения",
  "to confirm": "для подтверждения",
  "to confirm,": "для подтверждения,",
  "to toggle,": "для переключения,",

  // --- export dialog ---
  "Export Options": "Параметры экспорта",
  "Export session to editor": "Экспортировать сессию в редактор",
  "Export session transcript": "Экспортировать транскрипт сессии",
  "Full session": "Полная сессия",
  "Include thinking": "Включить размышления",
  "Include tool details": "Включить детали инструментов",
  "Include assistant metadata": "Включить метаданные ассистента",
  "Next export option": "Следующий параметр экспорта",
  "Toggle export option": "Переключить параметр экспорта",
  "Session exported to {filename}": "Сессия экспортирована в {filename}",

  // --- session sharing ---
  "Share Session": "Поделиться сессией",
  "Share current session": "Поделиться текущей сессией",
  "Copy share link": "Скопировать ссылку",
  "Share URL copied to clipboard!": "Ссылка скопирована в буфер обмена!",
  "Unshare current session": "Убрать публикацию текущей сессии",
  "Unshare session": "Убрать публикацию сессии",
  "Session unshared successfully": "Сессия успешно скрыта",
  "Failed to share session": "Не удалось опубликовать сессию",
  "Failed to unshare session": "Не удалось скрыть сессию",
  "Copy session transcript": "Скопировать транскрипт сессии",
  "Session transcript copied to clipboard!": "Транскрипт сессии скопирован в буфер обмена!",
  "Failed to copy session transcript": "Не удалось скопировать транскрипт сессии",
  "Copy message": "Скопировать сообщение",
  "Copy last assistant message": "Скопировать последнее сообщение ассистента",
  "Message copied to clipboard!": "Сообщение скопировано в буфер обмена!",
  "message text to clipboard": "текст сообщения в буфер обмена",
  "No text content found in last assistant message": "В последнем сообщении ассистента нет текста",
  "No text parts found in last assistant message": "В последнем сообщении ассистента нет текстовых частей",
  "No assistant messages found": "Сообщений ассистента не найдено",
  "Session not found: {sessionID}": "Сессия не найдена: {sessionID}",

  // --- session errors / workspace warp ---
  "Failed to Delete Session": "Не удалось удалить сессию",
  "Failed to delete session": "Не удалось удалить сессию",
  "Failed to delete workspace": "Не удалось удалить рабочую область",
  "Failed to create workspace": "Не удалось создать рабочую область",
  "Failed to load workspace adapters": "Не удалось загрузить адаптеры рабочих областей",
  "Failed to export session": "Не удалось экспортировать сессию",
  "Failed to warp session": "Не удалось перенести сессию",
  "Unable to Warp Session": "Не удалось перенести сессию",
  "Unable to apply file changes to this workspace. It has existing changes that conflict or is based off a different branch. Session has not been warped.":
    "Не удалось применить изменения файлов к этой рабочей области. В ней есть конфликтующие изменения или она основана на другой ветке. Сессия не перенесена.",
  "Failed to copy to clipboard": "Не удалось скопировать в буфер обмена",
  "Failed to copy URL to clipboard": "Не удалось скопировать URL в буфер обмена",
  "Failed to delete project copy": "Не удалось удалить копию проекта",
  "Copied to clipboard!": "Скопировано в буфер обмена!",

  // --- workspace unavailable ---
  "Workspace Unavailable": "Рабочая область недоступна",

  // --- model dialog / auth ---
  "Authorization code": "Код авторизации",
  "Select auth method": "Выбрать способ авторизации",
  "API key": "API-ключ",
  "(API key)": "(API-ключ)",
  "(ChatGPT Plus/Pro or API key)": "(ChatGPT Plus/Pro или API-ключ)",
  "(Favorite)": "(избранное)",
  "(Recommended)": "(рекомендуется)",
  "Custom provider": "Пользовательский провайдер",
  "Popular": "Популярные",
  "Popular providers": "Популярные провайдеры",
  "Provider id": "ID провайдера",
  "Provider ids must start with a lowercase letter or number and only use lowercase letters, numbers, hyphens, and underscores":
    "ID провайдера должен начинаться со строчной буквы или цифры и содержать только строчные буквы, цифры, дефисы и подчёркивания",
  "Copy provider code": "Скопировать код провайдера",
  "Open provider list from model dialog": "Открыть список провайдеров из диалога модели",
  "Saved credential for {providerID}. Configure it in opencode.json to use it.":
    "Учётные данные для {providerID} сохранены. Настройте их в opencode.json для использования.",
  "This only stores a credential. Configure the provider in opencode.json to use it.":
    "Здесь сохраняются только учётные данные. Настройте провайдера в opencode.json для использования.",
  "OAuth authorization failed. Try /connect again.": "Ошибка OAuth-авторизации. Попробуйте /connect снова.",
  "Waiting for authorization...": "Ожидание авторизации...",
  "Invalid code": "Неверный код",
  "to get a key": "чтобы получить ключ",
  "Select model": "Выбрать модель",
  "Select variant": "Выбрать вариант",
  "Cycle model variants": "Цикл вариантов модели",
  "List model variants": "Список вариантов модели",
  "List available models": "Список доступных моделей",
  "List available themes": "Список доступных тем",
  "List available commands": "Список доступных команд",
  "List agents": "Список агентов",
  "List all sessions": "Список всех сессий",
  "List MCP servers": "Список MCP-серверов",
  "List stashed prompts": "Список отложенных промптов",
  "Pop stashed prompt": "Вернуть отложенный промпт",
  "Toggle model favorite status": "Переключить избранный статус модели",
  "Next favorite model": "Следующая избранная модель",
  "Previous favorite model": "Предыдущая избранная модель",
  "Next recently used model": "Следующая недавно использованная модель",
  "Previous recently used model": "Предыдущая недавно использованная модель",
  "OpenCode Go is a $10 per month subscription that provides reliable access to popular open coding models with generous usage limits.":
    "OpenCode Go — подписка за $10 в месяц, дающая надёжный доступ к популярным открытым моделям кодирования с щедрыми лимитами использования.",
  "OpenCode Zen gives you access to all the best coding models at the cheapest prices with a single API key.":
    "OpenCode Zen даёт доступ ко всем лучшим моделям кодирования по самым низким ценам с одним API-ключом.",
  "Low cost subscription for everyone": "Недорогая подписка для всех",
  "and enable OpenCode Go": "и включите OpenCode Go",
  "Free": "Бесплатно",
  "Favorites": "Избранное",
  "Recent": "Недавние",
  "Other": "Другое",
  "Current": "Текущая",
  "Default": "По умолчанию",
  "Suggested": "Рекомендуемые",

  // --- error / debug ---
  " Error ": " Ошибка ",
  " Stack trace ": " Стек вызовов ",
  "No stack trace available.": "Стек вызовов недоступен.",
  "An unexpected error stopped the session.": "Непредвиденная ошибка остановила сессию.",
  "An unknown error has occurred": "Произошла неизвестная ошибка",
  "An unknown error occurred.": "Произошла неизвестная ошибка.",
  "Copy the report and open a GitHub issue to help us fix this.":
    "Скопируйте отчёт и откройте issue на GitHub, чтобы помочь нам это исправить.",
  "Copy report": "Скопировать отчёт",
  "Copy debug info": "Скопировать отладочную информацию",
  "Debug info copied to clipboard": "Отладочная информация скопирована в буфер обмена",
  "Report copied — paste it into a new GitHub issue.":
    "Отчёт скопирован — вставьте его в новое issue на GitHub.",
  "Share this when reporting an issue.": "Приложите это при создании issue.",
  "opencode crashed": "opencode упал",
  "Restart": "Перезапустить",
  "Debug": "Отладка",
  "Glob": "Glob",
  "Grep": "Grep",
  "Read": "Чтение",
  "Write": "Запись",
  "Wrote": "Записано",
  "Patched": "Применено",
  "Patch failed": "Не удалось применить патч",
  "Patch": "Патч",
  "Moved": "Перемещено",
  "Deleted": "Удалено",
  "Created": "Создано",
  "Loaded": "Загружено",
  "Working...": "Работаем...",
  "Preparing edit...": "Подготовка изменения...",
  "Preparing write...": "Подготовка записи...",
  "Preparing patch...": "Подготовка патча...",
  "Reading file...": "Чтение файла...",
  "Writing command...": "Выполнение команды...",
  "Searching content...": "Поиск по содержимому...",
  "Searching web...": "Поиск в интернете...",
  "Fetching from the web...": "Загрузка из интернета...",
  "Processing...": "Обработка...",
  "Finding files...": "Поиск файлов...",
  "Finishing startup...": "Завершение запуска...",
  "Loading orgs...": "Загрузка организаций...",
  "Loading plugins...": "Загрузка плагинов...",
  "Loading project directories...": "Загрузка директорий проектов...",
  "Loading skill...": "Загрузка навыка...",
  "Updating todos...": "Обновление задач...",
  "Delegating...": "Делегирование...",
  "Asking questions...": "Задаём вопросы...",
  "interrupted": "прервано",
  "failed": "не удалось",
  "Retrying": "Повтор",
  "processing...": "обработка...",
  "just now": "только что",
  "Search skills...": "Поиск навыков...",
  "Enter text": "Введите текст",
  "Enter filename": "Введите имя файла",
  "Query: {query}": "Запрос: {query}",
  "Pattern: {pattern}": "Шаблон: {pattern}",
  "Path: {path}": "Путь: {path}",
  "URL: {url}": "URL: {url}",
  "File": "Файл",
  "Directory": "Директория",
  "Filename:": "Имя файла:",
  "match": "совпадение",
  "matches": "совпадений",
  "results": "результатов",
  "line": "строка",
  "~{lineCount} lines": (p) => `~${pluralRu(p?.lineCount, ["строка", "строки", "строк"])}`,
  "{count} Formatters": (p) => pluralRu(p?.count, ["форматтер", "форматтера", "форматтеров"]),
  "{count} LSP Servers": (p) => pluralRu(p?.count, ["LSP-сервер", "LSP-сервера", "LSP-серверов"]),
  "{count} MCP Servers": (p) => pluralRu(p?.count, ["MCP-сервер", "MCP-сервера", "MCP-серверов"]),
  "{count} Plugins": (p) => pluralRu(p?.count, ["плагин", "плагина", "плагинов"]),
  "{count} active": (p) => pluralRu(p?.count, ["активный", "активных", "активных"]),
  "{count} errors": (p) => pluralRu(p?.count, ["ошибка", "ошибки", "ошибок"]),
  "{count} message reverted": (p) =>
    pluralRu(p?.count, ["сообщение отменено", "сообщения отменены", "сообщений отменено"]),
  "{count} permissions": (p) => pluralRu(p?.count, ["разрешение", "разрешения", "разрешений"]),
  "{count} tokens": (p) => pluralRu(p?.count, ["токен", "токена", "токенов"]),
  "{days}d ago": (p) => `${pluralRu(p?.days, ["день", "дня", "дней"])} назад`,
  "{hours}h ago": (p) => `${pluralRu(p?.hours, ["час", "часа", "часов"])} назад`,
  "{minutes}m ago": (p) => `${pluralRu(p?.minutes, ["минута", "минуты", "минут"])} назад`,
  "{first} through {last}": "с {first} по {last}",
  "{type} Task": "Задача: {type}",
  "✓ Copied": "✓ Скопировано",
  "✓ copied": "✓ скопировано",

  // --- status dialog ---
  "Status": "Статус",
  "Version": "Версия",
  "OS": "ОС",
  "Session ID": "ID сессии",
  "Date": "Дата",
  "Question": "Вопрос",
  "Questions": "Вопросы",
  "Thought": "Мысль",
  "Timeline": "Хронология",
  "Sessions": "Сессии",
  "MCPs": "MCP",
  "Todos": "Задачи",
  "Task": "Задача",
  "Skill": "Навык",
  "Skills": "Навыки",
  "Parent": "Родительская",
  "Subagent": "Субагент",
  "Terminal": "Терминал",
  "Today": "Сегодня",
  "Unknown": "Неизвестно",
  "Asked": "Спрошено",
  "Disabled in configuration": "Отключено в конфигурации",
  "Enabled": "Включено",
  "Disabled": "Отключено",
  "Needs authentication (run: opencode mcp auth {key})":
    "Требуется авторизация (выполните: opencode mcp auth {key})",
  "No MCP Servers": "Нет MCP-серверов",
  "No Plugins": "Нет плагинов",
  "No Formatters": "Нет форматтеров",
  "Could not load orgs": "Не удалось загрузить организации",
  "Could not load project directories": "Не удалось загрузить директории проектов",
  "Could not load skills": "Не удалось загрузить навыки",
  "No orgs found": "Организации не найдены",
  "No project directories found": "Директории проектов не найдены",
  "No results found": "Результаты не найдены",
  "View all workspaces": "Показать все рабочие области",
  "Workspaces": "Рабочие области",
  "Switch console organization": "Переключить организацию консоли",
  "Switched to {orgName}": "Переключено на {orgName}",

  // --- plugins ---
  "Install plugin": "Установить плагин",
  "Install plugin from plugin dialog": "Установить плагин из диалога плагинов",
  "Open plugin manager dialog": "Открыть диалог управления плагинами",
  "Toggle plugin": "Переключить плагин",
  "Unknown plugin route: {id}": "Неизвестный маршрут плагина: {id}",
  "Plugin runtime is not available.": "Среда выполнения плагинов недоступна.",

  // --- todo item ---
  "Todo update failed": "Не удалось обновить задачу",

  // --- session timeline / navigation ---
  "Show session timeline": "Показать хронологию сессии",
  "Jump to message": "Перейти к сообщению",
  "Go to parent session": "Перейти к родительской сессии",
  "Go to child session": "Перейти к дочерней сессии",
  "Go to first child session": "Перейти к первой дочерней сессии",
  "Go to next child session": "Перейти к следующей дочерней сессии",
  "Go to previous child session": "Перейти к предыдущей дочерней сессии",
  "Next child session": "Следующая дочерняя сессия",
  "Previous child session": "Предыдущая дочерняя сессия",
  "Fork session": "Форкнуть сессию",
  "Fork session from message": "Форкнуть сессию из сообщения",
  "Fork": "Форк",
  "Create a new session": "Создать новую сессию",
  "create a new session": "создать новую сессию",
  "Delete stash entry": "Удалить отложенную запись",
  "Pin or unpin session in the session list": "Закрепить или открепить сессию в списке",
  "pin/unpin": "закрепить/открепить",
  "Compact session": "Сжать сессию",
  "Compact the session": "Сжать сессию",
  "Compaction": "Сжатие",
  "Connect a provider to summarize this session": "Подключите провайдера, чтобы сжать эту сессию",
  "Confirm Redo": "Подтвердить повтор",
  "Redo": "Повторить",
  "Redo message": "Повторить сообщение",
  "Redo in input": "Повторить в поле ввода",
  "Undo message": "Отменить сообщение",
  "Undo in input": "Отменить в поле ввода",
  "Undo previous message": "Отменить предыдущее сообщение",
  "undo messages and file changes": "отменить сообщения и изменения файлов",
  "or /redo to restore": "или /redo для восстановления",
  "Revert": "Откатить",
  "Rename session": "Переименовать сессию",
  "Rename Session": "Переименовать сессию",
  "delete": "удалить",
  "rename": "переименовать",
  "copy": "копировать",
  "dismiss": "скрыть",
  "don't show again": "больше не показывать",
  "refresh": "обновить",
  "submit": "отправить",
  "select": "выбрать",
  "switch": "переключить",
  "new": "новая",
  "confirm": "подтвердить",
  "cancel": "отмена",
  "ok": "ок",
  "enter": "ввод",
  "esc": "esc",
  "tab": "tab",
  "space": "пробел",
  "return": "enter",
  "go home": "на главную",
  "for options": "для вариантов",
  "view subagents": "просмотр субагентов",
  "the subagent's session": "сессию субагента",
  "Background subagents": "Фоновые субагенты",
  "Background synchronous subagents": "Фоновые синхронные субагенты",
  "Message Actions": "Действия с сообщением",
  "Subagent Actions": "Действия субагента",
  "Select answer": "Выбрать ответ",
  "Select answer {index}": "Выбрать ответ {index}",
  "Next answer": "Следующий ответ",
  "Previous answer": "Предыдущий ответ",
  "Submit answer": "Отправить ответ",
  "Submit answer edit": "Отправить редактирование ответа",
  "Cancel answer edit": "Отменить редактирование ответа",
  "Clear answer edit": "Очистить редактирование ответа",
  "Reject question": "Отклонить вопрос",
  "Next question": "Следующий вопрос",
  "Previous question": "Предыдущий вопрос",
  "(not answered)": "(без ответа)",
  "Type your own answer": "Введите свой ответ",
  "Thinking: {title}": "Размышление: {title}",
  "Collapse thinking": "Свернуть размышления",
  "Expand thinking": "Развернуть размышления",
  "Toggle thinking blocks visibility": "Переключить видимость блоков размышлений",
  "Toggle code block concealment in messages": "Переключить скрытие блоков кода в сообщениях",
  "Disable code concealment": "Отключить скрытие кода",
  "Enable code concealment": "Включить скрытие кода",
  "Hide tool details": "Скрыть детали инструментов",
  "Show tool details": "Показать детали инструментов",
  "Toggle tool details visibility": "Переключить видимость деталей инструментов",
  "Hide generic tool output": "Скрыть обычный вывод инструментов",
  "Show generic tool output": "Показать обычный вывод инструментов",
  "Toggle generic tool output": "Переключить обычный вывод инструментов",
  "Hide timestamps": "Скрыть метки времени",
  "Show timestamps": "Показать метки времени",
  "Toggle message timestamps": "Переключить метки времени сообщений",
  "Toggle session scrollbar": "Переключить полосу прокрутки сессии",

  // --- sidebar toggles ---
  "Show sidebar": "Показать боковую панель",
  "Hide sidebar": "Скрыть боковую панель",

  // --- messages navigation ---
  "First message": "Первое сообщение",
  "Last message": "Последнее сообщение",
  "Next message": "Следующее сообщение",
  "Previous message": "Предыдущее сообщение",
  "Navigate to first message": "Перейти к первому сообщению",
  "Navigate to last message": "Перейти к последнему сообщению",
  "Navigate to next message": "Перейти к следующему сообщению",
  "Navigate to previous message": "Перейти к предыдущему сообщению",
  "Navigate to last user message": "Перейти к последнему сообщению пользователя",
  "Jump to last user message": "К последнему сообщению пользователя",
  "Scroll messages up by one line": "Прокрутить сообщения вверх на одну строку",
  "Scroll messages down by one line": "Прокрутить сообщения вниз на одну строку",
  "Scroll messages up by one page": "Прокрутить сообщения вверх на страницу",
  "Scroll messages down by one page": "Прокрутить сообщения вниз на страницу",
  "Scroll messages up by half page": "Прокрутить сообщения вверх на полстраницы",
  "Scroll messages down by half page": "Прокрутить сообщения вниз на полстраницы",
  "Line up": "Строка вверх",
  "Line down": "Строка вниз",
  "Half page up": "Полстраницы вверх",
  "Half page down": "Полстраницы вниз",
  "Page up": "Страница вверх",
  "Page down": "Страница вниз",
  "First item": "Первый элемент",
  "Last item": "Последний элемент",
  "Next item": "Следующий элемент",
  "Previous item": "Предыдущий элемент",
  "Select item": "Выбрать элемент",
  "Next agent": "Следующий агент",
  "Previous agent": "Предыдущий агент",
  "Select agent": "Выбрать агента",
  "Next history item": "Следующий элемент истории",
  "Previous history item": "Предыдущий элемент истории",

  // --- dialog navigation ---
  "Move to next dialog item": "К следующему элементу диалога",
  "Move to previous dialog item": "К предыдущему элементу диалога",
  "Move to first dialog item": "К первому элементу диалога",
  "Move to last dialog item": "К последнему элементу диалога",
  "Move up one page in dialog": "Вверх на страницу в диалоге",
  "Move down one page in dialog": "Вниз на страницу в диалоге",
  "Next dialog action": "Следующее действие диалога",
  "Previous dialog action": "Предыдущее действие диалога",
  "Submit selected dialog item": "Отправить выбранный элемент диалога",
  "Submit dialog prompt": "Отправить промпт диалога",
  "Submit input": "Отправить ввод",
  "Confirm alert": "Подтвердить предупреждение",
  "Confirm retry option": "Подтвердить вариант повтора",
  "Confirm workspace option": "Подтвердить вариант рабочей области",
  "Next retry option": "Следующий вариант повтора",
  "Previous retry option": "Предыдущий вариант повтора",
  "Next which-key group": "Следующая группа which-key",
  "Previous which-key group": "Предыдущая группа which-key",
  "Toggle MCP in MCP dialog": "Переключить MCP в диалоге MCP",
  "Toggle permission prompt fullscreen": "Развернуть запрос разрешения на весь экран",

  // --- input editing ---
  "Backspace in input": "Backspace в поле ввода",
  "Delete character in input": "Удалить символ в поле ввода",
  "Delete line in input": "Удалить строку в поле ввода",
  "Delete to end of line in input": "Удалить до конца строки в поле ввода",
  "Delete to start of line in input": "Удалить до начала строки в поле ввода",
  "Delete word backward in input": "Удалить слово назад в поле ввода",
  "Delete word forward in input": "Удалить слово вперёд в поле ввода",
  "Insert newline in input": "Вставить перевод строки в поле ввода",
  "Move cursor up in input": "Курсор вверх в поле ввода",
  "Move cursor down in input": "Курсор вниз в поле ввода",
  "Move cursor left in input": "Курсор влево в поле ввода",
  "Move cursor right in input": "Курсор вправо в поле ввода",
  "Move to start of line in input": "К началу строки в поле ввода",
  "Move to end of line in input": "К концу строки в поле ввода",
  "Move to start of visual line in input": "К началу визуальной строки в поле ввода",
  "Move to end of visual line in input": "К концу визуальной строки в поле ввода",
  "Move to start of buffer in input": "К началу буфера в поле ввода",
  "Move to end of buffer in input": "К концу буфера в поле ввода",
  "Move word backward in input": "На слово назад в поле ввода",
  "Move word forward in input": "На слово вперёд в поле ввода",
  "Select all in input": "Выбрать всё в поле ввода",
  "Select up in input": "Выделить вверх в поле ввода",
  "Select down in input": "Выделить вниз в поле ввода",
  "Select left in input": "Выделить влево в поле ввода",
  "Select right in input": "Выделить вправо в поле ввода",
  "Select word backward in input": "Выделить слово назад в поле ввода",
  "Select word forward in input": "Выделить слово вперёд в поле ввода",
  "Select to start of line in input": "Выделить до начала строки в поле ввода",
  "Select to end of line in input": "Выделить до конца строки в поле ввода",
  "Select to start of visual line in input": "Выделить до начала визуальной строки",
  "Select to end of visual line in input": "Выделить до конца визуальной строки",
  "Select to start of buffer in input": "Выделить до начала буфера",
  "Select to end of buffer in input": "Выделить до конца буфера",
  "Paste from clipboard": "Вставить из буфера обмена",
  "Clear input field": "Очистить поле ввода",
  "Clear editor context": "Очистить контекст редактора",
  "Leader key for keybind combinations": "Клавиша-лидер для комбинаций клавиш",
  "Open external editor": "Открыть внешний редактор",
  "Open documentation": "Открыть документацию",
  "Open help dialog": "Открыть диалог справки",
  "Open skill selector": "Открыть выбор навыка",
  "Open without saving": "Открыть без сохранения",
  "Existing Workspace": "Существующая рабочая область",
  "File Changes Found": "Найдены изменения файлов",
  "Fix a TODO in the codebase": "Исправить TODO в кодовой базе",
  "Fix broken tests": "Исправить сломанные тесты",
  "What is the tech stack of this project?": "Какой технологический стек этого проекта?",
  "QUeued": "В очереди",
  "QUEUED": "В ОЧЕРЕДИ",
  "Manage queued prompts": "Управление очередью промптов",
  "Interrupt current session": "Прервать текущую сессию",
  "Refresh project copies": "Обновить копии проектов",
  "Toggle tips on home screen": "Переключить советы на главном экране",
  "Toggle animations": "Переключить анимации",
  "Toggle file context": "Переключить контекст файлов",
  "Toggle diff wrapping": "Переключить перенос диффа",
  "Toggle paste summary": "Переключить сводку вставки",
  "Toggle session directory filtering": "Переключить фильтрацию по директории сессии",
  "Toggle terminal title": "Переключить заголовок терминала",
  "Quit": "Выйти",
  "Exit the application": "Выйти из приложения",
  "Themes": "Темы",
  "Tools": "Инструменты",
  "WebFetch": "WebFetch",
  "Shell command": "Команда оболочки",
  "Review": "Ревью",
  "Stash": "Отложить",
  "Patterns": "Шаблоны",
  "Action": "Действие",
  "Description": "Описание",
  "Autocomplete": "Автодополнение",
  "Background": "Фон",
  "background": "фон",
  "Actions": "Действия",
  "Groups": "Группы",
  "Options": "Параметры",
  "Input": "Ввод",
  "Output": "Вывод",
  "Process": "Процесс",
  "Errors": "Ошибки",
  "Searching": "Поиск",
  "Move": "Переместить",
  "Press {shortcut} to see all available actions and commands in any context.":
    "Нажмите {shortcut}, чтобы увидеть все доступные действия и команды в любом контексте.",
  "↑↓ scroll": "↑↓ прокрутка",
  " ↑↓ scroll ": " ↑↓ прокрутка ",
  "Click to collapse": "Нажмите, чтобы свернуть",
  "Click to expand": "Нажмите, чтобы развернуть",
  "Code": "Code",
  "Deleting {location}": "Удаление {location}",
  "Deleting...": "Удаление...",
  "Go to": "Перейти к",
  "Lock or unlock theme mode": "Заблокировать или разблокировать режим темы",
  "No diff provided": "Дифф не предоставлен",
  "Prev": "Пред.",
  "Switch between light and dark theme mode": "Переключение между светлым и тёмным режимом темы",
  "question": "вопрос",
  "select all that apply": "выберите все подходящие",
  "toolcall": "вызов инструмента",
  "used": "использовано",
  "spent": "потрачено",
  "of": "из",
}

// --- language detection ---

function detectLanguage(): string {
  const env = process.env.OPENCODE_LANG
  if (env) return env
  return (
    process.env.LC_ALL ??
    process.env.LC_MESSAGES ??
    process.env.LANG ??
    "en"
  )
}

const currentLanguage = detectLanguage().toLowerCase()

export function isRussian(): boolean {
  return currentLanguage.startsWith("ru")
}

export function getLanguage(): string {
  return currentLanguage
}

// --- pluralization ---

function pluralRu(count: string | number | undefined, forms: [string, string, string]): string {
  const n = Math.abs(Number(count ?? 0))
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return `${count} ${forms[0]}`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} ${forms[1]}`
  return `${count} ${forms[2]}`
}

// --- translation ---

function fill(template: string, params?: I18nParams): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match,
  )
}

/**
 * Translate a string. Falls back to the original English string when no
 * translation exists. Placeholders use the {name} syntax:
 *
 *   t("Delete {name}?", { name: "file.ts" })
 */
export function t(input: string, params?: I18nParams): string {
  if (!isRussian()) return fill(input, params)
  const entry = ru[input]
  if (entry === undefined) return fill(input, params)
  if (typeof entry === "function") return entry(params)
  return fill(entry, params)
}

export * as I18n from "./i18n"