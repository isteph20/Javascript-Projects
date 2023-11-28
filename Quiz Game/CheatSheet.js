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

/////////////
///////////////////////////////////////////
////////////

Objects:
In JavaScript, objects are key-value pairs and can be used to represent real-world entities. Here's how you can create and work with objects:
// Object Declaration
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001"
  },
  hobbies: ["reading", "traveling", "coding"]
};

// Accessing Object Properties
console.log(person.firstName);  // Outputs: John
console.log(person.address.city);  // Outputs: New York
console.log(person.hobbies[0]);  // Outputs: reading

// Modifying Object Properties
person.age = 31;
console.log(person.age);  // Outputs: 31

// Adding a New Property
person.job = "Developer";

// Deleting a Property
delete person.lastName;


Arrays:
Arrays are ordered lists of values and are a fundamental part of JavaScript. Here's how to work with arrays:
// Array Declaration
let fruits = ["apple", "banana", "orange"];

// Accessing Array Elements
console.log(fruits[0]);  // Outputs: apple

// Modifying Array Elements
fruits[1] = "grape";
console.log(fruits);  // Outputs: ["apple", "grape", "orange"]

// Adding Elements to the End
fruits.push("kiwi");

// Removing the Last Element
let lastFruit = fruits.pop();

// Adding Elements to the Beginning
fruits.unshift("pear");

// Removing the First Element
let firstFruit = fruits.shift();

DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects. JavaScript can be used to manipulate this tree, allowing dynamic changes to the content and structure of a web page.
<!-- HTML Structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation</title>
</head>
<body>
  <h1 id="main-heading">Hello, DOM!</h1>
  <button id="change-text-btn">Change Text</button>

  <script src="script.js"></script>
</body>
</html>

// script.js

// DOM Manipulation
let heading = document.getElementById("main-heading");
heading.innerHTML = "New Heading Text";

// Creating Elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Appending Elements
document.body.appendChild(newParagraph);

// Removing Elements
let button = document.getElementById("change-text-btn");
button.addEventListener("click", function () {
  newParagraph.remove();
});

Event Handling:
Event handling is crucial for making web pages interactive. JavaScript can respond to user actions (like clicks or keypresses) by using event listeners.
// Event Handling
let button = document.getElementById("change-text-btn");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});

// Another Example: Change Text on Hover
heading.addEventListener("mouseover", function () {
  heading.innerHTML = "You hovered over me!";
});

heading.addEventListener("mouseout", function () {
  heading.innerHTML = "Hello, DOM!";
});

In the example above, we use the addEventListener method to attach event listeners to the button and the heading. When the button is clicked, an alert is shown, and when the mouse hovers over the heading, its text is changed.
  
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

Functions in JavaScript:
1. Function Declaration:
Definition: A function is a reusable block of code that performs a specific task.
Declaration:
function greet() {
  console.log("Hello!");
}
Explanation:
function: Keyword to declare a function.
greet: Name of the function.
() : Parameters go inside the parentheses (none in this example).
{} : Code block containing the task the function performs.

Parameters:
Definition: Inputs that a function can receive to customize its behavior.
Example:
function greet(name) {
  console.log("Hello, " + name + "!");
}
Explanation:
name: Parameter defined inside the parentheses.
Used within the function to customize the greeting.

Return Values:
Definition: The result or output a function provides after execution.
Example:
function add(a, b) {
  return a + b;
}
Explanation:
return: Statement that provides the result.
The function adds two numbers (a and b) and returns the sum.

Putting it Together:
Example Function:
function calculateArea(length, width) {
  let area = length * width;
  return area;
}

How to Use:
let rectangleArea = calculateArea(5, 10);
console.log("Rectangle Area:", rectangleArea);
Explanation:
calculateArea takes length and width as parameters.
Calculates the area by multiplying them.
Returns the result.
The returned result is stored in rectangleArea.
