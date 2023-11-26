Variables:
In JavaScript, variables are used to store and manipulate data. You can declare a variable using the var, let, or const keyword. Here's an example:

var age = 25;  // var is the old way, try to use let and const
let name = "John";
const pi = 3.14;

/* var is used for variable declaration. It has a function-level scope.
let is similar to var but has block-level scope.
const is used to declare constants, and its value cannot be reassigned. */

Data Types:
JavaScript has several data types:

Primitive Types:
Number: Represents both integers and floating-point numbers.
String: Represents textual data.
Boolean: Represents either true or false.
null: Represents the absence of a value.
undefined: Represents an uninitialized variable.

let age = 25;           // Number
let name = "John";      // String
let isAdult = true;     // Boolean
let noValue = null;     // null
let notDefined;          // undefined

Complex Types:
Object: A collection of key-value pairs.
Array: An ordered list of values.

let person = { name: "John", age: 25 };  // Object
let fruits = ["apple", "banana", "orange"];  // Array

Operators:
JavaScript has various operators for performing operations on variables and values.

Arithmetic Operators:
let x = 5;
let y = 2;

let sum = x + y;   // Addition
let diff = x - y;  // Subtraction
let product = x * y;  // Multiplication
let quotient = x / y;  // Division
let remainder = x % y;  // Modulus

let a = 5;
let b = 10;

Comparison Operators:
console.log(a === b);  // Equal to
console.log(a !== b);  // Not equal to
console.log(a > b);    // Greater than
console.log(a < b);    // Less than

Logical Operators:
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);  // Logical AND
console.log(isTrue || isFalse);  // Logical OR
console.log(!isTrue);            // Logical NOT

Control Flow (if statements, loops), Functions and Scopes
Control Flow:
If Statements:
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


Loops (for, while):
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // While Loop
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
  

  Functions:
A function is a reusable block of code. It's defined using the function keyword.
// Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John");  // Call the function

  Functions can also return values:
  function add(x, y) {
    return x + y;
  }
  
  let sum = add(3, 5);
  console.log(sum);  // Outputs 8

  Scopes:
JavaScript has function-level and block-level scopes.
let globalVar = "I'm global";

function exampleScope() {
  let localVar = "I'm local";
  console.log(globalVar);  // Accessible
  console.log(localVar);   // Accessible
}

// console.log(localVar); // This would throw an error, as localVar is not accessible outside the function.

  





