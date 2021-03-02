/*
Challenge 19
Create a function rating that accepts an array (of functions) and a value. 
All the functions in the array will return true or false. rating should 
return the percentage of functions from the array that return true when 
the value is used as input.

function rating(arrOfFuncs, value) {

}

// Uncomment these to check your work!
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75
*/

function rating(arrOfFuncs, value) {
    return 100 / arrOfFuncs.length * arrOfFuncs.reduce((prev, curr) => curr(value) ? prev + 1 : prev ,0)
}

const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); 
// should log: 100
console.log(rating(checks, 66)); 
// should log: 75


