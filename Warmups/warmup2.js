/**
 * 1 - Complete the function cube that returns the cube of x:
 */
//Function Declaration
function cube(x) {
    return x ** 3
}
//Function Expression 
let cube = function(x) {
  return x **3;
};
//Arrow Function
let cube = x**3;
/**
 * 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
 */
// Function Declaration
function sameLengthDeclaration(str1, str2) {
  return str1.length === str2.length;
}

// Function Expression
let sameLengthExpression = function(str1, str2) {
  return str1.length === str2.length;
};

// Arrow Function
let sameLengthArrow = (str1, str2) => str1.length === str2.length;
/**
 * 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.
 */
function scoreToGrade(score) {
    function scoreToGrade(score) {
        if (score >= 90) {
          return "A";
        } else if (score >= 80) {
          return "B";
        } else if (score >= 70) {
          return "C";
        } else if (score >= 60) {
          return "D";
        } else {
          return "F";
        }
      }      
}
// Function Declaration
function scoreToGradeDeclaration(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// Function Expression
let scoreToGradeExpression = function(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

// Arrow Function
let scoreToGradeArrow = score => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

/**
 * 4-Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
 * repeatString('dog', 0); // => ''
 * repeatString('dog', 1); // => 'dog'
 * repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
 * repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
 */// Function Declaration
function repeatStringDeclaration(str, count) {
  let result = '';
  while (count > 0) {
      result += str;
      count--;
  }
  return result;
}
// Function Expression
let repeatStringExpression = function(str, count) {
  let result = '';
  while (count > 0) {
      result += str;
      count--;
  }
  return result;
};
// Arrow Function
let repeatStringArrow = (str, count) => {
  let result = '';
  while (count > 0) {
      result += str;
      count--;
  }
  return result;
};
console.log(repeatStringArrow('dog', 0)); // Outputs ''
console.log(repeatStringArrow('dog', 1)); // Outputs 'dog'
console.log(repeatStringArrow('dog', 2)); // Outputs 'dogdog'
console.log(repeatStringArrow('dog', 3)); // Outputs 'dogdogdog'
