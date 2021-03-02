/*
Challenge 18
Create a function objFilter that accepts an object and a callback. 
objFilter should make a new object, and then iterate through 
the passed-in object, using each key as input for the callback. 
If the output from the callback is equal to the corresponding value, 
then that key-value pair is copied into the new object. objFilter 
will return this new object.

function objFilter(obj, callback) {

}

// Uncomment these to check your work!
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

*/

function objFilter(obj, callback) {
    let newObj = {};
    for(let key in obj) {
        if(callback(key) == obj[key]) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); 
// should log: { 2: 1, 6: 3 }