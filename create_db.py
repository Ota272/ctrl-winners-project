import sqlite3

conn = sqlite3.connect("database.db")

# 1. Таблица пользователей
conn.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)
""")

# 2. Таблица состояния (деньги и активы)
conn.execute("""
CREATE TABLE IF NOT EXISTS user_state (
    user_id INTEGER,
    balance REAL DEFAULT 0,
    deposit REAL DEFAULT 0,
    usd REAL DEFAULT 0,
    kzt REAL DEFAULT 0,
    jpy REAL DEFAULT 0,
    assets TEXT DEFAULT '{}',
    FOREIGN KEY(user_id) REFERENCES users(id)
)
""")

# 3. Таблица Истории Операций (С ПОЛЕМ ДЛЯ ГРАФИКА)
conn.execute("""
CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    action_type TEXT,   -- 'BUY', 'SELL', 'EXCHANGE', 'GAME'
    asset_name TEXT,    -- 'Bitcoin', 'Apple'
    amount REAL,        -- Количество
    price REAL,         -- Цена за единицу
    total REAL,         -- Общая сумма сделки
    balance_snapshot REAL, -- <-- ДЛЯ ГРАФИКА КАПИТАЛА
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
)
""")

conn.commit()
conn.close()

print("База данных успешно обновлена и готова к работе!")