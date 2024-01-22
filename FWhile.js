// 1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it.
// Function Declaration
function sumOfNDeclaration(n) {
    let sum = 0
    while (n > 0) {
        sum += n
        n--
    }
    return sum
}
// Function Expression
let sumOfNExpression = function(n) {
    let sum = 0
    while (n > 0) {
        sum += n
        n--
    }
    return sum
}
// Arrow Function
let sumOfNArrow = n => {
    let sum = 0
    while (n > 0) {
        sum += n
        n--
    }
    return sum
}
console.log(sumOfNArrow(5)); // Outputs 15
console.log(sumOfNArrow(3)); // Outputs 6

// 2.Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number.
// Function Declaration
function factorialOfNDeclaration(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    let factorial = 1
    while (n > 1) {
        factorial *= n
        n--
    }
    return factorial
}
// Function Expression
let factorialOfNExpression = function(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    let factorial = 1
    while (n > 1) {
        factorial *= n
        n--
    }
    return factorial
};
// Arrow Function
let factorialOfNArrow = n => {
    if (n === 0 || n === 1) {
        return 1
    }
    let factorial = 1
    while (n > 1) {
        factorial *= n
        n--
    }
    return factorial
};
console.log(factorialOfNArrow(5)); // Outputs 120
console.log(factorialOfNArrow(3)); // Outputs 6
// 3.Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter.
// Function Declaration
function repeatStringDeclaration(string, num) {
    let result = ''
    while (num > 0) {
        result += string
        num--
    }
    return result
}
// Function Expression
let repeatStringExpression = function(string, num) {
    let result = ''
    while (num > 0) {
        result += string;
        num--
    }
    return result
};
// Arrow Function
let repeatStringArrow = (string, num) => {
    let result = ''
    while (num > 0) {
        result += string
        num--
    }
    return result
};
console.log(repeatStringArrow("Hi", 5)); // Outputs "HiHiHiHiHi"
console.log(repeatStringArrow("dog", 3)); // Outputs "dogdogdog"
// 4.Write a function called countMinMax that takes two numbers as parameters and returns the range.
// Function Declaration
function countMinMaxDeclaration(min, max) {
    let range = 0
    while (min < max) {
        range++
        min++
    }
    return range
}
// Function Expression
let countMinMaxExpression = function(min, max) {
    let range = 0
    while (min < max) {
        range++
        min++
    }
    return range
};
// Arrow Function
let countMinMaxArrow = (min, max) => {
    let range = 0
    while (min < max) {
        range++
        min++
    }
    return range
};
console.log(countMinMaxArrow(10, 15)); // Outputs 5
console.log(countMinMaxArrow(0, 3)); // Outputs 3
// 5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers beginning at the num1 and excluding num2.
// Function Declaration
function sumMinToMaxDeclaration(min, max) {
    let sum = 0
    while (min < max) {
        sum += min
        min++
    }
    return sum
}
// Function Expression
let sumMinToMaxExpression = function(min, max) {
    let sum = 0
    while (min < max) {
        sum += min
        min++
    }
    return sum
};
// Arrow Function
let sumMinToMaxArrow = (min, max) => {
    let sum = 0
    while (min < max) {
        sum += min
        min++
    }
    return sum
}
console.log(sumMinToMaxDeclaration(1, 5)); // Outputs 10
console.log(sumMinToMaxDeclaration(3, 7)); // Outputs 18
// 6.Write a function called productMinToMax that takes two numbers as parameters and returns the product between the two integers beginning at the num1 and excluding num2.
// Function Declaration
function productMinToMaxDeclaration(min, max) {
    if (min >= max) return 0;
    let product = 1;
    while (min < max) {
        product *= min;
        min++;
    }
    return product;
}
// Function Expression
let productMinToMaxExpression = function(min, max) {
    if (min >= max) return 0;
    let product = 1;
    while (min < max) {
        product *= min;
        min++;
    }
    return product;
};
// Arrow Function
let productMinToMaxArrow = (min, max) => {
    if (min >= max) return 0;
    let product = 1;
    while (min < max) {
        product *= min;
        min++;
    }
    return product;
};
console.log(productMinToMaxArrow(1, 5)); // Outputs 24
console.log(productMinToMaxArrow(3, 7)); // Outputs 360
// 7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.
// Function Declaration
// Function Declaration
function multiplyBy10NTimesDeclaration(num, times) {
    let result = num;
    while (times > 0) {
        result *= 10;
        times--;
    }
    return result;
}
// Function Expression
let multiplyBy10NTimesExpression = function(num, times) {
    let result = num;
    while (times > 0) {
        result *= 10;
        times--;
    }
    return result;
};
// Arrow Function
let multiplyBy10NTimesArrow = (num, times) => {
    let result = num;
    while (times > 0) {
        result *= 10;
        times--;
    }
    return result;
};
console.log(multiplyBy10NTimesArrow(3, 3)); // Outputs 3000
console.log(multiplyBy10NTimesArrow(5, 2)); // Outputs 500

// 8.Write a function called countCharAtIndex that takes three parameters, a string, an index, and another string. This function should use the index to find the corresponding character in the first string and loop through the second string and count how many times that character occurs.
// Function Declaration
function countCharAtIndexDeclaration(string1, index, string2) {
    if (index < 0 || index >= string1.length) return 0;  // Handle invalid index

    let count = 0;
    let charToFind = string1[index];
    let i = 0;
    while (i < string2.length) {
        if (string2[i] === charToFind) {
            count++;
        }
        i++;
    }
    return count;
}
// Function Expression
let countCharAtIndexExpression = function(string1, index, string2) {
    if (index < 0 || index >= string1.length) return 0;

    let count = 0;
    let charToFind = string1[index];
    let i = 0;
    while (i < string2.length) {
        if (string2[i] === charToFind) {
            count++;
        }
        i++;
    }
    return count;
};
// Arrow Function
let countCharAtIndexArrow = (string1, index, string2) => {
    if (index < 0 || index >= string1.length) return 0;

    let count = 0;
    let charToFind = string1[index];
    let i = 0;
    while (i < string2.length) {
        if (string2[i] === charToFind) {
            count++;
        }
        i++;
    }
    return count;
};
console.log(countCharAtIndexArrow("hello", 2, "lol")); // Outputs 2
console.log(countCharAtIndexArrow("world", 3, "Hello World")); // Outputs 3

