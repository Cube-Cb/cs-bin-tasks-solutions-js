function multiplyByTwo(num){
    if(typeof(num) === "number") {
        return num * 2
    } else {
        return console.log("the function accepts only the number type")
    }
}
console.log(multiplyByTwo(1));
/*
Challenge 3
Create a function called map that takes two inputs:
1.an array of numbers (a list of numbers).
2.a 'callback' function - a function that is applied to each element of the array (inside of the function 'map').
Have map return a new array filled with numbers that are the result of 
using the 'callback' function on each element of the input array.
map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
*/


function map(array, callback) {
    let resultArray = []
    for(let arr of array) {
        resultArray.push(callback(arr));
    }
    return resultArray;
};
console.log(map([1,2,3,4,5], multiplyByTwo));