const DATABASE = {
    portfolio: {
        usd: 100000,
        kzt: 0,
        jpy: 0,
        deposit: 0,
        assets: {}
    },
    // ЦЕНА TON (для привязки подарков)
    tonPrice: 6.8, 
    market: {
        stocks: [
            { id: 'GOOG', name: 'Alphabet', price: 175.4, symbol: 'NASDAQ:GOOG', img: 'static/images/goog.png' },
            { id: 'AAPL', name: 'Apple', price: 189.3, symbol: 'NASDAQ:AAPL', img: 'static/images/aapl.png' },
            { id: 'TSLA', name: 'Tesla', price: 210.5, symbol: 'NASDAQ:TSLA', img: 'static/images/tsla.png' },
            { id: 'NVDA', name: 'NVIDIA', price: 880.0, symbol: 'NASDAQ:NVDA', img: 'static/images/nvda.png' },
            { id: 'INTC', name: 'Intel', price: 30.5, symbol: 'NASDAQ:INTC', img: 'static/images/intc.png' },
            { id: 'NFLX', name: 'Netflix', price: 620.0, symbol: 'NASDAQ:NFLX', img: 'static/images/nflx.png' },
            { id: 'FRHC', name: 'Freedom', price: 82.0, symbol: 'NASDAQ:FRHC', img: 'static/images/frhc.png' },
            { id: 'META', name: 'Meta', price: 490.0, symbol: 'NASDAQ:META', img: 'static/images/meta.png' }
        ],
        crypto: [
            { id: 'BTC', name: 'Bitcoin', price: 67400, symbol: 'BINANCE:BTCUSDT', apiId: 'bitcoin', img: 'static/images/btc.png' },
            { id: 'ETH', name: 'Ethereum', price: 3500, symbol: 'BINANCE:ETHUSDT', apiId: 'ethereum', img: 'static/images/eth.png' },
            { id: 'SOL', name: 'Solana', price: 145.0, symbol: 'BINANCE:SOLUSDT', apiId: 'solana', img: 'static/images/sol.png' },
            { id: 'USDT', name: 'Tether', price: 1.0, symbol: 'BINANCE:USDTUSD', apiId: 'tether', img: 'static/images/usdt.png' },
            { id: 'BNB', name: 'BNB', price: 590.0, symbol: 'BINANCE:BNBUSDT', apiId: 'binancecoin', img: 'static/images/bnb.png' },
            { id: 'DOGE', name: 'Dogecoin', price: 0.16, symbol: 'BINANCE:DOGEUSDT', apiId: 'dogecoin', img: 'static/images/doge.png' },
            { id: 'HMSTR', name: 'Hamster', price: 0.05, symbol: 'GATEIO:HMSTR', apiId: 'hamster-kombat', img: 'static/images/hmstr.png' },
            { id: 'TON', name: 'Toncoin', price: 6.8, symbol: 'OKX:TONUSDT', apiId: 'the-open-network', img: 'static/images/ton.png' }
        ],
        metals: [
            { id: 'GOLD', name: 'Золото', price: 2300, symbol: 'TVC:GOLD', img: 'static/images/gold.png' },
            { id: 'SILV', name: 'Серебро', price: 28, symbol: 'TVC:SILVER', img: 'static/images/silver.png' }
        ],
        // ВЛОЖЕННАЯ СТРУКТУРА ДЛЯ ПОДАРКОВ
        gifts: [
            { id: 'G_SNOOP', name: 'Snoop Dog', isGroup: true, img: 'static/images/g_snoop_cover.png', items: generateGiftVariations('Snoop', 50) },
            { id: 'G_CIGAR', name: 'Snoop Cigar', isGroup: true, img: 'static/images/g_cigar_cover.png', items: generateGiftVariations('Cigar', 20) },
            { id: 'G_ARM', name: 'Mighty Arm', isGroup: true, img: 'static/images/g_arm_cover.png', items: generateGiftVariations('Arm', 15) },
            { id: 'G_POP', name: 'Lol Pop', isGroup: true, img: 'static/images/g_pop_cover.png', items: generateGiftVariations('Pop', 10) },
            { id: 'G_PEPE', name: 'Plush Pepe', isGroup: true, img: 'static/images/g_pepe_cover.png', items: generateGiftVariations('Pepe', 25) },
            { id: 'G_BAG', name: 'Swag Bag', isGroup: true, img: 'static/images/g_bag_cover.png', items: generateGiftVariations('Bag', 100) },
            { id: 'G_WATCH', name: 'Swiss Watch', isGroup: true, img: 'static/images/g_watch_cover.png', items: generateGiftVariations('Watch', 200) },
            { id: 'G_CAKE', name: 'Home Cake', isGroup: true, img: 'static/images/g_cake_cover.png', items: generateGiftVariations('Cake', 5) },
            { id: 'G_BERRY', name: 'Berry Box', isGroup: true, img: 'static/images/g_berry_cover.png', items: generateGiftVariations('Berry', 8) },
        ],
        // ВЛОЖЕННАЯ СТРУКТУРА ДЛЯ СКИНОВ CS2
        skins: [
            { id: 'W_GLOCK', name: 'Glock-18', isGroup: true, img: 'static/images/glock_cover.png', items: generateSkinVariations('Glock', 10) },
            { id: 'W_USP', name: 'USP-S', isGroup: true, img: 'static/images/usp_cover.png', items: generateSkinVariations('USP', 20) },
            { id: 'W_DEAGLE', name: 'Desert Eagle', isGroup: true, img: 'static/images/deagle_cover.png', items: generateSkinVariations('Deagle', 50) },
            { id: 'W_R8', name: 'Revolver R8', isGroup: true, img: 'static/images/r8_cover.png', items: generateSkinVariations('R8', 15) },
            { id: 'W_AK47', name: 'AK-47', isGroup: true, img: 'static/images/ak47_cover.png', items: generateSkinVariations('AK47', 150) },
            { id: 'W_M4A4', name: 'M4A4', isGroup: true, img: 'static/images/m4a4_cover.png', items: generateSkinVariations('M4A4', 120) },
            { id: 'W_M4A1S', name: 'M4A1-S', isGroup: true, img: 'static/images/m4a1s_cover.png', items: generateSkinVariations('M4A1S', 130) },
            { id: 'W_AUG', name: 'AUG', isGroup: true, img: 'static/images/aug_cover.png', items: generateSkinVariations('AUG', 40) },
            { id: 'W_AWP', name: 'AWP', isGroup: true, img: 'static/images/awp_cover.png', items: generateSkinVariations('AWP', 400) },
            { id: 'W_KNIFE', name: 'Knife', isGroup: true, img: 'static/images/knife_cover.png', items: generateSkinVariations('Knife', 800) },
        ]
    }
};

// Генератор фейковых вариаций для подарков (цена в TON)
function generateGiftVariations(baseName, basePriceTon) {
    let vars = [];
    const styles = ['Classic', 'Gold', 'Neon', 'Retro', 'Dark'];
    for(let i=0; i<5; i++) {
        vars.push({
            id: `G_${baseName.toUpperCase()}_${i}`,
            name: `${baseName} ${styles[i]}`,
            // Цена в ТОН, чуть отличается для разных стилей
            priceTon: basePriceTon * (1 + i * 0.2), 
            price: 0, // Будет пересчитано в USD
            // Имя картинки: g_snoop_0.png, g_snoop_1.png...
            img: `static/images/g_${baseName.toLowerCase()}_${i}.png` 
        });
    }
    return vars;
}

// Генератор фейковых вариаций для скинов
function generateSkinVariations(baseName, basePriceUsd) {
    let vars = [];
    const skins = ['Fade', 'Asiimov', 'Hyper Beast', 'Dragon', 'Elite'];
    for(let i=0; i<5; i++) {
        vars.push({
            id: `S_${baseName.toUpperCase()}_${i}`,
            name: `${baseName} ${skins[i]}`,
            price: basePriceUsd * (1 + Math.random()), // Случайная цена
            img: `static/images/s_${baseName.toLowerCase()}_${i}.png`
        });
    }
    return vars;
}

const RATES = { usd_kzt: 492, usd_jpy: 151, kzt_jpy: 0.3 };
let currentModalAsset = null;
let currentRotation = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/get_state')
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                DATABASE.portfolio.usd = data.usd || 0;
                DATABASE.portfolio.kzt = data.kzt || 0;
                DATABASE.portfolio.jpy = data.jpy || 0;
                DATABASE.portfolio.deposit = data.deposit || 0;
                DATABASE.portfolio.assets = data.assets || {};
            }
            updateUI();
        })
        .catch(err => console.error("Ошибка:", err));

    // Обновляем реальные цены крипты сразу
    fetchRealCryptoPrices();
    
    // Интервалы
    setInterval(simulateMarket, 3000); // Симуляция для акций/скинов
    setInterval(fetchRealCryptoPrices, 60000); // Реальные цены крипты раз в минуту
});

// === ФУНКЦИЯ ПОЛУЧЕНИЯ РЕАЛЬНЫХ ЦЕН (CoinGecko) ===
function fetchRealCryptoPrices() {
    // Собираем ID для API
    const ids = DATABASE.market.crypto.map(c => c.apiId).join(',');
    
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
        .then(res => res.json())
        .then(data => {
            DATABASE.market.crypto.forEach(coin => {
                if(data[coin.apiId]) {
                    coin.price = data[coin.apiId].usd;
                    
                    // Обновляем цену ТОН в базе, чтобы подарки пересчитались
                    if(coin.id === 'TON') DATABASE.tonPrice = coin.price;
                }
            });
            updateUI();
        })
        .catch(e => console.log('Ошибка API крипты (лимит запросов):', e));
}

function showScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach(el => el.classList.remove('active'));
    
    if (['screen-stocks', 'screen-crypto', 'screen-metals', 'screen-gifts', 'screen-skins'].includes(screenId)) {
        const type = screenId.replace('screen-', '');
        renderAssetList(type); // Рисуем первый уровень (категории)
        document.getElementById('screen-list-view').classList.add('active');
    } else {
        document.getElementById(screenId).classList.add('active');
        if (screenId === 'screen-game-main') updateAllAssetsList();
        if (screenId === 'screen-accounts') updateAccountsUI();
        if (screenId === 'screen-roulette') {
            document.getElementById('roulette-balance').innerText = formatUSD(DATABASE.portfolio.usd);
            document.getElementById('roulette-result').innerText = '';
        }
    }
}

// === УМНАЯ ОТРИСОВКА СПИСКА (ПОДДЕРЖКА ПАПОК) ===
function renderAssetList(type, parentId = null) {
    const container = document.getElementById('category-list-container');
    container.innerHTML = '';
    
    const titles = { stocks: 'АКЦИИ', crypto: 'КРИПТА', metals: 'МЕТАЛЛЫ', gifts: 'ПОДАРКИ', skins: 'СКИНЫ CS2' };
    
    let itemsToRender = [];
    let isSubFolder = false;

    // Если это вложенный уровень (мы нажали на группу)
    if (parentId) {
        // Ищем родителя в gifts или skins
        const parent = DATABASE.market[type].find(p => p.id === parentId);
        if (parent && parent.items) {
            itemsToRender = parent.items;
            document.getElementById('list-view-title').innerText = parent.name;
            isSubFolder = true;
            
            // Добавляем кнопку "Назад в категории"
            container.innerHTML += `
                <div class="asset-list-item" onclick="renderAssetList('${type}')" style="background:#eee; justify-content:center;">
                    <strong>⬅ Назад к списку</strong>
                </div>
            `;
        }
    } else {
        // Обычный уровень
        itemsToRender = DATABASE.market[type];
        document.getElementById('list-view-title').innerText = titles[type];
    }

    itemsToRender.forEach(asset => {
        let priceDisplay = '';
        let clickAction = '';
        let changeHtml = '';

        if (asset.isGroup) {
            // Это папка (AK-47, Snoop Gift)
            priceDisplay = '<small>Коллекция</small>';
            clickAction = `renderAssetList('${type}', '${asset.id}')`;
            changeHtml = '<span style="color:#777">ᐳ</span>';
        } else {
            // Это конкретный товар
            // Если это подарок, считаем цену в USD через TON
            if (asset.priceTon) {
                asset.price = asset.priceTon * DATABASE.tonPrice;
                priceDisplay = `<small>${asset.priceTon.toFixed(2)} TON ($${asset.price.toFixed(0)})</small>`;
            } else {
                priceDisplay = `<small>${formatUSD(asset.price)}</small>`;
            }

            clickAction = `openModal('${type}', '${asset.id}', '${parentId || ''}')`;
            
            // Кнопка графика (только для Акций и Крипты)
            let chartBtn = '';
            if (type === 'stocks' || type === 'crypto' || type === 'metals') {
               changeHtml = `<button onclick="event.stopPropagation(); showChart('${asset.symbol}')" style="padding:5px 10px; border-radius:5px; border:none; background:#007aff; color:white; cursor:pointer;">📈</button>`;
            } else {
               // Рандом изменение цены для скинов
               const change = asset.lastChange || 0;
               const colorClass = change >= 0 ? 'income-color' : 'expense-color';
               changeHtml = `<span class="${colorClass}">${change.toFixed(2)}%</span>`;
            }
        }

        const html = `
            <div class="asset-list-item" onclick="${clickAction}">
                <img src="${asset.img}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2748/2748558.png'">
                <div class="asset-list-details">
                    <span>${asset.name}</span>
                    ${priceDisplay}
                </div>
                <div class="asset-list-price">
                    ${changeHtml}
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function simulateMarket() {
    // 1. АКЦИИ И МЕТАЛЛЫ (Симуляция)
    ['stocks', 'metals'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => {
            // Легкое колебание цены (+- 1.5%)
            const change = 1 + (Math.random() - 0.5) * 0.015;
            asset.price = Math.max(0.1, asset.price * change);
            asset.lastChange = (change - 1) * 100;
        });
    });

    // 2. КРИПТА (Живой эффект на базе реальной цены)
    // Мы не долбим API каждую секунду, а делаем микро-колебания вокруг последней скачанной цены
    DATABASE.market.crypto.forEach(coin => {
        // Колебание +- 0.5% (более волатильно)
        const volatility = 0.005; 
        const change = 1 + (Math.random() - 0.5) * volatility;
        
        // Применяем изменение
        coin.price = coin.price * change;
        
        // Считаем "изменение за 24ч" (фейковое для красоты, или накапливаем)
        // Для простоты показываем мгновенное изменение от предыдущего тика
        coin.lastChange = (change - 1) * 100;

        // Если это TON, обновляем глобальный курс для подарков
        if(coin.id === 'TON') DATABASE.tonPrice = coin.price;
    });

    // 3. СКИНЫ (Редкое изменение)
    DATABASE.market.skins.forEach(group => {
        group.items.forEach(skin => {
             // 20% шанс, что цена изменится
            if(Math.random() > 0.8) {
                const change = 1 + (Math.random() - 0.5) * 0.05;
                skin.price = Math.max(1, skin.price * change);
                skin.lastChange = (change - 1) * 100;
            }
        });
    });

    // 4. ПОДАРКИ (Зависят от TON + свой хайп)
    DATABASE.market.gifts.forEach(group => {
        group.items.forEach(gift => {
             // Иногда цена в TON тоже скачет (хайп)
             if(Math.random() > 0.9) {
                gift.priceTon = gift.priceTon * (1 + (Math.random() - 0.5) * 0.02);
             }
             // Главная цена в USD пересчитывается от живого курса TON
             gift.price = gift.priceTon * DATABASE.tonPrice;
        });
    });
    
    // Начисление процентов по депозиту
    if (DATABASE.portfolio.deposit > 0) {
        DATABASE.portfolio.usd += DATABASE.portfolio.deposit * 0.000001;
    }

    saveData();
    
    // ВАЖНО: Обновляем интерфейс, если мы не в рулетке
    if(!document.getElementById('screen-roulette').classList.contains('active')) {
        updateUI();
    }
}

function updateUI() {
    let total = DATABASE.portfolio.usd + DATABASE.portfolio.deposit;
    
    // Считаем общую стоимость (нужно проходить и по вложенным спискам)
    // Простой проход по всем категориям
    // ...Для оптимизации хакатона считаем по сохраненному словарю assets
    // Но нам нужны актуальные цены.
    
    // Упрощение: покажем кеш + депозит. Пересчет активов сложнее из-за вложенности.
    // Для Тотала сделаем приблизительно по активам игрока
    for (const [id, qty] of Object.entries(DATABASE.portfolio.assets)) {
        let assetPrice = 0;
        // Ищем актив везде
        // 1. Плоские списки
        ['stocks', 'crypto', 'metals'].forEach(cat => {
            const found = DATABASE.market[cat].find(a => a.id === id);
            if(found) assetPrice = found.price;
        });
        // 2. Вложенные
        ['gifts', 'skins'].forEach(cat => {
            DATABASE.market[cat].forEach(group => {
                const found = group.items.find(a => a.id === id);
                if(found) assetPrice = found.price;
            });
        });
        
        total += qty * assetPrice;
    }

    document.getElementById('total-capital-display').innerText = formatUSD(total);
    document.getElementById('deposit-val-display').innerText = formatUSD(DATABASE.portfolio.deposit);
    
    if(document.getElementById('screen-game-main').classList.contains('active')) {
        updateAllAssetsList();
    }
}

// Поиск актива для модалки по всем спискам
function findAssetById(type, id, parentId) {
    if (!parentId && (type === 'stocks' || type === 'crypto' || type === 'metals')) {
        return DATABASE.market[type].find(a => a.id === id);
    }
    // Если вложенный
    const group = DATABASE.market[type].find(g => g.id === parentId);
    if(group) return group.items.find(i => i.id === id);
    
    // fallback поиск (медленный, но надежный)
    let found = null;
    if(DATABASE.market[type]) {
        DATABASE.market[type].forEach(item => {
            if(item.id === id) found = item;
            if(item.items) {
                const sub = item.items.find(s => s.id === id);
                if(sub) found = sub;
            }
        });
    }
    return found;
}

function openModal(type, id, parentId) {
    const asset = findAssetById(type, id, parentId);
    if(!asset) return;

    currentModalAsset = asset;
    
    document.getElementById('m-name').innerText = asset.name;
    document.getElementById('m-price').innerText = formatUSD(asset.price);
    
    const qty = DATABASE.portfolio.assets[id] || 0;
    document.getElementById('m-owned').innerText = qty.toFixed(4);
    document.getElementById('m-dynamic').innerText = ''; // Очистим проценты в модалке
    
    document.getElementById('trade-modal').style.display = 'grid';
}

function closeModal() {
    document.getElementById('trade-modal').style.display = 'none';
    document.getElementById('m-amount').value = '';
}

function tradeAction(action) {
    const amount = parseFloat(document.getElementById('m-amount').value);
    if (!amount || amount <= 0) return alert('Введите число');
    
    const totalCost = amount * currentModalAsset.price;
    
    if (action === 'buy') {
        if (DATABASE.portfolio.usd >= totalCost) {
            DATABASE.portfolio.usd -= totalCost;
            if (!DATABASE.portfolio.assets[currentModalAsset.id]) DATABASE.portfolio.assets[currentModalAsset.id] = 0;
            DATABASE.portfolio.assets[currentModalAsset.id] += amount;
            alert('Куплено!');
            closeModal();
        } else {
            alert('Нет денег (USD)!');
        }
    } else {
        const currentQty = DATABASE.portfolio.assets[currentModalAsset.id] || 0;
        if (currentQty >= amount) {
            DATABASE.portfolio.assets[currentModalAsset.id] -= amount;
            DATABASE.portfolio.usd += totalCost;
            alert('Продано!');
            closeModal();
        } else {
            alert('Недостаточно активов!');
        }
    }
    saveData();
    updateUI();
}

// === ГРАФИКИ TRADINGVIEW ===
function showChart(symbol) {
    document.getElementById('chart-modal').style.display = 'block';
    
    new TradingView.widget({
        "width": "100%",
        "height": "100%",
        "symbol": symbol, // Символ передается из JSON (напр. NASDAQ:AAPL)
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "ru",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": false,
        "container_id": "tradingview_widget"
    });
}

function closeChart() {
    document.getElementById('chart-modal').style.display = 'none';
    document.getElementById('tradingview_widget').innerHTML = ''; // Очистка
}

// Обновление списка на главной (Показываем все активы в кучу)
function updateAllAssetsList() {
    const container = document.getElementById('all-assets-list');
    container.innerHTML = '';
    
    addAssetRow(container, 'USD Balance', DATABASE.portfolio.usd, 'static/images/cash.png', true);
    if(DATABASE.portfolio.deposit > 0) addAssetRow(container, 'Deposit', DATABASE.portfolio.deposit, 'static/images/bank.png', true);

    // Проходим по всем возможным активам и ищем, есть ли они у юзера
    // Сначала плоские списки
    ['stocks', 'crypto', 'metals'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => checkAndRenderAsset(asset, container));
    });
    // Потом вложенные
    ['gifts', 'skins'].forEach(cat => {
        DATABASE.market[cat].forEach(group => {
            group.items.forEach(asset => checkAndRenderAsset(asset, container));
        });
    });
}

function checkAndRenderAsset(asset, container) {
    const qty = DATABASE.portfolio.assets[asset.id] || 0;
    if (qty > 0.0001) {
        const totalVal = qty * asset.price;
        const html = `
            <div class="asset-list-item">
                <img src="${asset.img}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2748/2748558.png'">
                <div class="asset-list-details">
                    <span>${asset.name}</span>
                    <small>${qty.toFixed(4)} шт.</small>
                </div>
                <div class="asset-list-price">
                    <strong>${formatUSD(totalVal)}</strong>
                </div>
            </div>
        `;
        container.innerHTML += html;
    }
}

function addAssetRow(container, name, value, img, isMoney) {
    container.innerHTML += `
        <div class="asset-list-item">
            <img src="${img}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'">
            <div class="asset-list-details">
                <span>${name}</span>
                <small>${isMoney ? 'Наличные' : ''}</small>
            </div>
            <div class="asset-list-price">
                <strong>${formatUSD(value)}</strong>
            </div>
        </div>
    `;
}

// Стандартные функции (форматирование, сохранение, рулетка, конвертация) остаются
function formatUSD(num) {
    const number = typeof num === 'number' ? num : parseFloat(num);
    return '$ ' + number.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function saveData() {
    localStorage.setItem('finGameData', JSON.stringify(DATABASE.portfolio));
    fetch('/api/save_game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(DATABASE.portfolio)
    }).catch(err => console.error('Save error:', err));
}

function loadLeaderboard() {
    showScreen('screen-rating'); 
    const container = document.getElementById('leaderboard-list');
    container.innerHTML = '<p style="text-align:center; padding:20px;">Загрузка списка...</p>';

    fetch('/api/leaderboard')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = '';
            if (data.length === 0) {
                container.innerHTML = '<p>Пока нет лидеров</p>';
                return;
            }
            document.getElementById('top-player-name').innerText = data[0].username;
            document.getElementById('top-player-cap').innerText = formatUSD(data[0].capital);

            data.forEach((player, index) => {
                let rankColor = '#ccc';
                if (index === 0) rankColor = '#f1c40f';
                if (index === 1) rankColor = '#bdc3c7';
                if (index === 2) rankColor = '#cd7f32';

                const rankHtml = `<div style="width: 30px; height: 30px; background: ${rankColor}; color: white; border-radius: 50%; display: grid; place-items: center; font-weight: bold; margin-right: 15px;">${index + 1}</div>`;

                const itemHtml = `
                    <div class="asset-list-item" style="cursor: default;">
                        ${rankHtml}
                        <div class="asset-list-details">
                            <span>${player.username}</span>
                        </div>
                        <div class="asset-list-price">
                            <strong>${formatUSD(player.capital)}</strong>
                        </div>
                    </div>
                `;
                container.innerHTML += itemHtml;
            });
        })
        .catch(err => {
            console.error(err);
            container.innerHTML = '<p style="color:red; text-align:center;">Ошибка загрузки</p>';
        });
}

// === ОБНОВЛЕННАЯ РУЛЕТКА С НАСТРОЙКОЙ ШАНСОВ ===
function spinRoulette() {
    const wheel = document.getElementById('wheel');
    const resultDiv = document.getElementById('roulette-result');
    const btn = document.querySelector('.spin-btn');
    const balanceDisplay = document.getElementById('roulette-balance');
    const cost = 2000; // Цена прокрута

    // 1. Проверка баланса
    if (DATABASE.portfolio.usd < cost) {
        resultDiv.innerText = "Недостаточно средств ($2000)!";
        resultDiv.style.color = "red";
        return;
    }

    // 2. Списание средств
    DATABASE.portfolio.usd -= cost;
    saveData();
    // Обновляем баланс в UI
    if(balanceDisplay) balanceDisplay.innerText = formatUSD(DATABASE.portfolio.usd);
    updateUI(); 

    btn.disabled = true;
    resultDiv.style.color = "#333";
    resultDiv.innerText = "Вращение...";

    // === НАСТРОЙКА ШАНСОВ (СУММА НЕ ОБЯЗАТЕЛЬНО 100, СКРИПТ САМ ПОСЧИТАЕТ) ===
    // Индексы секторов:
    // 0: Голубой (100$)
    // 1: Красный (50 000$) - ДЖЕКПОТ
    // 2: Зеленый (10 000$)
    // 3: Желтый (5 000$)
    // 4: Фиолетовый (2 000$) - Возврат
    // 5: Оранжевый (1 000$)
    // 6: Бирюзовый (500$)
    // 7: Темный (0$)
    
    const chances = [
        20, // 0: Голубой (Потеря) - 20 "билетов" из 100
        1,  // 1: Красный (Джекпот) - Шанс очень низкий (1)
        3,  // 2: Зеленый (10к) - Редко
        6,  // 3: Желтый (5к)
        10, // 4: Фиолетовый (Возврат)
        20, // 5: Оранжевый (Потеря)
        20, // 6: Бирюзовый (Потеря)
        20  // 7: Темный (Полный ноль)
    ];
    // Сейчас суммарный вес = 100. Шанс джекпота = 1/100 (1%).

    // 3. Алгоритм выбора победителя
    let totalWeight = chances.reduce((a, b) => a + b, 0);
    let randomVal = Math.random() * totalWeight;
    let winningIndex = 0;
    
    for (let i = 0; i < chances.length; i++) {
        if (randomVal < chances[i]) {
            winningIndex = i;
            break;
        }
        randomVal -= chances[i];
    }

    // 4. Расчет угла остановки
    // Сектор i находится в диапазоне градусов: [i*45, (i+1)*45]
    // Чтобы сектор i оказался наверху (под стрелкой), колесо должно повернуться так,
    // чтобы этот сектор "уехал" наверх. 
    // Формула для центра сектора наверху: 360 - (i * 45 + 22.5)
    // Добавим небольшой рандом внутри сектора (+- 15 градусов), чтобы не останавливалось всегда в центре
    
    const sectorCenter = 360 - (winningIndex * 45 + 22.5);
    const randomOffset = (Math.random() - 0.5) * 30; // +/- 15 градусов разброс
    const targetAngle = sectorCenter + randomOffset;
    
    const extraSpins = 360 * 5; // Минимум 5 оборотов
    
    // Нужно учесть текущий поворот (currentRotation), чтобы крутилось дальше, а не назад
    // Вычисляем следующее положение, кратное 360 + targetAngle
    const currentMod = currentRotation % 360;
    const distance = (targetAngle - currentMod + 360) % 360; // Сколько докрутить до цели
    
    currentRotation += distance + extraSpins;
    
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // 5. Определение результата (через 4 секунды)
    setTimeout(() => {
        // Значения призов (должны совпадать с индексами выше)
        const segmentValues = [
            { val: 100 },       // 0
            { val: 50000 },     // 1
            { val: 10000 },     // 2
            { val: 5000 },      // 3
            { val: 2000 },      // 4
            { val: 1000 },      // 5
            { val: 500 },       // 6
            { val: 0 }          // 7
        ];

        const wonPrize = segmentValues[winningIndex];

        // Начисление
        DATABASE.portfolio.usd += wonPrize.val;
        
        // Визуальный результат
        if (wonPrize.val > cost) {
            resultDiv.style.color = "#27ae60"; // Зеленый
            if (wonPrize.val >= 10000) {
                 resultDiv.innerText = `ДЖЕКПОТ! +${formatUSD(wonPrize.val)}!`;
            } else {
                 resultDiv.innerText = `Победа! +${formatUSD(wonPrize.val)}!`;
            }
        } else if (wonPrize.val === cost) {
            resultDiv.style.color = "#007aff"; // Синий
            resultDiv.innerText = `Возврат ставки: ${formatUSD(wonPrize.val)}.`;
        }
         else {
            resultDiv.style.color = "#e74c3c"; // Красный
            resultDiv.innerText = `Выпало: ${formatUSD(wonPrize.val)}. (Потеря: ${formatUSD(cost - wonPrize.val)})`;
        }

        saveData();
        if(balanceDisplay) balanceDisplay.innerText = formatUSD(DATABASE.portfolio.usd);
        updateUI(); 
        
        btn.disabled = false;
    }, 4000);
}

function depositAction(type) {
    const val = parseFloat(document.getElementById('deposit-input').value);
    if (!val || val <= 0) return;

    if (type === 'in') {
        if (DATABASE.portfolio.usd >= val) {
            DATABASE.portfolio.usd -= val;
            DATABASE.portfolio.deposit += val;
        } else alert('Мало денег');
    } else {
        if (DATABASE.portfolio.deposit >= val) {
            DATABASE.portfolio.deposit -= val;
            DATABASE.portfolio.usd += val;
        } else alert('Мало на вкладе');
    }
    document.getElementById('deposit-input').value = '';
    saveData();
    updateUI();
}

function updateAccountsUI() {
    document.getElementById('acc-usd').innerText = formatUSD(DATABASE.portfolio.usd);
    document.getElementById('acc-kzt').innerText = `₸ ${DATABASE.portfolio.kzt.toFixed(0)}`;
    document.getElementById('acc-jpy').innerText = `¥ ${DATABASE.portfolio.jpy.toFixed(0)}`;
}

function convertCurrency() {
    const from = document.getElementById('ex-from').value;
    const to = document.getElementById('ex-to').value;
    const amount = parseFloat(document.getElementById('ex-amount').value);
    
    if (!amount || amount <= 0) return alert('Введите сумму');
    if (from === to) return alert('Выберите разные валюты');
    
    const balanceKey = from; 
    const currentBalance = DATABASE.portfolio[balanceKey];
    
    if (currentBalance < amount) return alert('Недостаточно средств');
    
    let rate = 1;
    if (from === 'usd' && to === 'kzt') rate = RATES.usd_kzt;
    if (from === 'usd' && to === 'jpy') rate = RATES.usd_jpy;
    if (from === 'kzt' && to === 'usd') rate = 1 / RATES.usd_kzt;
    if (from === 'jpy' && to === 'usd') rate = 1 / RATES.usd_jpy;
    
    const finalAmount = amount * rate;
    
    DATABASE.portfolio[from] -= amount;
    DATABASE.portfolio[to] += finalAmount;
    
    alert(`Обменяли ${amount} ${from.toUpperCase()} на ${finalAmount.toFixed(2)} ${to.toUpperCase()}`);
    saveData();
    updateAccountsUI();
}