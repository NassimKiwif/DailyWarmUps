
// 1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it.
// Function Declaration
function sumOfNDeclaration(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNDeclaration(5)); // Outputs 15

// Function Expression
let sumOfNExpression = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumOfNExpression(3)); // Outputs 6

// Arrow Function
let sumOfNArrow = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumOfNArrow(5)); // Outputs 15

// 2.Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number.
// Function Declaration
function factorialOfNDeclaration(n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}
console.log(factorialOfNDeclaration(5)); // Outputs 120

// Function Expression
let factorialOfNExpression = function(n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
};
console.log(factorialOfNExpression(3)); // Outputs 6

// Arrow Function
let factorialOfNArrow = n => {
    if (n === 0) return 1;
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
};
console.log(factorialOfNArrow(1)); // Outputs 1
// 3.Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter.
// Function Declaration
function repeatStringDeclaration(string, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
}
console.log(repeatStringDeclaration("Hi", 5)); // Outputs "HiHiHiHiHi"

// Function Expression
let repeatStringExpression = function(string, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};
console.log(repeatStringExpression("dog", 3)); // Outputs "dogdogdog"

// Arrow Function
let repeatStringArrow = (string, num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};
console.log(repeatStringArrow("Hi", 5)); // Outputs "HiHiHiHiHi"

// 4.Write a function called countMinMax that takes two numbers as parameters and returns the range.
// Function Declaration
function countMinMaxDeclaration(min, max) {
    return max - min;
}
console.log(countMinMaxDeclaration(10, 15)); // Outputs 5

// Function Expression
let countMinMaxExpression = function(min, max) {
    return max - min;
};
console.log(countMinMaxExpression(0, 3)); // Outputs 3

// Arrow Function
let countMinMaxArrow = (min, max) => max - min;
console.log(countMinMaxArrow(10, 15)); // Outputs 5
// 5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers beginning at the num1 and excluding num2.
// Function Declaration
function sumMinToMaxDeclaration(min, max) {
    let sum = 0;
    for (let i = min; i < max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumMinToMaxDeclaration(1, 5)); // Outputs 10

// Function Expression
let sumMinToMaxExpression = function(min, max) {
    let sum = 0;
    for (let i = min; i < max; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumMinToMaxExpression(3, 7)); // Outputs 18

// Arrow Function
let sumMinToMaxArrow = (min, max) => {
    let sum = 0;
    for (let i = min; i < max; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumMinToMaxArrow(1, 5)); // Outputs 10
// 6.Write a function called productMinToMax that takes two numbers as parameters and returns the product between the two integers beginning at the num1 and excluding num2.
// Function Declaration
function productMinToMaxDeclaration(min, max) {
    let product = 1;
    for (let i = min; i < max; i++) {
        product *= i;
    }
    return product;
}
console.log(productMinToMaxDeclaration(1, 5)); // Outputs 24

// Function Expression
let productMinToMaxExpression = function(min, max) {
    let product = 1;
    for (let i = min; i < max; i++) {
        product *= i;
    }
    return product;
};
console.log(productMinToMaxExpression(3, 7)); // Outputs 360

// Arrow Function
let productMinToMaxArrow = (min, max) => {
    let product = 1;
    for (let i = min; i < max; i++) {
        product *= i;
    }
    return product;
};
console.log(productMinToMaxArrow(1, 5)); // Outputs 24
// 7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.
// Function Declaration
function multiplyBy10NTimesDeclaration(num, n) {
    for (let i = 0; i < n; i++) {
        num *= 10;
    }
    return num;
}
console.log(multiplyBy10NTimesDeclaration(3, 3)); // Outputs 3000

// Function Expression
let multiplyBy10NTimesExpression = function(num, n) {
    for (let i = 0; i < n; i++) {
        num *= 10;
    }
    return num;
};
console.log(multiplyBy10NTimesExpression(5, 2)); // Outputs 500

// Arrow Function
let multiplyBy10NTimesArrow = (num, n) => {
    for (let i = 0; i < n; i++) {
        num *= 10;
    }
    return num;
};
console.log(multiplyBy10NTimesArrow(3, 3)); // Outputs 3000
// 8.Write a function called countCharAtIndex that takes three parameters, a string, an index, and another string. This function should use the index to find the corresponding character in the first string and loop through the second string and count how many times that character occurs.
// Function Declaration
function countCharAtIndexDeclaration(string1, index, string2) {
    let count = 0;
    let char = string1[index];
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharAtIndexDeclaration("hello", 2, "lol")); // Outputs 2
console.log(countCharAtIndexDeclaration("world", 3, "Hello World")); // Outputs 3

// Function Expression
let countCharAtIndexExpression = function(string1, index, string2) {
    let count = 0;
    let char = string1[index];
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] === char) {
            count++;
        }
    }
    return count;
};
console.log(countCharAtIndexExpression("hello", 2, "lol")); // Outputs 2
console.log(countCharAtIndexExpression("world", 3, "Hello World")); // Outputs 3

// Arrow Function
let countCharAtIndexArrow = (string1, index, string2) => {
    let count = 0;
    let char = string1[index];
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] === char) {
            count++;
        }
    }
    return count;
};
console.log(countCharAtIndexArrow("hello", 2, "lol")); // Outputs 2
console.log(countCharAtIndexArrow("world", 3, "Hello World")); // Outputs 3


//Extended
// 1.Write a function called reverseString that takes a string as an input and returns that string in reverse.
// Function Declaration
function reverseStringDeclaration(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}
console.log(reverseStringDeclaration("hello")); // Outputs "olleh"

// Function Expression
let reverseStringExpression = function(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};
console.log(reverseStringExpression("world")); // Outputs "dlrow"

// Arrow Function
let reverseStringArrow = string => {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};
console.log(reverseStringArrow("hello")); // Outputs "olleh"

// 2.Write a function called getIndexOf that takes two parameters, a string, and a character, and returns the first position of the character in that string.
// Function Declaration
function getIndexOfDeclaration(string, char) {
    return string.indexOf(char);
}
console.log(getIndexOfDeclaration("I am a hacker", "a")); // Outputs 2
console.log(getIndexOfDeclaration("hello", "h")); // Outputs 0

// Function Expression
let getIndexOfExpression = function(string, char) {
    return string.indexOf(char);
};
console.log(getIndexOfExpression("I am a hacker", "a")); // Outputs 2
console.log(getIndexOfExpression("hello", "h")); // Outputs 0

// Arrow Function
let getIndexOfArrow = (string, char) => string.indexOf(char);
console.log(getIndexOfArrow("I am a hacker", "a")); // Outputs 2
console.log(getIndexOfArrow("hello", "h")); // Outputs 0

//Immersive
// 1.Write a function called sumEven that takes two numbers as parameters and returns the sum of all even numbers starting from num1 and excluding num2.
// Function Declaration
function sumEvenDeclaration(number1, number2) {
    let sum = 0;
    for (let i = number1; i < number2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenDeclaration(3, 9)); // Outputs 18
console.log(sumEvenDeclaration(1, 6)); // Outputs 6

// Function Expression
let sumEvenExpression = function(number1, number2) {
    let sum = 0;
    for (let i = number1; i < number2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};
console.log(sumEvenExpression(3, 9)); // Outputs 18
console.log(sumEvenExpression(1, 6)); // Outputs 6

// Arrow Function
let sumEvenArrow = (number1, number2) => {
    let sum = 0;
    for (let i = number1; i < number2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};
console.log(sumEvenArrow(3, 9)); // Outputs 18
console.log(sumEvenArrow(1, 6)); // Outputs 6
// 2.Write a function called primeCounter that takes a number as a parameter and returns the amount of prime numbers that occur before it.
// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// 2.Write a function called primeCounter that takes a number as a parameter and returns the amount of prime numbers that occur before it.
// Function Declaration
function primeCounterDeclaration(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
console.log(primeCounterDeclaration(10)); // Outputs 4
console.log(primeCounterDeclaration(7)); // Outputs 3

// Function Expression
let primeCounterExpression = function(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};
console.log(primeCounterExpression(10)); // Outputs 4
console.log(primeCounterExpression(7)); // Outputs 3

// Arrow Function
let primeCounterArrow = number => {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};
console.log(primeCounterArrow(10)); // Outputs 4
console.log(primeCounterArrow(7)); // Outputs 3
// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.










// 4.Write a function called sumOfFirstAndLast that takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.
// Function Declaration
function sumOfFirstAndLastDeclaration(number) {
    let lastDigit = number % 10;
    while (number >= 10) {
        number = Math.floor(number / 10);
    }
    return number + lastDigit;
}
console.log(sumOfFirstAndLastDeclaration(892)); // Outputs 10
console.log(sumOfFirstAndLastDeclaration(20003)); // Outputs 5

// Function Expression
let sumOfFirstAndLastExpression = function(number) {
    let lastDigit = number % 10;
    while (number >= 10) {
        number = Math.floor(number / 10);
    }
    return number + lastDigit;
};
console.log(sumOfFirstAndLastExpression(892)); // Outputs 10
console.log(sumOfFirstAndLastExpression(20003)); // Outputs 5

// Arrow Function
let sumOfFirstAndLastArrow = number => {
    let lastDigit = number % 10;
    while (number >= 10) {
        number = Math.floor(number / 10);
    }
    return number + lastDigit;
};
console.log(sumOfFirstAndLastArrow(892)); // Outputs 10
console.log(sumOfFirstAndLastArrow(20003)); // Outputs 5
