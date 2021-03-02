/*
Challenge 4
The function forEach takes an array and a callback, 
and runs the callback on each element of the array. 
forEach does not return anything.

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
*/
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

function forEach(array, callback) {
    for(let arr of array) {
        callback(arr)
    }
}


forEach(letters, function(elem){
    alphabet = alphabet + elem;
})
console.log(alphabet);
