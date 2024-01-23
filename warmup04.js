/**
 *! 1 Write a function named helloWorld that:
 *! takes 1 argument, a language code (e.g. "fr", "es", "en")
 *! returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 *! ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *!    helloWorld('es') ==> 'Hola, Mundo'
 *!    helloWorld('') ==> 'Hello, World'
 *!
 *! @function helloWorld
 *! @param {string} str
 *! @return {string}
 */

// Function Declaration
function helloWorldDeclaration(lang) {
    if (lang === 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang === 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

// Function Expression
let helloWorldExpression = function(lang) {
    if (lang === 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang === 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
};

// Arrow Function
let helloWorldArrow = lang => {
    if (lang === 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang === 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
};

/**
 *? 2 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 *? followed by a number starting from zero(solve it using while loop).
 *? example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */
// Function Declaration
function reverseStrDeclaration(str) {
    let reversed = '';
    let index = str.length - 1;
    let count = 0;
    while (index >= 0) {
        reversed += str[index] + count;
        index--;
        count++;
    }
    return reversed;
}

// Function Expression
let reverseStrExpression = function(str) {
    let reversed = '';
    let index = str.length - 1;
    let count = 0;
    while (index >= 0) {
        reversed += str[index] + count;
        index--;
        count++;
    }
    return reversed;
};

// Arrow Function
let reverseStrArrow = str => {
    let reversed = '';
    let index = str.length - 1;
    let count = 0;
    while (index >= 0) {
        reversed += str[index] + count;
        index--;
        count++;
    }
    return reversed;
};
/**
// * 3 Write a function called laugh() that takes one parameter,
// * num that represents the number of "ha"s to return.
// * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */

// Function Declaration
function laughDeclaration(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += 'ha';
    }
    return result;
}

// Function Expression
let laughExpression = function(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += 'ha';
    }
    return result;
};

// Arrow Function
let laughArrow = num => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += 'ha';
    }
    return result;
};

