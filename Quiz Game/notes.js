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