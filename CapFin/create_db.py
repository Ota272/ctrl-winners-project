import sqlite3

conn = sqlite3.connect("database.db")

# таблица пользователей
conn.execute("""
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)
""")

# таблица состояний игрока
# таблица состояний игрока
conn.execute("""
CREATE TABLE user_state (
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

conn.commit()
conn.close()

print("База данных создана!")
