/* function deposit() {
    return 1
} */

const prompt = require("prompt-sync")();

/* 4. SPIN THE SLOT MACHINE */

const ROWS = 3
const COLUMNS = 3

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
} 

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


/* 1. ASK DEPOSIT FROM THE PLAYER */
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        }

        else { 
            return numberDepositAmount;
        }
    }
};

/* 2. DETERMINE THE LINES OF THE BET */
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter which lines you wish to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid betting lines, try again.");
        }

        else { 
            return numberOfLines;
        }
    }
};

/* 3. DETERMINE THE AMOUNT THE USER WANTS TO BET */
const determineBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the amount you wish to bet PER LINE: ");
        const numberOfBet = parseFloat(bet);

        if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
            console.log("Invalid betting amount, try again.");
        }

        else { 
            return numberOfBet;
        }
    }
};

/* 4. SPIN THE SLOT MACHINE (IT IS GLOBAL VARIABLES SO IT IS IN TOP)*/

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push (symbol);
        }
    }

    const reels = [[], [], []]; 
    for (let i = 0; i < COLUMNS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomSymbols = Math.floor(Math.random() * reelSymbols.length);
            const finishedSymbol = reelSymbols [randomSymbols];
            reels[i].push(finishedSymbol);
            reelSymbols.splice(randomSymbols, 1);
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; 1++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }

    }

    return rows;

};

const printSlot = (rows) => {
    for (const row of rows) {
        let slotString = "A";
        for (const [i, symbol] of row.entries ()) {
            slotString += symbol
            if (i != row.length -1) {
                slotString += " | "
            }
        }
    }
};
/* 5. CONFIRM IF THE PLAYER WON */

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = determineBet(balance, numberOfLines);
const reels = spin ();
const rows = transpose(reels);
printSlot(rows);