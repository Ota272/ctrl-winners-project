const DATABASE = {
    portfolio: {
        usd: 100000,
        kzt: 0,
        jpy: 0,
        deposit: 0,
        assets: {}
    },
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
        // === ТЕПЕРЬ ТУТ МОЖНО СТАВИТЬ ТОЧНЫЕ ЦЕНЫ ДЛЯ КАЖДОГО СКИНА ===
        skins: [
            { 
                id: 'W_GLOCK', 
                name: 'Glock-18', 
                isGroup: true, 
                img: 'static/images/glock_cover.png', 
                items: generateSpecificSkins('Glock', [
                    { name: 'Glock-18 | Королевский легион', price: 10000.00 },
                    { name: 'Glock-18 | Лунная ночь', price: 500.00 },
                    { name: 'Glock-18 | Татуировка дракона', price: 100000.00 },
                    { name: 'Glock-18 | Градиент', price: 500000.00 },
                    { name: 'Glock-18 | Дух воды', price: 24000.00 }
                ]) 
            },
            { 
                id: 'W_USP', 
                name: 'USP-S', 
                isGroup: true, 
                img: 'static/images/usp_cover.png', 
                items: generateSpecificSkins('USP', [
                    { name: 'USP-S | Предатель', price: 25.00 },
                    { name: 'USP-S | Поток информации', price: 110.00 },
                    { name: 'USP-S | Зубоскал', price: 12.00 },
                    { name: 'USP-S | Закрученный', price: 2.50 },
                    { name: 'USP-S | Извилины', price: 18.00 }
                ]) 
            },
            { 
                id: 'W_DEAGLE', 
                name: 'Desert Eagle', 
                isGroup: true, 
                img: 'static/images/deagle_cover.png', 
                items: generateSpecificSkins('Deagle', [
                    { name: 'Desert Eagle | Mecha Industries', price: 7.00 },
                    { name: 'Desert Eagle | Kumicho Dragon', price: 15.00 },
                    { name: 'Desert Eagle | Blaze', price: 650.00 },
                    { name: 'Desert Eagle | Printstream', price: 85.00 },
                    { name: 'Desert Eagle | Code Red', price: 30.00 }
                ]) 
            },
            { 
                id: 'W_R8', 
                name: 'Revolver R8', 
                isGroup: true, 
                img: 'static/images/r8_cover.png', 
                items: generateSpecificSkins('R8', [
                    { name: 'R8 | Градиент', price: 12.00 },
                    { name: 'R8 | Реликвия', price: 4.00 },
                    { name: 'R8 | Безумная восьмёрка', price: 2.00 },
                    { name: 'R8 | Пламя', price: 35.00 },
                    { name: 'R8 | Кровавая паутина', price: 6.00 }
                ]) 
            },
            { 
                id: 'W_AK47', 
                name: 'AK-47', 
                isGroup: true, 
                img: 'static/images/ak47_cover.png', 
                items: generateSpecificSkins('AK47', [
                    { name: 'AK-47 | Elite Build', price: 2.50 },
                    { name: 'AK-47 | Asiimov', price: 35.00 },
                    { name: 'AK-47 | Crossfade', price: 85.00 }, // X-Ray?
                    { name: 'AK-47 | Bloodsport', price: 110.00 },
                    { name: 'AK-47 | Inheritance', price: 180.00 }
                ]) 
            },
            { 
                id: 'W_M4A4', 
                name: 'M4A4', 
                isGroup: true, 
                img: 'static/images/m4a4_cover.png', 
                items: generateSpecificSkins('M4A4', [
                    { name: 'M4A4 | Азимов', price: 140.00 },
                    { name: 'M4A4 | 龍王 (Dragon King)', price: 15.00 },
                    { name: 'M4A4 | Вой', price: 4500.00 },
                    { name: 'M4A4 | Турбина', price: 5.00 },
                    { name: 'M4A4 | Око Гора', price: 600.00 }
                ]) 
            },
            { 
                id: 'W_M4A1S', 
                name: 'M4A1-S', 
                isGroup: true, 
                img: 'static/images/m4a1s_cover.png', 
                items: generateSpecificSkins('M4A1S', [
                    { name: 'M4A1-S | Скоростной зверь', price: 45.00 },
                    { name: 'M4A1-S | Градиент', price: 900.00 },
                    { name: 'M4A1-S | Чёрный лотос', price: 25.00 },
                    { name: 'M4A1-S | Поток информации', price: 220.00 },
                    { name: 'M4A1-S | Синий фосфор', price: 550.00 }
                ]) 
            },
            { 
                id: 'W_AUG', 
                name: 'AUG', 
                isGroup: true, 
                img: 'static/images/aug_cover.png', 
                items: generateSpecificSkins('AUG', [
                    { name: 'AUG | Daedalus', price: 0.50 },
                    { name: 'AUG | Eye of Zapems', price: 250.00 }, // Akihabara?
                    { name: 'AUG | Surveillance', price: 5.00 },
                    { name: 'AUG | Aristocrat', price: 2.00 },
                    { name: 'AUG | Chameleon', price: 7.00 }
                ]) 
            },
            { 
                id: 'W_AWP', 
                name: 'AWP', 
                isGroup: true, 
                img: 'static/images/awp_cover.png', 
                items: generateSpecificSkins('AWP', [
                    { name: 'AWP | Elite Build', price: 10.00 },
                    { name: 'AWP | Dragon Lore', price: 10000.00 },
                    { name: 'AWP | Hyper Beast', price: 40.00 },
                    { name: 'AWP | Asiimov', price: 90.00 },
                    { name: 'AWP | Fade', price: 1200.00 }
                ]) 
            },
            { 
                id: 'W_KNIFE', 
                name: 'Knife', 
                isGroup: true, 
                img: 'static/images/knife_cover.png', 
                items: generateSpecificSkins('Knife', [
                    { name: 'Butterfly | Marble Fade', price: 1800.00 },
                    { name: 'Karambit | Gamma Doppler', price: 1400.00 },
                    { name: 'Skeleton | Fade', price: 1600.00 },
                    { name: 'Kukri | Fade', price: 600.00 },
                    { name: 'M9 Bayonet | Gamma Doppler', price: 1300.00 }
                ]) 
            },
        ]
    }
};

// Функция для ПОДАРКОВ (автоматическая)
function generateGiftVariations(baseName, basePriceTon) {
    let vars = [];
    const styles = ['Classic', 'Gold', 'Neon', 'Retro', 'Dark'];
    for(let i=0; i<5; i++) {
        vars.push({
            id: `G_${baseName.toUpperCase()}_${i}`,
            name: `${baseName} ${styles[i]}`,
            priceTon: basePriceTon * (1 + i * 0.2), 
            price: 0, 
            img: `static/images/g_${baseName.toLowerCase()}_${i}.png` 
        });
    }
    return vars;
}

// === НОВАЯ ФУНКЦИЯ ДЛЯ СКИНОВ (С ТОЧНЫМИ ЦЕНАМИ) ===
function generateSpecificSkins(baseImgName, skinsList) {
    let vars = [];
    // skinsList — это массив объектов: [{name: '...', price: 123}, ...]
    for(let i = 0; i < skinsList.length; i++) {
        vars.push({
            id: `S_${baseImgName.toUpperCase()}_${i}`,
            name: skinsList[i].name, 
            price: skinsList[i].price, // Берем точную цену, которую ты указал
            img: `static/images/s_${baseImgName.toLowerCase()}_${i}.png` // Картинки: s_glock_0.png, s_glock_1.png...
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

    fetchRealCryptoPrices();
    
    setInterval(simulateMarket, 3000); 
    setInterval(fetchRealCryptoPrices, 60000); 
});

function fetchRealCryptoPrices() {
    const ids = DATABASE.market.crypto.map(c => c.apiId).join(',');
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
        .then(res => res.json())
        .then(data => {
            DATABASE.market.crypto.forEach(coin => {
                if(data[coin.apiId]) {
                    coin.price = data[coin.apiId].usd;
                    if(coin.id === 'TON') DATABASE.tonPrice = coin.price;
                }
            });
            updateUI();
        })
        .catch(e => console.log('Ошибка API крипты:', e));
}

// === УНИВЕРСАЛЬНАЯ НАВИГАЦИЯ (ИСПРАВЛЕННАЯ) ===

function showScreen(screenId) {
    // 1. Сначала скрываем ВООБЩЕ ВСЕ экраны
    // Мы ищем их и по классу .game-screen, и по ID старых экранов
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(screen => {
        screen.style.display = 'none';      // Прячем через CSS
        screen.classList.remove('active');  // Убираем класс активности
    });

    // Также скрываем старый экран списков (если он открыт)
    const listView = document.getElementById('screen-list-view');
    if (listView) {
        listView.style.display = 'none';
        listView.classList.remove('active');
    }

    // 2. Логика для экранов активов (Акции, Крипта и т.д.)
    if (['screen-stocks', 'screen-crypto', 'screen-metals', 'screen-gifts', 'screen-skins'].includes(screenId)) {
        const type = screenId.replace('screen-', '');
        renderAssetList(type); 
        if (listView) {
            listView.style.display = 'block'; // Показываем экран списков
            listView.classList.add('active');
        }
    } 
    // 3. Логика для обычных экранов (Главная, Рейтинг, ИИ, Счета)
    else {
        const activeScreen = document.getElementById(screenId);
        if (activeScreen) {
            activeScreen.style.display = 'block'; // ПРИНУДИТЕЛЬНО показываем
            activeScreen.classList.add('active');
            
            // Специальная логика для конкретных экранов
            if (screenId === 'screen-game-main') updateAllAssetsList();
            if (screenId === 'screen-accounts') updateAccountsUI();
            if (screenId === 'screen-stats') {
                renderAnalytics();
            }
            if (screenId === 'screen-roulette') {
                const balEl = document.getElementById('roulette-balance');
                if(balEl) balEl.innerText = formatUSD(DATABASE.portfolio.usd);
                const resEl = document.getElementById('roulette-result');
                if(resEl) resEl.innerText = '';
            }
            // Для экрана ИИ скроллим вниз при открытии
            if (screenId === 'screen-ai') {
                setTimeout(scrollToBottom, 100);
            }
        } else {
            console.error('Экран не найден:', screenId);
        }
    }

    // 4. Подсветка кнопки внизу
    updateTabButtons(screenId);
}

// Функция подсветки кнопок меню
function updateTabButtons(activeScreenId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        // Если в кнопке написано onclick="showScreen('screen-ai')" - делаем её активной
        const onClickText = btn.getAttribute('onclick');
        if (onClickText && onClickText.includes(activeScreenId)) {
            btn.classList.add('active');
        }
    });
}

function renderAssetList(type, parentId = null) {
    const container = document.getElementById('category-list-container');
    container.innerHTML = '';
    const titles = { stocks: 'АКЦИИ', crypto: 'КРИПТА', metals: 'МЕТАЛЛЫ', gifts: 'ПОДАРКИ', skins: 'СКИНЫ CS2' };
    let itemsToRender = [];

    if (parentId) {
        const parent = DATABASE.market[type].find(p => p.id === parentId);
        if (parent && parent.items) {
            itemsToRender = parent.items;
            document.getElementById('list-view-title').innerText = parent.name;
            container.innerHTML += `
                <div class="asset-list-item" onclick="renderAssetList('${type}')" style="background:#eee; justify-content:center;">
                    <strong>⬅ Назад к списку</strong>
                </div>
            `;
        }
    } else {
        itemsToRender = DATABASE.market[type];
        document.getElementById('list-view-title').innerText = titles[type];
    }

    itemsToRender.forEach(asset => {
        let priceDisplay = '';
        let clickAction = '';
        let changeHtml = '';

        if (asset.isGroup) {
            priceDisplay = '<small>Коллекция</small>';
            clickAction = `renderAssetList('${type}', '${asset.id}')`;
            changeHtml = '<span style="color:#777">ᐳ</span>';
        } else {
            if (asset.priceTon) {
                asset.price = asset.priceTon * DATABASE.tonPrice;
                priceDisplay = `<small>${asset.priceTon.toFixed(2)} TON ($${asset.price.toFixed(0)})</small>`;
            } else {
                priceDisplay = `<small>${formatUSD(asset.price)}</small>`;
            }
            clickAction = `openModal('${type}', '${asset.id}', '${parentId || ''}')`;
            if (type === 'stocks' || type === 'crypto' || type === 'metals') {
               changeHtml = `<button onclick="event.stopPropagation(); showChart('${asset.symbol}')" style="padding:5px 10px; border-radius:5px; border:none; background:#007aff; color:white; cursor:pointer;">📈</button>`;
            } else {
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
    ['stocks', 'metals'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => {
            const change = 1 + (Math.random() - 0.5) * 0.015;
            asset.price = Math.max(0.1, asset.price * change);
            asset.lastChange = (change - 1) * 100;
        });
    });
    DATABASE.market.crypto.forEach(coin => {
        const volatility = 0.005; 
        const change = 1 + (Math.random() - 0.5) * volatility;
        coin.price = coin.price * change;
        coin.lastChange = (change - 1) * 100;
        if(coin.id === 'TON') DATABASE.tonPrice = coin.price;
    });
    // Скины тоже немного меняются в цене
    DATABASE.market.skins.forEach(group => {
        group.items.forEach(skin => {
            if(Math.random() > 0.8) {
                const change = 1 + (Math.random() - 0.5) * 0.05;
                skin.price = Math.max(0.1, skin.price * change);
                skin.lastChange = (change - 1) * 100;
            }
        });
    });
    DATABASE.market.gifts.forEach(group => {
        group.items.forEach(gift => {
             if(Math.random() > 0.9) {
                gift.priceTon = gift.priceTon * (1 + (Math.random() - 0.5) * 0.02);
             }
             gift.price = gift.priceTon * DATABASE.tonPrice;
        });
    });
    if (DATABASE.portfolio.deposit > 0) {
        DATABASE.portfolio.usd += DATABASE.portfolio.deposit * 0.000001;
    }
    saveData();
    if(!document.getElementById('screen-roulette').classList.contains('active')) {
        updateUI();
    }
}

function updateUI() {
    let total = DATABASE.portfolio.usd + DATABASE.portfolio.deposit;
    for (const [id, qty] of Object.entries(DATABASE.portfolio.assets)) {
        let assetPrice = 0;
        ['stocks', 'crypto', 'metals'].forEach(cat => {
            const found = DATABASE.market[cat].find(a => a.id === id);
            if(found) assetPrice = found.price;
        });
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

function findAssetById(type, id, parentId) {
    if (!parentId && (type === 'stocks' || type === 'crypto' || type === 'metals')) {
        return DATABASE.market[type].find(a => a.id === id);
    }
    const group = DATABASE.market[type].find(g => g.id === parentId);
    if(group) return group.items.find(i => i.id === id);
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
    document.getElementById('m-dynamic').innerText = ''; 
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
            logTransaction('BUY', currentModalAsset.name, amount, currentModalAsset.price, totalCost);
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
            logTransaction('SELL', currentModalAsset.name, amount, currentModalAsset.price, totalCost);
            closeModal();
        } else {
            alert('Недостаточно активов!');
        }
    }
    saveData();
    updateUI();
}

function showChart(symbol) {
    document.getElementById('chart-modal').style.display = 'block';
    new TradingView.widget({
        "width": "100%",
        "height": "100%",
        "symbol": symbol,
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
    document.getElementById('tradingview_widget').innerHTML = '';
}

function updateAllAssetsList() {
    const container = document.getElementById('all-assets-list');
    container.innerHTML = '';
    addAssetRow(container, 'USD Balance', DATABASE.portfolio.usd, 'static/images/usdt.png', true);
    if(DATABASE.portfolio.deposit > 0) addAssetRow(container, 'Deposit', DATABASE.portfolio.deposit, 'static/images/bank.png', true);
    ['stocks', 'crypto', 'metals'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => checkAndRenderAsset(asset, container));
    });
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


function logTransaction(type, assetName, amount, price, total) {
    // Считаем текущий общий капитал для графика
    let currentCapital = DATABASE.portfolio.usd + DATABASE.portfolio.deposit;
    // (Тут можно добавить сложный пересчет всех активов, но для скорости берем кэш + примерную стоимость активов)
    // Упростим: просто передадим то, что есть в UI сейчас
    // Но лучше пересчитать:
    for (const [id, qty] of Object.entries(DATABASE.portfolio.assets)) {
         let asset = findAssetByIdInMarket(id); // нужна вспомогательная функция или перебор
         if(asset) currentCapital += qty * asset.price;
    }

    fetch('/api/log_action', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: type,
            asset: assetName,
            amount: amount,
            price: price,
            total: total,
            balance: currentCapital // Отправляем капитал
        })
    });
}

// Вспомогательная функция поиска (добавь если нет)
function findAssetByIdInMarket(id) {
    let found = null;
    ['stocks', 'crypto', 'metals'].forEach(cat => {
        if(!found) found = DATABASE.market[cat].find(a => a.id === id);
    });
    // ... поиск в скинах и подарках ...
    return found; 
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

function spinRoulette() {
    const wheel = document.getElementById('wheel');
    const resultDiv = document.getElementById('roulette-result');
    const btn = document.querySelector('.spin-btn');
    const balanceDisplay = document.getElementById('roulette-balance');
    const cost = 2000;
    if (DATABASE.portfolio.usd < cost) {
        resultDiv.innerText = "Недостаточно средств ($2000)!";
        resultDiv.style.color = "red";
        return;
    }
    DATABASE.portfolio.usd -= cost;
    saveData();
    if(balanceDisplay) balanceDisplay.innerText = formatUSD(DATABASE.portfolio.usd);
    updateUI(); 
    btn.disabled = true;
    resultDiv.style.color = "#333";
    resultDiv.innerText = "Вращение...";
    
    // НАСТРОЙКА ШАНСОВ
    const chances = [20, 1, 3, 6, 10, 20, 20, 20];
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
    const sectorCenter = 360 - (winningIndex * 45 + 22.5);
    const randomOffset = (Math.random() - 0.5) * 30; 
    const targetAngle = sectorCenter + randomOffset;
    const extraSpins = 360 * 5; 
    const currentMod = currentRotation % 360;
    const distance = (targetAngle - currentMod + 360) % 360; 
    currentRotation += distance + extraSpins;
    wheel.style.transform = `rotate(${currentRotation}deg)`;
    setTimeout(() => {
        const segmentValues = [{ val: 100 }, { val: 50000 }, { val: 10000 }, { val: 5000 }, { val: 2000 }, { val: 1000 }, { val: 500 }, { val: 0 }];
        const wonPrize = segmentValues[winningIndex];
        DATABASE.portfolio.usd += wonPrize.val;
        if (wonPrize.val > cost) {
            resultDiv.style.color = "#27ae60";
            if (wonPrize.val >= 10000) {
                 resultDiv.innerText = `ДЖЕКПОТ! +${formatUSD(wonPrize.val)}!`;
            } else {
                 resultDiv.innerText = `Победа! +${formatUSD(wonPrize.val)}!`;
            }
        } else if (wonPrize.val === cost) {
            resultDiv.style.color = "#007aff"; 
            resultDiv.innerText = `Возврат ставки: ${formatUSD(wonPrize.val)}.`;
        } else {
            resultDiv.style.color = "#e74c3c";
            resultDiv.innerText = `Выпало: ${formatUSD(wonPrize.val)}.`;
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

// === ЛОГИКА ИИ АССИСТЕНТА ===

// === УМНЫЙ ЧАТ С ИСТОРИЕЙ ===

// 1. Загрузка истории при запуске игры
document.addEventListener('DOMContentLoaded', () => {
    loadChatHistory();
});

function toggleAiChat() {
    const chatWindow = document.getElementById('aiChatWindow');
    
    // Переключаем класс .open для красивой анимации
    if (chatWindow.classList.contains('open')) {
        chatWindow.classList.remove('open');
        setTimeout(() => chatWindow.style.display = 'none', 300); // Ждем конца анимации
    } else {
        chatWindow.style.display = 'flex';
        // Небольшая задержка, чтобы анимация сработала
        setTimeout(() => chatWindow.classList.add('open'), 10);
        scrollToBottom();
    }
}

function handleAiEnter(event) {
    if (event.key === 'Enter') sendAiMessage();
}

async function sendAiMessage() {
    const input = document.getElementById('aiInput');
    const text = input.value.trim();
    if (!text) return;

    // 1. Очищаем поле
    input.value = '';

    // 2. Добавляем и СОХРАНЯЕМ сообщение юзера
    addMessageToChat(text, 'user');
    saveMessageToHistory(text, 'user');

    // 3. Показываем "печатает..."
    const loadingId = addMessageToChat('Анализирую рынок...', 'bot', true);

    try {
        // Данные для контекста ИИ
        const contextData = {
            usd: DATABASE.portfolio ? DATABASE.portfolio.usd : 0,
            assets: JSON.stringify(DATABASE.portfolio ? DATABASE.portfolio : {})
        };

        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, context: contextData })
        });

        const data = await response.json();

        // 4. Удаляем загрузку и показываем ответ
        removeMessage(loadingId);
        addMessageToChat(data.reply, 'bot');
        saveMessageToHistory(data.reply, 'bot'); // СОХРАНЯЕМ ответ бота

    } catch (error) {
        removeMessage(loadingId);
        addMessageToChat('Ошибка связи. Проверь интернет.', 'bot');
    }
}

// === ФУНКЦИИ ИСТОРИИ ===

function saveMessageToHistory(text, sender) {
    // Получаем текущую историю или создаем пустую
    let history = JSON.parse(localStorage.getItem('ai_chat_history')) || [];
    
    // Добавляем новое сообщение
    history.push({ text: text, sender: sender, time: new Date().toLocaleTimeString() });
    
    // Ограничим историю (например, последние 50 сообщений), чтобы не забивать память
    if (history.length > 50) history.shift();

    // Сохраняем обратно
    localStorage.setItem('ai_chat_history', JSON.stringify(history));
}

function loadChatHistory() {
    const history = JSON.parse(localStorage.getItem('ai_chat_history')) || [];
    const chatBox = document.getElementById('aiMessages');
    
    // Если история пустая, добавляем приветствие
    if (history.length === 0) {
        chatBox.innerHTML = '<div class="message bot">Привет! Я твой AI-брокер. Готов помочь поднять кэш! 📈</div>';
        return;
    }

    // Очищаем чат перед загрузкой (на всякий случай)
    chatBox.innerHTML = ''; 

    // Восстанавливаем сообщения
    history.forEach(msg => {
        addMessageToChat(msg.text, msg.sender);
    });
}

// Вспомогательные функции
function addMessageToChat(text, sender, isLoading = false) {
    const chatBox = document.getElementById('aiMessages');
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.innerText = text;
    
    if (isLoading) {
        div.style.fontStyle = 'italic';
        div.style.opacity = '0.7';
        div.id = 'loading-msg';
    }

    chatBox.appendChild(div);
    scrollToBottom();
    return div.id;
}

function removeMessage(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function scrollToBottom() {
    const chatBox = document.getElementById('aiMessages');
    chatBox.scrollTop = chatBox.scrollHeight;
}

let capitalChartInstance = null;
let assetsChartInstance = null;

function renderAnalytics() {
    // 1. Загружаем историю
    fetch('/api/history')
        .then(res => res.json())
        .then(history => {
            // А. Рендер списка
            const list = document.getElementById('history-list-container');
            list.innerHTML = '';
            
            // Данные для графика капитала
            let chartLabels = [];
            let chartData = [];
            let tradeCounts = {};

            history.forEach(row => {
                // Список
                let color = row.action_type === 'BUY' ? '#e74c3c' : '#2ecc71';
                let sign = row.action_type === 'BUY' ? '-' : '+';
                list.innerHTML += `
                    <div class="asset-list-item">
                        <div class="asset-list-details">
                            <span>${row.action_type === 'BUY' ? 'Купил' : 'Продал'} ${row.asset_name}</span>
                            <small>${row.timestamp}</small>
                        </div>
                        <div class="asset-list-price" style="color:${color}">
                            <strong>${sign}${formatUSD(row.total)}</strong>
                        </div>
                    </div>
                `;
                
                // Для графика (берем balance_snapshot)
                if (row.balance_snapshot) {
                    chartLabels.unshift(row.timestamp.split(' ')[1]); // Только время
                    chartData.unshift(row.balance_snapshot);
                }
                
                // Статистика
                if(!tradeCounts[row.asset_name]) tradeCounts[row.asset_name] = 0;
                tradeCounts[row.asset_name]++;
            });

            document.getElementById('stat-total-trades').innerText = history.length;
            
            // Находим любимый актив
            let fav = Object.keys(tradeCounts).reduce((a, b) => tradeCounts[a] > tradeCounts[b] ? a : b, '-');
            document.getElementById('stat-fav-asset').innerText = fav;

            // Б. Рисуем График Капитала (Line Chart)
            const ctxCap = document.getElementById('capitalChart').getContext('2d');
            if(capitalChartInstance) capitalChartInstance.destroy();
            
            capitalChartInstance = new Chart(ctxCap, {
                type: 'line',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'Капитал ($)',
                        data: chartData,
                        borderColor: '#0088cc',
                        backgroundColor: 'rgba(0, 136, 204, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: { responsive: true, plugins: { legend: {display: false} } }
            });
        });

    // 2. Рисуем Диаграмму Активов (Pie Chart)
    const ctxPie = document.getElementById('assetsChart').getContext('2d');
    if(assetsChartInstance) assetsChartInstance.destroy();
    
    // Собираем данные
    let labels = ['USD'];
    let data = [DATABASE.portfolio.usd];
    let colors = ['#2ecc71']; // Зеленый для кэша

    // Проходим по портфелю
    for (const [id, qty] of Object.entries(DATABASE.portfolio.assets)) {
        if (qty > 0) {
            // Упрощенный поиск имени и цены (нужно доработать поиск, если id сложный)
            // Для примера просто выводим ID
            let val = qty * 100; // ЗАГЛУШКА: Тут надо умножать на реальную цену asset.price
            // Найдем реальную цену:
             ['stocks', 'crypto', 'skins', 'gifts'].forEach(type => {
                 // ...тут логика поиска как в updateUI...
             });
             
            labels.push(id);
            data.push(val); // Тут должна быть реальная стоимость
            colors.push('#' + Math.floor(Math.random()*16777215).toString(16)); // Рандом цвет
        }
    }

    assetsChartInstance = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}