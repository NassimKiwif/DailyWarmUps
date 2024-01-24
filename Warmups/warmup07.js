/**
 * 1- write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 * @function reverseArray
 * @param {array} array
 * @return {Array}
 */

let reverseArrayyy = (array) => {
    let reversedd=[]
    for (let index = array.length - 1; index >= 0; index--) {
        reversedd.push(array.pop())
    }  
    return reversedd
}
//Or 
// Function Declaration
function reverseArrayDeclaration(arr) {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}
console.log(reverseArrayDeclaration([1, 2, 3]))

// Function Expression
let reverseArrayExpression = function(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
};
console.log(reverseArrayExpression([1, 2, 3]))

// Arrow Function
let reverseArrayArrow = arr => {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}



/**
 * 2 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @function objKey
 * @param {Object} obj
 * @return {Array}
 */

// Function Declaration
function objKeyDeclaration(obj) {
    return Object.keys(obj)
}
console.log(objKeyDeclaration({name: 'ahmed', age: 20}))

// Function Expression
let objKeyExpression = function(obj) {
    return Object.keys(obj)
};
console.log(objKeyExpression({name: 'ahmed', age: 20}))   // Outputs ['name', 'age']

// Arrow Function
let objKeyArrow = obj => Object.keys(obj)
console.log(objKeyArrow({name: 'ahmed', age: 20}))

    


/**
 * 3 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @function objLength
 * @param {Object} obj
 * @return number
 */
// Function Declaration
function objLengthDeclaration(obj) {
    return Object.keys(obj).length;
}
console.log(objLengthDeclaration({name: 'ahmed', age: 20})); // Outputs 2

// Function Expression
let objLengthExpression = function(obj) {
    return Object.keys(obj).length;
};
console.log(objLengthExpression({name: 'ahmed', age: 20})); // Outputs 2

// Arrow Function
let objLengthArrow = obj => Object.keys(obj).length;
console.log(objLengthArrow({name: 'ahmed', age: 20})); // Outputs 2



/**
 * 4-Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */
// Function Declaration
function findAllDeclaration(array, n) {
    let index = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            index.push(i);
        }
    }
    return index;
}
console.log(findAllDeclaration([6, 9, 3, 4, 3, 82, 11], 3)); // Outputs [2, 4]

// Function Expression
let findAllExpression = function(array, n) {
    let index = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            index.push(i);
        }
    }
    return index;
};
console.log(findAllExpression([6, 9, 3, 4, 3, 82, 11], 3)); // Outputs [2, 4]

// Arrow Function
let findAllArrow = (array, n) => {
    let index = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            index.push(i);
        }
    }
    return index;
};
console.log(findAllArrow([6, 9, 3, 4, 3, 82, 11], 3)); // Outputs [2, 4]

