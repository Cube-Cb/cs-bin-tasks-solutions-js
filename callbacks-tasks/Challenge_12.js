/*
Challenge 12
Create a function majority that accepts an array and a callback. 
The callback will return either true or false. 
majority will iterate through the array and perform the 
callback on each element until it can be determined 
if the majority of the return values from the callback are true. 
If the number of true returns is equal to the number of 
false returns, majority should return false.

function majority(array, callback) {

}

// Uncomment these to check your work! 
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
*/


function majority(array, callback) {
    let counterTrue = 0;
    let counterFalse = 0;
    for(num of array) {
        if(callback(num) == true ) {
            counterTrue = counterTrue + 1;
        } else {
            counterFalse = counterFalse + 1;
        }
    }
    if(counterTrue == counterFalse) {
        return "Количество true и false одинаковы поэтому = " + false;
    } else if(counterTrue != counterFalse) {
        return "Количество true либо false больше чем true либо false поэтому = " + true;
    }
}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false