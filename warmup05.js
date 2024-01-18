//1.Write a function to print all the even numbers before the given parameter.
    // Function Declaration
function printEvenNumbersDeclaration(n) {
  for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }
  }
}

// Function Expression
let printEvenNumbersExpression = function(n) {
  for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }
  }
};

// Arrow Function
let printEvenNumbersArrow = n => {
  for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }
  }
};

      
//2.Write a function to find the power of a number using a for loop.
// Function Declaration
function powerDeclaration(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
      result *= base;
  }
  return result;
}

// Function Expression
let powerExpression = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
      result *= base;
  }
  return result;
};

// Arrow Function
let powerArrow = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
      result *= base;
  }
  return result;
};

//3.Write a function called sumOfFirstAndLast that 
//takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.

// Function Declaration
function sumOfFirstAndLastDeclaration(num) {
  let lastDigit = num % 10;
  while (num >= 10) {
      num = Math.floor(num / 10);
  }
  return num + lastDigit;
}

// Function Expression
let sumOfFirstAndLastExpression = function(num) {
  let lastDigit = num % 10;
  while (num >= 10) {
      num = Math.floor(num / 10);
  }
  return num + lastDigit;
};

// Arrow Function
let sumOfFirstAndLastArrow = num => {
  let lastDigit = num % 10;
  while (num >= 10) {
      num = Math.floor(num / 10);
  }
  return num + lastDigit;
};

//4.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.

function multiplyBy10NTimes(num, n) {
    let result = num
    for (let i = 0; i < n; i++) {
      result *= 10
    }
    return result
  }  

  // Function Declaration
function multiplyBy10NTimesDeclaration(num, n) {
  for (let i = 0; i < n; i++) {
      num *= 10;
  }
  return num;
}

// Function Expression
let multiplyBy10NTimesExpression = function(num, n) {
  for (let i = 0; i < n; i++) {
      num *= 10;
  }
  return num;
};

// Arrow Function
let multiplyBy10NTimesArrow = (num, n) => {
  for (let i = 0; i < n; i++) {
      num *= 10;
  }
  return num;
};

//   //function multiplyBy10NTimes(num, n) {
//     let result = num
//     for (let i = 1; i  <= n; i++) {
//       result *= 10
//     }
//     return result
//   }  
