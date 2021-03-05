/*
Challenge 24
Write a function myForEach that accepts an array and a callback function.
Your function should pass each element of the array (in order)
into the callback function. The behavior of this function should
mirror the functionality of the native .forEach() 
JavaScript array method as closely as possible.

function myForEach(array, callback) {

}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// Uncomment these to check your work!
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
*/
function myForEach(array, callback) {
    for(let item of array) {
        callback(item);
    }
}

let sum = 0;

function addToSum(num) {
    sum += num;
}

const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6

