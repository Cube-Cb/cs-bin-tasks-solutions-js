/*
Challenge 5
In the first part of this challenge, 
you're going to rebuild map as mapWith. 
This time you're going to use forEach inside of 
mapWith instead of using a for loop.

function mapWith(array, callback) {
}
*/
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
function forEach(array, callback) {
    for (let arr of array) {
        callback(arr)
    }
}
function mapWith(array, callback) {
    let newArray = [];
    forEach(array, function(elem){
        newArray.push(callback(elem))
    });
    return newArray;
};

let arrayOfMapWith = mapWith(letters, function(elem){
    return elem + "s";
});
console.log(arrayOfMapWith);