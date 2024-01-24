// 1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.
// Function Declaration
function arrayForDeclaration(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
arrayForDeclaration([1, 2, 3]); // Outputs 1, 2, 3

// Function Expression
let arrayForExpression = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
arrayForExpression([1, 2, 3]); // Outputs 1, 2, 3

// Arrow Function
let arrayForArrow = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
arrayForArrow([1, 2, 3]); // Outputs 1, 2, 3
// 2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.
// Function Declaration
function arrayWhileDeclaration(array) {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
}
arrayWhileDeclaration([1, 2, 3]); // Outputs 1, 2, 3

// Function Expression
let arrayWhileExpression = function(array) {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
};
arrayWhileExpression([1, 2, 3]); // Outputs 1, 2, 3

// Arrow Function
let arrayWhileArrow = array => {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
};
arrayWhileArrow([1, 2, 3]); // Outputs 1, 2, 3
// 3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.
// Function Declaration
function sumDeclaration(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(sumDeclaration([1, 2, 3])); // Outputs 6

// Function Expression
let sumExpression = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumExpression([1, 2, 3])); // Outputs 6

// Arrow Function
let sumArrow = array => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumArrow([1, 2, 3])); // Outputs 6
// 4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
// Function Declaration
function sumEveryOtherDeclaration(array) {
    let total = 0;
    for (let i = 0; i < array.length; i += 2) {
        total += array[i];
    }
    return total;
}
console.log(sumEveryOtherDeclaration([1, 2, 3, 4, 5])); // Outputs 9

// Function Expression
let sumEveryOtherExpression = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i += 2) {
        total += array[i];
    }
    return total;
};
console.log(sumEveryOtherExpression([1, 2, 3, 4, 5])); // Outputs 9

// Arrow Function
let sumEveryOtherArrow = array => {
    let total = 0;
    for (let i = 0; i < array.length; i += 2) {
        total += array[i];
    }
    return total;
};
console.log(sumEveryOtherArrow([1, 2, 3, 4, 5])); // Outputs 9
// 5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.
// Function Declaration
function sumStartAtDeclaration(array, index) {
    let total = 0;
    for (let i = index; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(sumStartAtDeclaration([1, 2, 3, 4, 5], 1)); // Outputs 14

// Function Expression
let sumStartAtExpression = function(array, index) {
    let total = 0;
    for (let i = index; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumStartAtExpression([1, 2, 3, 4, 5], 1)); // Outputs 14

// Arrow Function
let sumStartAtArrow = (array, index) => {
    let total = 0;
    for (let i = index; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumStartAtArrow([1, 2, 3, 4, 5], 1)); // Outputs 14
// 6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.
// Function Declaration
function sumUntilDeclaration(array, index) {
    let total = 0;
    for (let i = 0; i <= index; i++) {
        total += array[i];
    }
    return total;
}
console.log(sumUntilDeclaration([1, 2, 3, 4, 5], 2)); // Outputs 6

// Function Expression
let sumUntilExpression = function(array, index) {
    let total = 0;
    for (let i = 0; i <= index; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumUntilExpression([1, 2, 3, 4, 5], 2)); // Outputs 6

// Arrow Function
let sumUntilArrow = (array, index) => {
    let total = 0;
    for (let i = 0; i <= index; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumUntilArrow([1, 2, 3, 4, 5], 2)); // Outputs 6
// 7.Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).
// Function Declaration
function subtractReverseDeclaration(array) {
    let result = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        result -= array[i];
    }
    return result;
}
console.log(subtractReverseDeclaration([1, 2, 3])); // Outputs 0

// Function Expression
let subtractReverseExpression = function(array) {
    let result = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        result -= array[i];
    }
    return result;
};
console.log(subtractReverseExpression([1, 2, 3])); // Outputs 0

// Arrow Function
let subtractReverseArrow = array => {
    let result = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        result -= array[i];
    }
    return result;
};
console.log(subtractReverseArrow([1, 2, 3])); // Outputs 0
// 8.Write a function called product that takes an array as a parameter and returns the product of all the elements in the array.
// Function Declaration
function productDeclaration(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
}
console.log(productDeclaration([1, 2, 3])); // Outputs 6

// Function Expression
let productExpression = function(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
};
console.log(productExpression([1, 2, 3])); // Outputs 6

// Arrow Function
let productArrow = array => {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
};
console.log(productArrow([1, 2, 3])); // Outputs 6
// 9.Write a function called average that takes an array as a parameter and returns the average of all the elements in the array.
// Function Declaration
function averageDeclaration(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
console.log(averageDeclaration([1, 2, 3])); // Outputs 2

// Function Expression
let averageExpression = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
};
console.log(averageExpression([1, 2, 3])); // Outputs 2

// Arrow Function
let averageArrow = array => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
};
console.log(averageArrow([1, 2, 3])); // Outputs 2
// 10.Write a function called square that takes an array as a parameter and returns a new array where each element is the square of the element of the given array.
// Function Declaration
function squareDeclaration(array) {
    let squaredArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        squaredArray[i] = array[i] * array[i];
    }
    return squaredArray;
}
console.log(squareDeclaration([1, 2, 3])); // Outputs [1, 4, 9]

// Function Expression
let squareExpression = function(array) {
    let squaredArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        squaredArray[i] = array[i] * array[i];
    }
    return squaredArray;
};
console.log(squareExpression([1, 2, 3])); // Outputs [1, 4, 9]

// Arrow Function
let squareArrow = array => {
    let squaredArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        squaredArray[i] = array[i] * array[i];
    }
    return squaredArray;
};
console.log(squareArrow([1, 2, 3])); // Outputs [1, 4, 9]
// 11.Write a function called isArray that takes one parameter and returns true if the input is array otherwise returns false.
// Function Declaration
function isArrayDeclaration(input) {
    return Array.isArray(input);
}
console.log(isArrayDeclaration([1, 2, 3])); // Outputs true
console.log(isArrayDeclaration("hi")); // Outputs false

// Function Expression
let isArrayExpression = function(input) {
    return Array.isArray(input);
};
console.log(isArrayExpression([1, 2, 3])); // Outputs true
console.log(isArrayExpression("hi")); // Outputs false

// Arrow Function
let isArrayArrow = input => Array.isArray(input);
console.log(isArrayArrow([1, 2, 3])); // Outputs true
console.log(isArrayArrow("hi")); // Outputs false
