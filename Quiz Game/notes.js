/* In JavaScript, an array is like a box where you can put multiple things. 
These things can be numbers, words, or even other boxes (arrays). You can access each thing inside the box using a number, 
and the counting starts from zero. */

// Creating an array with fruits
let fruits = ['apple', 'banana', 'orange'];

// Accessing the first fruit (remember, counting starts from 0)
let firstFruit = fruits[0]; // 'apple'

// Changing the second fruit
fruits[1] = 'grape';

// Adding a new fruit to the end
fruits.push('kiwi');

// The array now looks like this: ['apple', 'grape', 'orange', 'kiwi']

/////////////////////////////////////////////////////////////////////////////////////////////////////

// This object defines how many times each symbol should appear
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

// This function "spin" creates a list of symbols based on the counts specified above
const spin = () => {
    const symbols = []; // We start with an empty list

    // We go through each symbol and its count in the SYMBOLS_COUNT object
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        // For each symbol, we add it to the list 'count' number of times
        /* This loop will start with i equal to 0, and it will keep going as long as i is less than the number of rows (ROWS). After each iteration (each time the loop goes through the code inside the curly braces), the i++ makes sure that the value of i is increased by 1. This way, the loop gradually moves through each row of the matrix.

So, the i++ helps in making sure the loop doesn't go on forever and helps the code inside the loop operate on each row of the matrix one after the other. */
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    // The function finishes, and the list of symbols is ready
    return symbols;
};

// Example usage: calling the spin function and storing the result in 'result'
const result = spin();

// Printing the result to the console
console.log(result);

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push (symbol);
        }
    }
};

/* Okay, imagine we're playing with different toys, and each toy has a name and a number. This code is like a game where we're making a list of toys to play with.

spin = () => {
We're creating a game called "spin." This game is special because it helps us make a list of toys.

const symbols = [];
We're getting a big empty bag (called symbols) ready to put our toys in.

for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
Now, we're looking at our collection of toys (called SYMBOLS_COUNT). Each toy has a name (we call it a symbol) and a number.
We're going through each toy in our collection one by one.

for (let i = 0; i < count; i++) {
For each toy, we're going to play with it as many times as the number says. We're counting from 0 up to that number.
So, if a toy has the number 3, we're going to play with it three times.

symbols.push(symbol);
Every time we play with a toy, we put it into our bag (the symbols bag).
So, if a toy is called "car," and we play with it three times, we put "car" into our bag three times.
};

We finish playing with all the toys in our collection. The two curly braces } mean we're done with our game.
Now, we have our bag full of toys (the symbols bag), and it has all the toys we played with, each one as many times as its number said. We can use this bag of toys for something fun, like a game or an adventure!

In short, this code makes a list of toys (symbols) by looking at a collection of toys (SYMBOLS_COUNT), and it plays with each toy as many times as the number says, putting them all into a bag (symbols).
 */

/////////////////////////////////////////////////////////////////////////////////

/* Math.random():
Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
For example, it might give you something like 0.762345.

Math.random() * reelSymbols.length:
This part multiplies the random decimal number by the length of the reelSymbols array.
If reelSymbols has 10 elements, this could give you something like 0.762345 * 10 = 7.62345.

Math.floor(Math.random() * reelSymbols.length):
Math.floor() rounds down the result of the multiplication to the nearest whole number.
So, if the result was 7.62345, Math.floor would make it 7.

The purpose of this line is to generate a random index that can be used to pick a random symbol from the reelSymbols array. It's a common technique in programming to get a random item from a list. */

///////////////////////////////////////////////////////////////

/* Function Definition: The code defines a function called transpose that takes a parameter reels.

Initialization: It creates an empty array called rows to store the transposed matrix.

Outer Loop (for loop): The outer loop (controlled by the variable i) goes through each row of the original matrix. It starts from 0 and goes up to ROWS - 1.

Inner Loop (for loop): Inside the outer loop, there is another loop (controlled by the variable j) that goes through each column of the original matrix. It starts from 0 and goes up to COLS - 1.

Transposition: Within the inner loop, the code pushes the element at position [j][i] from the original matrix (reels) into the current row of the transposed matrix (rows[i]).

Closing the Loops: The loops are properly closed, and the function definition is complete.

This function transposes a matrix. If you imagine a matrix as a grid of numbers or values, the transpose of a matrix is obtained by swapping its rows with its columns. The resulting rows array will be the transposed matrix.
*/