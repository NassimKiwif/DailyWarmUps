//1.Write a function to print all the even numbers before the given parameter.
    function printEvenNumbers(n) {
        for (let i = 0; i < n; i++) {
          if (i % 2 === 0) {
            console.log(i);
          }
        }
      }
      
//2.Write a function to find the power of a number using a for loop.
function power(base, exponent) {
    let result = 1
    for (let i = 0; i < exponent; i++) {
      result *= base
    }
    return result
  }
//3.Write a function called sumOfFirstAndLast that 
//takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.

//4.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.

function multiplyBy10NTimes(num, n) {
    let result = num;
    for (let i = 0; i < n; i++) {
      result *= 10;
    }
    return result;
  }  
