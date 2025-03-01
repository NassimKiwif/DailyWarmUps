/**
 * 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @function objKey
 * @param {Object} obj
 * @return {Array}
 */

function objKey(object){
    let array=[]
    for (let key in object) {
        array.push(key)
        }
       return array 
    }




/**
 * 2 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @function objLength
 * @param {Object} obj
 * @return number
 */
function objLengthh(object){
    let array=[]
    for (let key in object) {
        array.push(key)
        }
       return array.length
    }
/**
 * 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @function objSort
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */
function objSort(array){
    return array.sort((a,b)=>a.id-b.id)
}
