/* function deposit() {
    return 1
} */

const prompt = require("prompt-sync")();


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

}

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

}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = determineBet(balance, numberOfLines);