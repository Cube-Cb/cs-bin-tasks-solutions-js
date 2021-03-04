/*
Challenge 23
Define a function myFunc that takes an array and a callback.
myFunc should pass each element from the array (in order) into the callback.
If the callback returns true, myFunc should return the index of the current element.
If the callback never returns true, myFunc should return -1;

function myFunc(array, callback) {

}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// Uncomment these to check your work!
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1
*/

function myFunc(array, callback) {
    for(num of array) {
        if(callback(num)) {
             return array.indexOf(num)
        }
    }
    return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
    return (num % 2 !== 0);
  }

console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1