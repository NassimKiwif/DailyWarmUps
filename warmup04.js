/**
 * 1 Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "fr", "es", "en")
 * returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 * ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *    helloWorld('es') ==> 'Hola, Mundo'
 *    helloWorld('') ==> 'Hello, World'
 *
 * @function helloWorld
 * @param {string} str
 * @return {string}
 */

function helloWorld(str) {
    if (str === "fr") {
        return "Bonjour tout le monde"
    } else if (str === "es") {
        return "Hola,Mundo"
    } else if (str === "en") {
        return "Hello, World"
    }
}
/**
 * 2 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 * followed by a number starting from zero(solve it using while loop).
 * example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */





function reverseStr(str) {
    let result = ""
    let counter =0
    let i = str.length-1;
    while (i >= 0) {
        result += str[i]+counter
        i--
        counter++
    }
    return result
}
function reverseStr(str) {
    let result = ""
    let i = str.length-1;
    while (i >= 0) {
        result += str[i]+(str.length-1-i)
        i--
    }
    return result
}

/**
 * 3 Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */

function laugh(num) {
    function laugh(num) {
        let str="ha"
        let result = ""
        let i = 1
        while (i < num) {
            result += "ha"
            i++
        }
        return result;
    }
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
