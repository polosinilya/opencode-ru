import type { I18nParams } from "../i18n"
import { pluralRu } from "../i18n"

export const ru: Record<string, string | ((params?: I18nParams) => string)> = {
  // --- models ---
  "list all available models": "список всех доступных моделей",
  "provider ID to filter models by": "ID провайдера для фильтрации моделей",
  "use more verbose model output (includes metadata like costs)":
    "более подробный вывод моделей (включая метаданные, например стоимость)",
  "refresh the models cache from models.dev": "обновить кэш моделей из models.dev",
  "Models cache refreshed": "Кэш моделей обновлён",
  "Provider not found: {provider}": "Провайдер не найден: {provider}",

  // --- providers ---
  "manage AI providers and credentials": "управление AI-провайдерами и учётными данными",
  "list providers and credentials": "список провайдеров и учётных данных",
  "Credentials": "Учётные данные",
  "{count} credentials": (p) => pluralRu(p?.count, ["учётная запись", "учётные записи", "учётных записей"]),
  "Environment": "Окружение",
  "{count} environment variable": (p) =>
    pluralRu(p?.count, ["переменная окружения", "переменные окружения", "переменных окружения"]),
  "log in to a provider": "войти в провайдера",
  "opencode auth provider": "провайдер авторизации opencode",
  "provider id or name to log in to (skips provider selection)":
    "ID или имя провайдера для входа (пропускает выбор провайдера)",
  "login method label (skips method selection)":
    "название метода входа (пропускает выбор метода)",
  "Add credential": "Добавить учётные данные",
  "Failed to load auth provider metadata from {url}: ":
    "Не удалось загрузить метаданные провайдера авторизации с {url}: ",
  "Running {command}": "Выполняется {command}",
  "Failed": "Не удалось",
  "Failed to run auth provider command: ": "Не удалось выполнить команду провайдера авторизации: ",
  "Logged into {url}": "Выполнен вход в {url}",
  "Login method": "Метод входа",
  'Unknown method "{method}" for {provider}. Available: {methods}':
    'Неизвестный метод "{method}" для {provider}. Доступно: {methods}',
  "Failed to authorize: ": "Не удалось авторизовать: ",
  "Failed to authorize": "Не удалось авторизовать",
  "Go to: ": "Перейдите по ссылке: ",
  "Waiting for authorization...": "Ожидание авторизации...",
  "Login successful": "Вход выполнен успешно",
  "Paste the authorization code here: ": "Вставьте код авторизации сюда: ",
  "Required": "Обязательно",
  "Enter your API key": "Введите ваш API-ключ",
  "recommended": "рекомендуемый",
  "ChatGPT Plus/Pro or API key": "ChatGPT Plus/Pro или API-ключ",
  'Unknown provider "{input}"': 'Неизвестный провайдер "{input}"',
  "Select provider": "Выберите провайдера",
  "Other": "Другое",
  "Enter provider id": "Введите ID провайдера",
  "a-z, 0-9 and hyphens only": "только a-z, 0-9 и дефисы",
  "This only stores a credential for {provider} - you will need configure it in opencode.json, check the docs for examples.":
    "Здесь сохраняются только учётные данные для {provider} — вам нужно настроить его в opencode.json, примеры смотрите в документации.",
  ["Amazon Bedrock authentication priority:\n" +
    "  1. Bearer token (AWS_BEARER_TOKEN_BEDROCK or /connect)\n" +
    "  2. AWS credential chain (profile, access keys, IAM roles, EKS IRSA)\n\n" +
    "Configure via opencode.json options (profile, region, endpoint) or\n" +
    "AWS environment variables (AWS_PROFILE, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_WEB_IDENTITY_TOKEN_FILE)."]:
    "Приоритет аутентификации Amazon Bedrock:\n" +
    "  1. Bearer-токен (AWS_BEARER_TOKEN_BEDROCK или /connect)\n" +
    "  2. Цепочка учётных данных AWS (профиль, ключи доступа, IAM-роли, EKS IRSA)\n\n" +
    "Настройте через параметры opencode.json (profile, region, endpoint) или\n" +
    "переменные окружения AWS (AWS_PROFILE, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_WEB_IDENTITY_TOKEN_FILE).",
  "Create an api key at https://opencode.ai/auth": "Создайте API-ключ на https://opencode.ai/auth",
  "You can create an api key at https://vercel.link/ai-gateway-token":
    "Вы можете создать API-ключ на https://vercel.link/ai-gateway-token",
  ["Cloudflare AI Gateway can be configured with CLOUDFLARE_GATEWAY_ID, CLOUDFLARE_ACCOUNT_ID, and CLOUDFLARE_API_TOKEN environment variables. Read more: https://opencode.ai/docs/providers/#cloudflare-ai-gateway"]:
    "Cloudflare AI Gateway можно настроить с помощью переменных окружения CLOUDFLARE_GATEWAY_ID, CLOUDFLARE_ACCOUNT_ID и CLOUDFLARE_API_TOKEN. Подробнее: https://opencode.ai/docs/providers/#cloudflare-ai-gateway",
  "log out from a configured provider": "выйти из настроенного провайдера",
  "provider id or name to log out from": "ID или имя провайдера для выхода",
  "Remove credential": "Удалить учётные данные",
  "No credentials found": "Учётные данные не найдены",
  'Unknown configured provider "{provider}"': 'Неизвестный настроенный провайдер "{provider}"',
  "Logout successful": "Выход выполнен успешно",

  // --- agent ---
  "manage agents": "управление агентами",
  "create a new agent": "создать нового агента",
  "directory path to generate the agent file": "путь к каталогу для создания файла агента",
  "what the agent should do": "чем должен заниматься агент",
  "agent mode": "режим агента",
  'comma-separated list of permissions to allow (default: all). Available: "{permissions}"':
    'список разрешений через запятую (по умолчанию: все). Доступно: "{permissions}"',
  "model to use in the format of provider/model": "модель в формате провайдер/модель",
  "Create agent": "Создание агента",
  "Location": "Расположение",
  "Current project": "Текущий проект",
  "Global": "Глобально",
  "Description": "Описание",
  "What should this agent do?": "Чем должен заниматься этот агент?",
  "Generating agent configuration...": "Генерация конфигурации агента...",
  "LLM failed to generate agent: {error}": "LLM не смог сгенерировать агента: {error}",
  "Agent {identifier} generated": "Агент {identifier} создан",
  "Select permissions to allow (Space to toggle)":
    "Выберите разрешения для выдачи (пробел — переключить)",
  "Agent mode": "Режим агента",
  "All": "Все",
  "Can function in both primary and subagent roles": "Может работать и как основной агент, и как субагент",
  "Primary": "Основной",
  "Acts as a primary/main agent": "Действует как основной агент",
  "Subagent": "Субагент",
  "Can be used as a subagent by other agents": "Может использоваться другими агентами как субагент",
  "Error: Agent file already exists: {path}": "Ошибка: файл агента уже существует: {path}",
  "Agent file already exists: {path}": "Файл агента уже существует: {path}",
  "Agent created: {path}": "Агент создан: {path}",
  "list all available agents": "список всех доступных агентов",

  // --- acp ---
  "start ACP (Agent Client Protocol) server": "запустить ACP-сервер (Agent Client Protocol)",
  "working directory": "рабочий каталог",

  // --- db ---
  "database tools": "инструменты базы данных",
  "open an interactive sqlite3 shell or run a query": "открыть интерактивную оболочку sqlite3 или выполнить запрос",
  "SQL query to execute": "SQL-запрос для выполнения",
  "Output format": "Формат вывода",
  "print the database path": "показать путь к базе данных",

  // --- account ---
  " (active)": " (активный)",
  "Log in": "Вход",
  "Enter code: ": "Введите код: ",
  "Logged in as {email}": "Выполнен вход как {email}",
  "Device code expired": "Срок действия кода устройства истёк",
  "Authorization denied": "В авторизации отказано",
  "Error: ": "Ошибка: ",
  "Unexpected state": "Неожиданное состояние",
  "Not logged in": "Вход не выполнен",
  "Account not found: ": "Учётная запись не найдена: ",
  "Logged out from ": "Выполнен выход из ",
  "Log out": "Выход",
  "Select account to log out": "Выберите учётную запись для выхода",
  "No orgs found": "Организации не найдены",
  "Switch org": "Сменить организацию",
  "Select org": "Выберите организацию",
  "Switched to ": "Переключено на ",
  "No accounts found": "Учётные записи не найдены",
  "No active account": "Нет активной учётной записи",
  "Opened ": "Открыто: ",
  "server URL": "URL сервера",
  "account email to log out from": "email учётной записи для выхода",
  "log in to console": "войти в консоль",
  "log out from console": "выйти из консоли",
  "switch active org": "сменить активную организацию",
  "list orgs": "список организаций",
  "open active console account": "открыть активную учётную запись консоли",
}
