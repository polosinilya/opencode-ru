import type { I18nParams } from "../i18n"

export const ru: Record<string, string | ((params?: I18nParams) => string)> = {
  // --- github ---
  "install the GitHub agent": "установить GitHub-агента",
  "run the GitHub agent": "запустить GitHub-агента",
  "GitHub mock event to run the agent for": "имитация GitHub-события, для которого запускается агент",
  "GitHub personal access token (github_pat_********)": "личный токен доступа GitHub (github_pat_********)",
  "manage GitHub agent": "управление GitHub-агентом",
  "Install GitHub agent": "Установка GitHub-агента",
  "    2. Add the following secrets in org or repo ({owner}/{repo}) settings":
    "    2. Добавьте следующие секреты в настройках организации или репозитория ({owner}/{repo})",
  "Next steps:": "Дальнейшие шаги:",
  '    1. Commit the `{file}` file and push': "    1. Закоммитьте файл `{file}` и запушьте",
  "    3. Go to a GitHub issue and comment `/oc summarize` to see the agent in action":
    "    3. Перейдите к задаче GitHub и оставьте комментарий `/oc summarize`, чтобы увидеть агента в действии",
  "   Learn more about the GitHub agent - https://opencode.ai/docs/github/#usage-examples":
    "   Подробнее о GitHub-агенте - https://opencode.ai/docs/github/#usage-examples",
  "Could not find git repository. Please run this command from a git repository.":
    "Не удалось найти git-репозиторий. Запустите эту команду из git-репозитория.",
  "Select provider": "Выберите провайдера",
  "recommended": "рекомендуемый",
  "Select model": "Выберите модель",
  "Installing GitHub app": "Установка GitHub-приложения",
  "GitHub app already installed": "GitHub-приложение уже установлено",
  "Could not open browser. Please visit: {url}": "Не удалось открыть браузер. Посетите: {url}",
  "Waiting for GitHub app to be installed": "Ожидание установки GitHub-приложения",
  "Failed to detect GitHub app installation. Make sure to install the app for the `{owner}/{repo}` repository.":
    "Не удалось обнаружить установку GitHub-приложения. Убедитесь, что приложение установлено для репозитория `{owner}/{repo}`.",
  "Installed GitHub app": "GitHub-приложение установлено",
  'Added workflow file: "{file}"': 'Файл рабочего процесса добавлен: "{file}"',
  "Unsupported event type: {event}": "Неподдерживаемый тип события: {event}",
  "GITHUB_TOKEN environment variable is not set. When using use_github_token, you must provide GITHUB_TOKEN.":
    "Переменная окружения GITHUB_TOKEN не задана. При использовании use_github_token вы должны указать GITHUB_TOKEN.",
  "Failed to get summary from agent": "Не удалось получить сводку от агента",
  "Could not fetch an OIDC token. Make sure to add `id-token: write` to your workflow permissions.":
    "Не удалось получить OIDC-токен. Убедитесь, что в разрешениях рабочего процесса добавлен `id-token: write`.",
  "App token exchange failed: {status} {statusText} - {error}":
    "Не удалось обменять токен приложения: {status} {statusText} - {error}",
  "Failed to check permissions for user {actor}: {error}":
    "Не удалось проверить разрешения для пользователя {actor}: {error}",
  "User {actor} does not have write permissions": "Пользователь {actor} не имеет прав на запись",
  'Environment variable "MODEL" is not set': 'Переменная окружения "MODEL" не задана',
  'Invalid model {value}. Model must be in the format "provider/model".':
    'Недопустимая модель {value}. Модель должна быть в формате "провайдер/модель".',
  'Environment variable "GITHUB_RUN_ID" is not set': 'Переменная окружения "GITHUB_RUN_ID" не задана',
  "Invalid share value: {value}. Share must be a boolean.":
    "Недопустимое значение share: {value}. Share должен быть логическим.",
  "Invalid use_github_token value: {value}. Must be a boolean.":
    "Недопустимое значение use_github_token: {value}. Должно быть логическим.",
  "PROMPT input is required for {events} events": "Для событий {events} требуется входной PROMPT",
  "Comments must mention {mentions}": "Комментарии должны упоминать {mentions}",
  "Issue #{id} not found": "Задача #{id} не найдена",
  "PR #{id} not found": "PR #{id} не найден",

  // --- pr ---
  "fetch and checkout a GitHub PR branch, then run opencode":
    "загрузить и переключиться на ветку PR GitHub, затем запустить opencode",
  "PR number to checkout": "номер PR для переключения",
  "Could not load instance context": "Не удалось загрузить контекст экземпляра",
  "Fetching and checking out PR #{number}...": "Загрузка и переключение на PR #{number}...",
  "Failed to checkout PR #{number}. Make sure you have gh CLI installed and authenticated.":
    "Не удалось переключиться на PR #{number}. Убедитесь, что у вас установлен gh CLI и выполнен вход.",
  "Added fork remote: {remote}": "Добавлен удалённый репозиторий форка: {remote}",
  "Found opencode session: {url}": "Найдена сессия opencode: {url}",
  "Importing session...": "Импорт сессии...",
  "Session imported: {id}": "Сессия импортирована: {id}",
  "Successfully checked out PR #{number} as branch '{branch}'":
    "Успешно переключено на PR #{number} (ветка '{branch}')",
  "Starting opencode...": "Запуск opencode...",
  "opencode exited with code {code}": "opencode завершился с кодом {code}",

  // --- import ---
  "import session data from JSON file or URL": "импорт данных сессии из JSON-файла или URL",
  "path to JSON file or share URL": "путь к JSON-файлу или URL-ссылке",
  "Invalid URL format. Expected: {baseUrl}/share/<slug>": "Неверный формат URL. Ожидается: {baseUrl}/share/<slug>",
  "Failed to fetch share data: {error}": "Не удалось получить данные ссылки: {error}",
  "Share data was not valid JSON": "Данные ссылки не являются корректным JSON",
  "Share not found or empty: {slug}": "Ссылка не найдена или пуста: {slug}",
  "Failed to read session data": "Не удалось прочитать данные сессии",
  "Imported session: {id}": "Сессия импортирована: {id}",
  "File not found: {file}": "Файл не найден: {file}",
  "Failed to read file: Permission denied": "Не удалось прочитать файл: отказано в доступе",
  "Failed to read file: {message}": "Не удалось прочитать файл: {message}",
  "Invalid JSON in {file}: {detail}": "Некорректный JSON в {file}: {detail}",

  // --- export ---
  "export session data as JSON": "экспорт данных сессии в JSON",
  "session id to export": "идентификатор сессии для экспорта",
  "redact sensitive transcript and file data": "скрыть чувствительные данные транскрипта и файлов",
  "Exporting session: {id}\n": "Экспорт сессии: {id}\n",
  "Export session": "Экспорт сессии",
  "No sessions found": "Сессии не найдены",
  "Select session to export": "Выберите сессию для экспорта",
  "Exporting session...": "Экспорт сессии...",
  "Session not found: {id}": "Сессия не найдена: {id}",
}
