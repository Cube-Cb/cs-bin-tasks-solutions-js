/*
Challenge 14
Create a function countBy that accepts an array and a callback, 
and returns an object. countBy will iterate through the array 
and perform the callback on each element. 
Each return value from the callback will be saved as a key on 
the object. The value associated with each key will be the 
number of times that particular return value was returned.

function countBy(array, callback) {

}

// Uncomment these to check your work! 
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }
*/
function countBy(array, callback) {
    let newObj = {};
    for(num of array) {
        if(callback(num) in newObj){
            newObj[callback(num)] += 1
        } else {
         newObj[callback(num)] = 1
        }
    }
    return newObj;
}
console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) {
    return 'even';
} else {
    return 'odd';
}
})); 
// should log: { odd: 3, even: 2 }
