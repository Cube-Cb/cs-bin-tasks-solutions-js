/*
Challenge 16
Create a function goodKeys that accepts an object and a callback. 
The callback will return either true or false. 
goodKeys will iterate through the object and perform the callback on each value. 
goodKeys will then return an array consisting only the keys 
whose associated values yielded a true return value from the callback.

function goodKeys(obj, callback) {

}

// Uncomment these to check your work! 
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
*/

function goodKeys(obj, callback) {
    let arr = [];
    for(key in obj) {
        if(callback(obj[key]) == true) {
            arr.push(key);
        };
    };
    return arr;
};

const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); 
// should log: ['charlie', 'dee']

