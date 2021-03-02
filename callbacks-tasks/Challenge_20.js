/*
Challenge 20
Create a function pipe that accepts an array (of functions) and a value. 
pipe should input the value into the first function in the array, 
and then use the output from that function as input for the second function, 
and then use the output from that function as input for the third function, 
and so forth, until we have an output from the last function in the array. 
pipe should return the final output.

function pipe(arrOfFuncs, value) {

}

//  Uncomment these to check your work!
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
*/

function pipe(arrOfFuncs, value) {
    return arrOfFuncs.reduce(function(prev, curr){
        return curr(prev);
    },value)
}

const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); 
// should log: 'CATcatCATcat'