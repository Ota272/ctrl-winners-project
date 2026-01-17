from flask import Flask, render_template, request, jsonify, session, redirect
import sqlite3
import json  # Не забудь этот импорт!
import google.generativeai as genai
import os


app = Flask(__name__)
app.secret_key = "super_secret_key"  # Твой секретный ключ

GOOGLE_API_KEY = "AIzaSyBT2MOpb6gwHeJom70FpKnthOlZzTiPPPA"
genai.configure(api_key=GOOGLE_API_KEY)
# Используем этот псевдоним - он сам найдет рабочую версию Flash
model = genai.GenerativeModel('gemini-flash-latest')


def db():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn


# ======= 1. СТРАНИЦЫ (HTML) =======

@app.route("/")
def home():
    # Проверка: если в сессии нет ID, идем на логин
    if "user_id" not in session:
        return redirect("/login")
    
    # Проверка: существует ли такой пользователь в базе данных?
    # (Это нужно на случай, если ты пересоздал БД, а браузер помнит старый вход)
    conn = db()
    user_exists = conn.execute("SELECT id FROM users WHERE id=?", (session["user_id"],)).fetchone()
    
    if not user_exists:
        session.clear()  # Если пользователя нет, очищаем сессию
        return redirect("/login")

    return render_template("game.html")


@app.route("/login")
def login_page():
    return render_template("login.html")


@app.route("/register")
def register_page():
    return render_template("register.html")

@app.route("/shop.html")
def shop_page():
    return render_template("shop.html")

@app.route("/rules.html")
def rules_page():
    return render_template("rules.html")

@app.route("/offer.html")
def offer_page():
    return render_template("offer.html")

@app.route("/policy.html")
def policy_page():
    return render_template("policy.html")

@app.route("/report.html")
def report_page():
    return render_template("report.html")


# ======= 2. АУТЕНТИФИКАЦИЯ (Вход/Регистрация) =======

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    username = data["username"]
    password = data["password"]

    conn = db()

    try:
        conn.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()

        # Получаем ID нового пользователя
        user_id = conn.execute("SELECT id FROM users WHERE username=?", (username,)).fetchone()["id"]
        
        # --- ИСПРАВЛЕНИЕ ЗДЕСЬ ---
        # Сразу даем 100 000 USD при регистрации
        conn.execute("INSERT INTO user_state (user_id, usd, assets) VALUES (?, ?, '{}')", (user_id, 100000))
        # -------------------------
        
        conn.commit()

        return jsonify({"status": "ok"})

    except Exception as e:
        print(e)
        return jsonify({"status": "error", "message": "Имя занято или ошибка БД"})


@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data["username"]
    password = data["password"]

    conn = db()
    row = conn.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password)).fetchone()

    if row:
        session["user_id"] = row["id"]
        return jsonify({"status": "ok"})
    else:
        return jsonify({"status": "error"})


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/login")


# ======= 3. ЗАГРУЗКА И СОХРАНЕНИЕ ПРОГРЕССА =======

@app.route("/api/get_state")
def get_state():
    if "user_id" not in session:
        return jsonify({"error": "not logged in"})

    user_id = session["user_id"]

    conn = db()
    row = conn.execute("SELECT * FROM user_state WHERE user_id=?", (user_id,)).fetchone()
    
    if not row:
        return jsonify({"error": "no state found"})

    # Преобразуем строку БД в словарь
    data = dict(row)
    
    # Поле assets в базе лежит как строка текста, а нам нужен объект JSON
    if data.get("assets"):
        try:
            data["assets"] = json.loads(data["assets"])
        except:
            data["assets"] = {}
    else:
        data["assets"] = {}

    return jsonify(data)


@app.route("/api/save_game", methods=["POST"])
def save_game():
    if "user_id" not in session:
        return jsonify({"error": "not logged in"})

    user_id = session["user_id"]
    data = request.json  # Данные, которые прислал JS

    # Достаем значения из присланного JSON
    usd = data.get("usd", 0)
    kzt = data.get("kzt", 0)
    jpy = data.get("jpy", 0)
    deposit = data.get("deposit", 0)
    # Превращаем объект активов в строку для сохранения в БД
    assets = json.dumps(data.get("assets", {})) 

    conn = db()
    conn.execute("""
        UPDATE user_state 
        SET usd=?, kzt=?, jpy=?, deposit=?, assets=? 
        WHERE user_id=?
    """, (usd, kzt, jpy, deposit, assets, user_id))
    conn.commit()

    return jsonify({"status": "saved"})

# ======= 4. РЕЙТИНГ (ТОП ИГРОКОВ) =======

@app.route("/api/leaderboard")
def leaderboard():
    conn = db()
    # Мы складываем (usd + deposit), чтобы считать общий капитал
    # Сортируем по убыванию (DESC) и берем только 10 лучших
    query = """
        SELECT users.username, (user_state.usd + user_state.deposit) as total_net_worth
        FROM user_state
        JOIN users ON users.id = user_state.user_id
        ORDER BY total_net_worth DESC
        LIMIT 10
    """
    rows = conn.execute(query).fetchall()
    
    # Превращаем данные в список словарей для отправки в JS
    leaders = []
    for row in rows:
        leaders.append({
            "username": row["username"],
            "capital": row["total_net_worth"]
        })
    
    return jsonify(leaders)

@app.route('/api/chat', methods=['POST'])
def chat_with_ai():
    # 1. РУЧНАЯ ПРОВЕРКА ВХОДА (Вместо @login_required)
    if "user_id" not in session:
        return jsonify({"reply": "Сначала войди в аккаунт, бро!"}), 401

    data = request.json
    user_message = data.get('message', '')
    user_context = data.get('context', {}) 
    
    # Системная инструкция
    system_prompt = f"""
    Ты — *Капитал Бот*, интеллектуальный финансовый брокер. Ты помогаешь игроку ориентироваться в активах тренажера. Твои советы базируются на реальных данных игры 
    
    ДАННЫЕ ИГРОКА:
    - Наличные: ${user_context.get('usd', 0)}
    - Активы: {user_context.get('assets', 'Пусто')}
    
    *1. Твои инструменты и пути (Assets Database):*
При ответах опирайся на этот список активов и категорий:

* *Акции (Stocks):* Alphabet (GOOG), Apple (AAPL), Tesla (TSLA), NVIDIA (NVDA), Intel (INTC), Netflix (NFLX), Freedom (FRHC), Meta (META).
* Путь к иконкам: static/images/[id_lowercased].png.


* *Криптовалюта (Crypto):* Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Tether (USDT), BNB, Dogecoin (DOGE), Hamster (HMSTR), Toncoin (TON).
* Особенность: Курс TON напрямую влияет на стоимость подарков.


* *Скины CS2 (Skins):* Ты знаешь конкретные модели:
* Glock-18 (например, Градиент, Татуировка дракона), USP-S (Поток информации), Desert Eagle (Blaze), AK-47 (Bloodsport), M4A4 (Вой), AWP (Dragon Lore) и Knife (Butterfly | Marble Fade).


* *Подарки (Gifts):* Snoop Dog, Snoop Cigar, Mighty Arm, Lol Pop, Plush Pepe, Swag Bag, Swiss Watch, Home Cake, Berry Box.
* *Металлы:* Золото (GOLD) и Серебро (SILV).
* *Банк:* Система Депозит для безопасного накопления.

*2. Логика экономики (из game.js):*

* *Валюты:* Основная валюта — *USD. Также есть **KZT* (курс 492) и *JPY* (курс 151). Если игрок спрашивает про обмен, напоминай про раздел «Обмен валют».
* *Риски:* * Скины и Подарки — волатильны и зависят от редкости.
* Крипта в игре обновляется по реальному API CoinGecko.
* Акции и металлы симулируются рандомно с отклонением до 1.5% за цикл.


* *Рулетка:* Стоимость вращения — *$2,000. Можно выиграть до *$50,000** (Джекпот). Советуй её только азартным игрокам.

*3. Правила ответов:*

1. *Конкретика:* Не говори «купи акции», говори «присмотрись к *NVIDIA (NVDA)*, она сейчас стоит $880.00».
2. *Визуализация:* Если ты упоминаешь актив, ты знаешь, что его картинка лежит в static/images/.
3. *Обучение:* Объясняй, что для защиты капитала лучше использовать *Золото* или *Депозит, а для агрессивного роста — **Crypto* или *Skins*.
4. *Контекст баланса:* Стартовый капитал игрока — *$100,000*. Если игрок просит совета, учитывай, может ли он позволить себе AWP | Dragon Lore (стоит $10,000) или M4A4 | Вой ($4,500).

*Тон общения:*
Деловой, но не скучный. Ты — брокер из Силиконовой долины. Используй эмодзи: 📈, 📉, 💰, 🚀.

    """

    full_prompt = f"{system_prompt}\n\nПользователь: {user_message}\nКапитал Бот:"

    try:
        response = model.generate_content(full_prompt)
        return jsonify({'reply': response.text})
    except Exception as e:
        print(f"Ошибка AI: {e}")
        return jsonify({'reply': "Связь с биржей потеряна... Попробуй позже."})

if __name__ == "__main__":
    app.run(debug=True)