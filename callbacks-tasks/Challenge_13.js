/*
Challenge 13
Create a function prioritize that accepts an array and a callback. 
The callback will return either true or false. 
prioritize will iterate through the array and perform the callback on each element, 
and return a new array, where all the elements that yielded a 
return value of true come first in the array, 
and the rest of the elements come second.

// Challenge 13
function prioritize(array, callback) {

}

// Uncomment these to check your work! 
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); 
// should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
*/

function prioritize(array, callback) {
    newArray = [];
    for(str of array) {
        if(callback(str) === true) {
            newArray.unshift(str);
        } else if( callback(str) === false) {
            newArray.push(str)
        }
    };
    return newArray;
}

const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); 
// should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/*
Добавление/удаление элементов
Мы уже знаем методы, которые добавляют и удаляют элементы из начала или конца:

arr.push(...items) – добавляет элементы в конец,
arr.pop() – извлекает элемент из конца,
arr.shift() – извлекает элемент из начала,
arr.unshift(...items) – добавляет элементы в начало.
*/