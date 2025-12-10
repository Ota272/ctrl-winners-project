const DATABASE = {
    portfolio: {
        usd: 100000,
        kzt: 0,
        jpy: 0,
        deposit: 0,
        assets: {}
    },
    market: {
        stocks: [
            { id: 'GOOG', name: 'Alphabet', price: 175.4, img: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' },
            { id: 'AAPL', name: 'Apple', price: 189.3, img: 'https://cdn-icons-png.flaticon.com/512/731/731985.png' },
            { id: 'TSLA', name: 'Tesla', price: 210.5, img: 'https://cdn-icons-png.flaticon.com/512/5969/5969269.png' }
        ],
        crypto: [
            { id: 'BTC', name: 'Bitcoin', price: 67400, img: 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png' },
            { id: 'ETH', name: 'Ethereum', price: 3500, img: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png' },
            { id: 'TON', name: 'Toncoin', price: 6.8, img: 'https://cdn-icons-png.flaticon.com/512/12114/12114250.png' }
        ],
        metals: [
            { id: 'GOLD', name: 'Золото', price: 2300, img: 'https://cdn-icons-png.flaticon.com/512/1946/1946654.png' },
            { id: 'SILV', name: 'Серебро', price: 28, img: 'https://cdn-icons-png.flaticon.com/512/656/656726.png' }
        ],
        gifts: [
            { id: 'TG_STAR', name: 'TG Star', price: 15, img: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png' },
            { id: 'TG_PREM', name: 'Premium 1y', price: 40, img: 'https://cdn-icons-png.flaticon.com/512/2583/2583166.png' }
        ],
        skins: [
            { id: 'AWP_DL', name: 'AWP Dragon Lore', price: 12000, img: 'https://cdn-icons-png.flaticon.com/512/1066/1066398.png' },
            { id: 'KARA', name: 'Karambit Fade', price: 1800, img: 'https://cdn-icons-png.flaticon.com/512/8627/8627993.png' },
            { id: 'AK_ASIM', name: 'AK-47 Asiimov', price: 150, img: 'https://cdn-icons-png.flaticon.com/512/9906/9906476.png' }
        ]
    }
};

const RATES = {
    usd_kzt: 492,
    usd_jpy: 151,
    kzt_jpy: 0.3
};

let currentModalAsset = null;
let currentRotation = 0; // Глобальный счетчик вращения рулетки

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('finGameData');
    if (saved) {
        DATABASE.portfolio = JSON.parse(saved);
    }

    updateUI();
    setInterval(simulateMarket, 3000);
});

function showScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach(el => el.classList.remove('active'));
    
    if (['screen-stocks', 'screen-crypto', 'screen-metals', 'screen-gifts', 'screen-skins'].includes(screenId)) {
        const type = screenId.replace('screen-', '');
        renderAssetList(type);
        document.getElementById('screen-list-view').classList.add('active');
    } else {
        document.getElementById(screenId).classList.add('active');
        if (screenId === 'screen-game-main') updateAllAssetsList();
        if (screenId === 'screen-accounts') updateAccountsUI();
        
        // ОБНОВЛЕНИЕ ДЛЯ РУЛЕТКИ
        if (screenId === 'screen-roulette') {
            const balanceDisplay = document.getElementById('roulette-balance');
            const resultDiv = document.getElementById('roulette-result');
            if (balanceDisplay) {
                balanceDisplay.innerText = formatUSD(DATABASE.portfolio.usd);
            }
             if (resultDiv) {
                resultDiv.innerText = ''; // Очистка результата при открытии
            }
        }
    }
}

function simulateMarket() {
    ['stocks', 'crypto', 'metals', 'gifts', 'skins'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => {
            const volatility = (cat === 'crypto' || cat === 'skins') ? 0.05 : 0.01;
            const change = 1 + (Math.random() - 0.5) * volatility;
            asset.price = Math.max(0.1, asset.price * change);
            asset.lastChange = (change - 1) * 100;
        });
    });
    
    if (DATABASE.portfolio.deposit > 0) {
        DATABASE.portfolio.usd += DATABASE.portfolio.deposit * 0.000001;
    }

    saveData();
    updateUI();
}

function updateUI() {
    let total = DATABASE.portfolio.usd + DATABASE.portfolio.deposit;
    
    ['stocks', 'crypto', 'metals', 'gifts', 'skins'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => {
            const qty = DATABASE.portfolio.assets[asset.id] || 0;
            total += qty * asset.price;
        });
    });

    document.getElementById('total-capital-display').innerText = formatUSD(total);
    document.getElementById('deposit-val-display').innerText = formatUSD(DATABASE.portfolio.deposit);
    
    const activeList = document.querySelector('#category-list-container');
    if (activeList && activeList.offsetParent !== null) {
        // Логика обновления активного списка, если она нужна
    }
    
    if(document.getElementById('screen-game-main').classList.contains('active')) {
        updateAllAssetsList();
    }
}

function updateAllAssetsList() {
    const container = document.getElementById('all-assets-list');
    container.innerHTML = '';

    addAssetRow(container, 'USD Balance', DATABASE.portfolio.usd, 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png', true);
    if(DATABASE.portfolio.deposit > 0) addAssetRow(container, 'Deposit', DATABASE.portfolio.deposit, 'https://cdn-icons-png.flaticon.com/512/2760/2760970.png', true);

    ['stocks', 'crypto', 'metals', 'gifts', 'skins'].forEach(cat => {
        DATABASE.market[cat].forEach(asset => {
            const qty = DATABASE.portfolio.assets[asset.id] || 0;
            if (qty > 0.0001) {
                const totalVal = qty * asset.price;
                const html = `
                    <div class="asset-list-item" onclick="openModal('${cat}', '${asset.id}')">
                        <img src="${asset.img}">
                        <div class="asset-list-details">
                            <span>${asset.name}</span>
                            <small>${qty.toFixed(4)} шт.</small>
                        </div>
                        <div class="asset-list-price">
                            <strong>${formatUSD(totalVal)}</strong>
                            <span>${asset.price.toFixed(2)}</span>
                        </div>
                    </div>
                `;
                container.innerHTML += html;
            }
        });
    });
}

function addAssetRow(container, name, value, img, isMoney) {
    container.innerHTML += `
        <div class="asset-list-item">
            <img src="${img}">
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

function renderAssetList(type) {
    const container = document.getElementById('category-list-container');
    container.innerHTML = '';
    
    const titles = { stocks: 'АКЦИИ', crypto: 'КРИПТА', metals: 'МЕТАЛЛЫ', gifts: 'ПОДАРКИ', skins: 'СКИНЫ CS2' };
    document.getElementById('list-view-title').innerText = titles[type];

    DATABASE.market[type].forEach(asset => {
        const change = asset.lastChange || 0;
        const colorClass = change >= 0 ? 'income-color' : 'expense-color';
        const sign = change >= 0 ? '+' : '';
        
        const html = `
            <div class="asset-list-item" onclick="openModal('${type}', '${asset.id}')">
                <img src="${asset.img}">
                <div class="asset-list-details">
                    <span>${asset.name}</span>
                    <small>${formatUSD(asset.price)}</small>
                </div>
                <div class="asset-list-price">
                    <span class="${colorClass}">${sign}${change.toFixed(2)}%</span>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function openModal(type, id) {
    const asset = DATABASE.market[type].find(a => a.id === id);
    currentModalAsset = asset;
    
    document.getElementById('m-name').innerText = asset.name;
    document.getElementById('m-price').innerText = formatUSD(asset.price);
    
    const qty = DATABASE.portfolio.assets[id] || 0;
    document.getElementById('m-owned').innerText = qty.toFixed(4);
    
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

// НОВАЯ ФУНКЦИЯ РУЛЕТКИ (ЦЕНА $2000, ПРИЗЫ)
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
    updateUI();
    balanceDisplay.innerText = formatUSD(DATABASE.portfolio.usd);

    // Блокировка кнопки и сброс текста
    btn.disabled = true;
    resultDiv.style.color = "#333";
    resultDiv.innerText = "Вращение...";

    // 3. Логика вращения
    const randomDegree = Math.floor(Math.random() * 360);
    const extraSpins = 360 * 5; // Минимум 5 оборотов
    const totalSpin = extraSpins + randomDegree;

    currentRotation += totalSpin;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // 4. Определение результата (через 4 секунды)
    setTimeout(() => {
        // Призы (порядок против часовой стрелки от верха 0deg)
        const segmentValues = [
            { color: "Голубой", val: 100 },       // 0-45 deg (Потеря $1900)
            { color: "Красный", val: 50000 },     // 45-90 deg (ДЖЕКПОТ)
            { color: "Зеленый", val: 10000 },     // 90-135 deg
            { color: "Желтый", val: 5000 },       // 135-180 deg
            { color: "Фиолетовый", val: 2000 },   // 180-225 deg (Возврат)
            { color: "Оранжевый", val: 1000 },    // 225-270 deg (Потеря $1000)
            { color: "Бирюзовый", val: 500 },     // 270-315 deg (Потеря $1500)
            { color: "Темный", val: 0 }           // 315-360 deg (Полный проигрыш)
        ];

        const actualAngle = currentRotation % 360;
        const segmentIndex = Math.floor((360 - actualAngle) / 45) % 8; 
        const wonPrize = segmentValues[segmentIndex];

        // Начисление
        DATABASE.portfolio.usd += wonPrize.val;
        
        // Визуальный результат
        if (wonPrize.val > cost) {
            resultDiv.style.color = "#27ae60"; // Зеленый
            resultDiv.innerText = `ДЖЕКПОТ! +${formatUSD(wonPrize.val)}!`;
        } else if (wonPrize.val === cost) {
            resultDiv.style.color = "#007aff"; // Синий
            resultDiv.innerText = `Возврат ставки: ${formatUSD(wonPrize.val)}.`;
        }
         else {
            resultDiv.style.color = "#e74c3c"; // Красный
            resultDiv.innerText = `Выпало: ${formatUSD(wonPrize.val)}. (Потеря: ${formatUSD(cost - wonPrize.val)})`;
        }

        saveData();
        updateUI(); // Обновить общий баланс приложения
        balanceDisplay.innerText = formatUSD(DATABASE.portfolio.usd);
        
        btn.disabled = false;
    }, 4000);
}
// КОНЕЦ НОВОЙ ФУНКЦИИ РУЛЕТКИ

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

function formatUSD(num) {
    // Убедитесь, что num - это число, иначе может вывести ошибку
    const number = typeof num === 'number' ? num : parseFloat(num);
    return '$ ' + number.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function saveData() {
    localStorage.setItem('finGameData', JSON.stringify(DATABASE.portfolio));
}
