//1-My First Function
// Function Declaration
function myFirstFunctionDeclaration() {
    // Does nothing
}
myFirstFunctionDeclaration();

// Function Expression
let myFirstFunctionExpression = function() {
    // Does nothing
};
myFirstFunctionExpression();

// Arrow Function
let myFirstFunctionArrow = () => {
    // Does nothing
};
myFirstFunctionArrow();
//2-Hello World 
// Function Declaration
function helloWorldDeclaration() {
    console.log("Hello World");
}
helloWorldDeclaration(); // Outputs "Hello World"

// Function Expression
let helloWorldExpression = function() {
    console.log("Hello World");
};
helloWorldExpression(); // Outputs "Hello World"

// Arrow Function
let helloWorldArrow = () => console.log("Hello World");
helloWorldArrow(); // Outputs "Hello World"
//3-Return Five
// Function Declaration
function returnFiveDeclaration() {
    return 5;
}
console.log(returnFiveDeclaration()); // Outputs 5

// Function Expression
let returnFiveExpression = function() {
    return 5;
};
console.log(returnFiveExpression()); // Outputs 5

// Arrow Function
let returnFiveArrow = () => 5;
console.log(returnFiveArrow()); // Outputs 5
//4-Hello World Again
// Function Declaration
function helloWorldAgainDeclaration() {
    return "Hello World Again";
}

// Function Expression
let helloWorldAgainExpression = function() {
    return "Hello World Again";
};

// Arrow Function
let helloWorldAgainArrow = () => "Hello World Again";
//5-Return Parameter
// Function Declaration
function returnParameterDeclaration(parameter) {
    return parameter;
}
console.log(returnParameterDeclaration(1)); // Outputs 1

// Function Expression
let returnParameterExpression = function(parameter) {
    return parameter;
};
console.log(returnParameterExpression(2)); // Outputs 2

// Arrow Function
let returnParameterArrow = parameter => parameter;
console.log(returnParameterArrow("Hi")); // Outputs "Hi"
//6-Add
// Function Declaration
function addDeclaration(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(addDeclaration(1, 1)); // Outputs 2

// Function Expression
let addExpression = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
console.log(addExpression(2, 2)); // Outputs 4

// Arrow Function
let addArrow = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(addArrow(3, 3)); // Outputs 6
//7-Subtract
// Function Declaration
function subtractDeclaration(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
console.log(subtractDeclaration(2, 1)); // Outputs 1

// Function Expression
let subtractExpression = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};
console.log(subtractExpression(3, 3)); // Outputs 0

// Arrow Function
let subtractArrow = (firstNumber, secondNumber) => firstNumber - secondNumber;
console.log(subtractArrow(1, 2)); // Outputs -1
//8-Multiply
// Function Declaration
function multiplyDeclaration(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

// Function Expression
let multiplyExpression = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

// Arrow Function
let multiplyArrow = (firstNumber, secondNumber) => firstNumber * secondNumber;
//9-String length
// Function Declaration
function stringLengthDeclaration(string) {
    return string.length;
}
console.log(stringLengthDeclaration("Hello")); // Outputs 5

// Function Expression
let stringLengthExpression = function(string) {
    return string.length;
};
console.log(stringLengthExpression("Hi")); // Outputs 2

// Arrow Function
let stringLengthArrow = string => string.length;
console.log(stringLengthArrow("Example")); // Outputs 7
//10-Concat two strings
// Function Declaration
function concatTwoStringsDeclaration(firstString, secondString) {
    return firstString + secondString;
}
console.log(concatTwoStringsDeclaration("Hello", "World")); // Outputs "HelloWorld"

// Function Expression
let concatTwoStringsExpression = function(firstString, secondString) {
    return firstString + secondString;
};
console.log(concatTwoStringsExpression("Cute", "Kitty")); // Outputs "CuteKitty"

// Arrow Function
let concatTwoStringsArrow = (firstString, secondString) => firstString + secondString;
console.log(concatTwoStringsArrow("Good", "Day")); // Outputs "GoodDay"
//11- Full Name 
// Function Declaration
function fullNameDeclaration(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullNameDeclaration("Sfectoria", "solution and technologies advanced")); // Outputs "Sfectoria solution and technologies advanced"

// Function Expression
let fullNameExpression = function(firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(fullNameExpression("sfectorian", "pionner")); // Outputs "sfectorian pionner"

// Arrow Function
let fullNameArrow = (firstName, lastName) => firstName + " " + lastName;
console.log(fullNameArrow("John", "Doe")); // Outputs "John Doe"

