// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
    return firstname + " " + lastname;
}

// function expression 

let myPartnerName = function (firstname, lastname) {
    return firstname + " " + lastname;
};


// arrow function 

let PartnerName2 = (firstName, lastName) => {
    return firstName + " " + lastName;
};


// 2-create a function that return true if the number 13 is a multiple of 3 and false if not.*//
//function declaration
function MultipleOf13orNot() {
	let result;
	if (13 % 3) { return false }
	else { return true }
}
//Or
function isThirteenMultipleOfThree() {
    return 13 % 3 === 0;
}
// function expression 
let isThirteenMultipleOfThree = function() {
    return 13 % 3 === 0;
};

// arrow function 
let isThirteenMultipleOfThree = () => 13 % 3 === 0;

// 4-create a function that takes a age as a parameter and return that age in seconds.*//

function ageInSeconds(age) {
    return age * 365 * 24 * 60 * 60;
}

// function expression
let ageInSeconds = function(age) {
    return age * 365 * 24 * 60 * 60;
};
// arrow function 
let ageInSeconds = age => age * 365 * 24 * 60 * 60;
