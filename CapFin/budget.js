document.addEventListener('DOMContentLoaded', () => {
    let db = {
        transactions: [],
        accounts: [
            { id: 1, name: 'Наличка', balance: -5000.00 }
        ]
    };

    let currentTxType = 'expense';
    let currentTxAmount = '0';

    const screens = document.querySelectorAll('.screen');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const addTxTypeButtons = document.querySelectorAll('.tx-type-btn');
    const keypadButtons = document.querySelectorAll('.keypad-btn');
    const txAmountDisplay = document.getElementById('tx-amount-display');
    const confirmTxButton = document.getElementById('tx-confirm-btn');
    const txCategorySelect = document.getElementById('tx-category');

    const totalBalanceAccounts = document.getElementById('total-balance-accounts');
    const cashBalance = document.getElementById('cash-balance');
    const analyticsPeriodTotal = document.getElementById('analytics-period-total');
    const analyticsPeriodAvg = document.getElementById('analytics-period-avg');
    const analyticsTotalIncome = document.getElementById('analytics-total-income');
    const analyticsTotalExpense = document.getElementById('analytics-total-expense');
    const analyticsTotalBalance = document.getElementById('analytics-total-balance');
    const analyticsCategoriesContainer = document.getElementById('analytics-categories');

    function init() {
        const savedDB = JSON.parse(localStorage.getItem('finGramBudgetDB'));
        if (savedDB) {
            db = savedDB;
        } else {
            db.transactions = [
                { id: 1, type: 'expense', category: 'Продукты', amount: 5000, date: new Date().toISOString() }
            ];
            db.accounts[0].balance = -5000;
            saveDB();
        }

        setupEventListeners();
        updateAllUI();
    }

    function saveDB() {
        localStorage.setItem('finGramBudgetDB', JSON.stringify(db));
    }

    function updateAllUI() {
        updateAnalyticsScreen();
        updateAccountsScreen();
    }

    function updateAccountsScreen() {
        const totalBalance = db.accounts.reduce((sum, acc) => sum + acc.balance, 0);
        
        totalBalanceAccounts.textContent = formatCurrency(totalBalance, '₸');
        cashBalance.textContent = formatCurrency(db.accounts[0].balance, '₸');
        
        totalBalanceAccounts.className = totalBalance < 0 ? 'expense-color' : 'income-color';
        cashBalance.className = db.accounts[0].balance < 0 ? 'expense-color expense-color' : 'income-color';
    }

    function updateAnalyticsScreen() {
        let totalIncome = 0;
        let totalExpense = 0;
        let categories = {};

        db.transactions.forEach(tx => {
            if (tx.type === 'income') {
                totalIncome += tx.amount;
            } else if (tx.type === 'expense') {
                totalExpense += tx.amount;
                if (!categories[tx.category]) {
                    categories[tx.category] = 0;
                }
                categories[tx.category] += tx.amount;
            }
        });

        const totalBalance = totalIncome - totalExpense;
        const totalDays = 1;

        analyticsTotalIncome.textContent = formatCurrency(totalIncome, 'KZT');
        analyticsTotalExpense.textContent = formatCurrency(totalExpense, 'KZT');
        analyticsTotalBalance.textContent = formatCurrency(totalBalance, 'KZT');
        analyticsTotalBalance.className = totalBalance < 0 ? 'expense-color' : 'income-color';
        
        analyticsPeriodTotal.textContent = formatCurrency(totalExpense, '₸');
        analyticsPeriodAvg.textContent = formatCurrency(totalExpense / totalDays, '₸');

        analyticsCategoriesContainer.innerHTML = '';
        if (Object.keys(categories).length === 0) {
            analyticsCategoriesContainer.innerHTML = '<p>Пока нет расходов</p>';
        }
        
        for (const category in categories) {
            const amount = categories[category];
            const percentage = (amount / totalExpense) * 100;
            const categoryInitial = category.charAt(0).toUpperCase();

            analyticsCategoriesContainer.innerHTML += `
                <div class="category-item">
                    <div class="category-icon" style="background-color: ${getCategoryColor(category)};">${categoryInitial}</div>
                    <div class="category-details">
                        <span>${category}</span>
                        <div class="category-percentage-bar">
                            <div style="width: ${percentage}%;"></div>
                        </div>
                    </div>
                    <div class="category-amount">
                        <span>${formatCurrency(amount, '₸')}</span>
                        <small>${percentage.toFixed(2)}%</small>
                    </div>
                </div>
            `;
        }
    }

    function setupEventListeners() {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const screenId = button.dataset.screen;
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                screens.forEach(screen => {
                    screen.style.display = screen.id === screenId ? 'block' : 'none';
                });
                
                if (screenId !== 'screen-add-tx') {
                    resetTxForm();
                }
            });
        });

        addTxTypeButtons.forEach(button => {
            button.addEventListener('click', () => {
                addTxTypeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentTxType = button.dataset.type;
            });
        });

        keypadButtons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                
                if (button.id === 'keypad-backspace') {
                    currentTxAmount = currentTxAmount.slice(0, -1);
                    if (currentTxAmount === '') {
                        currentTxAmount = '0';
                    }
                } else if (value === '.' && !currentTxAmount.includes('.')) {
                    currentTxAmount += '.';
                } else if (value !== '.') {
                    if (currentTxAmount === '0') {
                        currentTxAmount = value;
                    } else {
                        currentTxAmount += value;
                    }
                }
                
                txAmountDisplay.textContent = currentTxAmount;
            });
        });

        confirmTxButton.addEventListener('click', () => {
            const amount = parseFloat(currentTxAmount);
            if (amount === 0) return;

            const newTx = {
                id: Date.now(),
                type: currentTxType,
                category: txCategorySelect.value,
                amount: amount,
                date: new Date().toISOString()
            };

            db.transactions.push(newTx);
            
            if (currentTxType === 'expense') {
                db.accounts[0].balance -= amount;
            } else if (currentTxType === 'income') {
                db.accounts[0].balance += amount;
            }

            saveDB();
            updateAllUI();
            
            resetTxForm();
            document.querySelector('.tab-btn[data-screen="screen-accounts"]').click();
        });
    }

    function resetTxForm() {
        currentTxAmount = '0';
        txAmountDisplay.textContent = '0';
        addTxTypeButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.tx-type-btn[data-type="expense"]').classList.add('active');
        currentTxType = 'expense';
    }

    function formatCurrency(amount, currencySymbol) {
        return `${amount.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currencySymbol}`;
    }

    function getCategoryColor(category) {
        switch (category) {
            case 'Продукты': return '#007aff';
            case 'Транспорт': return '#5856d6';
            case 'Развлечения': return '#ff2d55';
            case 'Доход': return '#34c759';
            default: return '#8e8e93';
        }
    }

    init();
});