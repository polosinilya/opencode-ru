import type { I18nParams } from "../i18n"
import { pluralRu } from "../i18n"

export const ru: Record<string, string | ((params?: I18nParams) => string)> = {
  // --- statuses ---
  "authenticated": "авторизован",
  "expired": "истёк",
  "not authenticated": "не авторизован",
  "not initialized": "не инициализирован",
  "connected": "подключён",
  "disabled": "отключён",
  "needs authentication": "требуется авторизация",
  "needs client registration": "требуется регистрация клиента",
  "failed": "сбой",

  // --- mcp top-level ---
  "manage MCP (Model Context Protocol) servers": "управление MCP-серверами (Model Context Protocol)",
  "list MCP servers and their status": "список MCP-серверов и их статус",
  "MCP Servers": "MCP-серверы",
  "No MCP servers configured": "MCP-серверы не настроены",
  "Add servers with: opencode mcp add": "Добавьте серверы командой: opencode mcp add",
  "{count} server(s)": (p) => pluralRu(p?.count, ["сервер", "сервера", "серверов"]),

  // --- mcp auth ---
  "authenticate with an OAuth-enabled MCP server": "авторизация на MCP-сервере с поддержкой OAuth",
  "name of the MCP server": "имя MCP-сервера",
  "MCP OAuth Authentication": "MCP OAuth-авторизация",
  "No OAuth-capable MCP servers configured": "MCP-серверы с поддержкой OAuth не настроены",
  "Remote MCP servers support OAuth by default. Add a remote server in opencode.json:":
    "Удалённые MCP-серверы поддерживают OAuth по умолчанию. Добавьте удалённый сервер в opencode.json:",
  "Select MCP server to authenticate": "Выберите MCP-сервер для авторизации",
  "MCP server not found: {name}": "MCP-сервер не найден: {name}",
  "MCP server {name} is not an OAuth-capable remote server":
    "MCP-сервер {name} не является удалённым сервером с поддержкой OAuth",
  "{name} already has valid credentials. Re-authenticate?": "{name} уже имеет действующие учётные данные. Авторизоваться заново?",
  "Cancelled": "Отменено",
  "{name} has expired credentials. Re-authenticating...":
    "У {name} истёк срок действия учётных данных. Повторная авторизация...",
  "Starting OAuth flow...": "Запуск OAuth-процедуры...",
  "Authorize in your browser:": "Авторизуйтесь в браузере:",
  "Waiting for authorization...": "Ожидание авторизации...",
  "Authentication successful!": "Авторизация прошла успешно!",
  "Authentication failed": "Авторизация не удалась",
  "Add clientId to your MCP server config:": "Добавьте clientId в конфигурацию MCP-сервера:",
  "Unexpected status: ": "Неожиданный статус: ",
  "list OAuth-capable MCP servers and their auth status":
    "список MCP-серверов с поддержкой OAuth и их статус авторизации",
  "MCP OAuth Status": "MCP OAuth-статус",
  "{count} OAuth-capable server(s)": (p) =>
    pluralRu(p?.count, ["OAuth-сервер", "OAuth-сервера", "OAuth-серверов"]),

  // --- mcp logout ---
  "remove OAuth credentials for an MCP server": "удалить OAuth-учётные данные MCP-сервера",
  "MCP OAuth Logout": "MCP OAuth-выход",
  "No MCP OAuth credentials stored": "OAuth-учётные данные MCP не сохранены",
  "Select MCP server to logout": "Выберите MCP-сервер для выхода",
  "tokens + client": "токены + клиент",
  "tokens": "токены",
  "client registration": "регистрация клиента",
  "No credentials found for: {name}": "Учётные данные не найдены для: {name}",
  "Removed OAuth credentials for {name}": "OAuth-учётные данные удалены для {name}",

  // --- mcp add ---
  "add an MCP server": "добавить MCP-сервер",
  "URL for a remote MCP server": "URL удалённого MCP-сервера",
  "environment variable for a local MCP server (KEY=VALUE)":
    "переменная окружения для локального MCP-сервера (KEY=VALUE)",
  "HTTP header for a remote MCP server (KEY=VALUE)": "HTTP-заголовок для удалённого MCP-сервера (KEY=VALUE)",
  "A server name is required for non-interactive MCP configuration":
    "Для неинтерактивной настройки MCP требуется имя сервера",
  "Provide either --url <url> or a command after --": "Укажите либо --url <url>, либо команду после --",
  "Invalid URL: {url}": "Недопустимый URL: {url}",
  "--env is only valid for local MCP servers": "--env допустим только для локальных MCP-серверов",
  "--header is only valid for remote MCP servers": "--header допустим только для удалённых MCP-серверов",
  "Invalid {kind}: {entry}. Expected KEY=VALUE": "Недопустимый {kind}: {entry}. Ожидается KEY=VALUE",
  'MCP server "{name}" added to {path}': 'MCP-сервер "{name}" добавлен в {path}',
  "Add MCP server": "Добавление MCP-сервера",
  "Location": "Расположение",
  "Current project": "Текущий проект",
  "Global": "Глобально",
  "Enter MCP server name": "Введите имя MCP-сервера",
  "Required": "Обязательно",
  "Select MCP server type": "Выберите тип MCP-сервера",
  "Local": "Локальный",
  "Run a local command": "Запуск локальной команды",
  "Remote": "Удалённый",
  "Connect to a remote URL": "Подключение к удалённому URL",
  "Enter command to run": "Введите команду для запуска",
  "e.g., opencode x @modelcontextprotocol/server-filesystem":
    "например, opencode x @modelcontextprotocol/server-filesystem",
  "MCP server added successfully": "MCP-сервер успешно добавлен",
  "Enter MCP server URL": "Введите URL MCP-сервера",
  "e.g., https://example.com/mcp": "например, https://example.com/mcp",
  "Invalid URL": "Недопустимый URL",
  "Does this server require OAuth authentication?": "Требует ли этот сервер OAuth-авторизации?",
  "Do you have a pre-registered client ID?": "У вас есть предварительно зарегистрированный client ID?",
  "Enter client ID": "Введите client ID",
  "Do you have a client secret?": "У вас есть client secret?",
  "Enter client secret": "Введите client secret",

  // --- mcp debug ---
  "debug OAuth connection for an MCP server": "диагностика OAuth-подключения MCP-сервера",
  "MCP OAuth Debug": "MCP OAuth-диагностика",
  "MCP server {name} is not a remote server": "MCP-сервер {name} не является удалённым сервером",
  "MCP server {name} has OAuth explicitly disabled": "У MCP-сервера {name} OAuth явно отключён",
  "Server: {name}": "Сервер: {name}",
  "URL: {url}": "URL: {url}",
  "Auth status: {status}": "Статус авторизации: {status}",
  "  Access token: {token}": "  Токен доступа: {token}",
  "  Expires: {date} {status}": "  Истекает: {date} {status}",
  "(EXPIRED)": "(ИСТЁК)",
  "  Refresh token: present": "  Токен обновления: есть",
  "  Client ID: {id}": "  Client ID: {id}",
  "  Client secret expires: {date}": "  Client secret истекает: {date}",
  "Testing connection...": "Проверка подключения...",
  "HTTP response: {status} {statusText}": "HTTP-ответ: {status} {statusText}",
  "WWW-Authenticate: {value}": "WWW-Authenticate: {value}",
  "Initial unauthenticated check returned 401, so this server requires OAuth":
    "Первичная проверка без авторизации вернула 401, поэтому этот сервер требует OAuth",
  "Testing OAuth flow (without completing authorization)...":
    "Тестирование OAuth-процедуры (без завершения авторизации)...",
  "Connection successful (already authenticated)": "Подключение успешно (уже авторизован)",
  "OAuth flow triggered: {error}": "Запущена OAuth-процедура: {error}",
  "Client ID available: {id}": "Client ID доступен: {id}",
  "No client ID - dynamic registration will be attempted":
    "Client ID отсутствует — будет выполнена динамическая регистрация",
  "Connection error: {error}": "Ошибка подключения: {error}",
  "Server responded successfully (no auth required or already authenticated)":
    "Сервер ответил успешно (авторизация не требуется или уже выполнена)",
  "Server info: {info}": "Информация о сервере: {info}",
  "Unexpected status: {status}": "Неожиданный статус: {status}",
  "Response body: {body}": "Тело ответа: {body}",
  "Connection failed": "Подключение не удалось",
  "Error: {error}": "Ошибка: {error}",
  "Debug complete": "Диагностика завершена",
  "Done": "Готово",
}
