/*
Challenge 17
Create a function commutative that accepts two callbacks and a value. 
commutative will return a boolean indicating if the passing the value 
into the first function, and then passing the resulting output into 
the second function, yields the same output as the same operation 
with the order of the functions reversed (passing the value into 
the second function, and then passing the output into the first function).

function commutative(func1, func2, value) {

}

// Uncomment these to check your work! 
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); 
// should log: true
// console.log(commutative(multBy3, subtract5, 10)); 
// should log: false
// console.log(commutative(divBy4, subtract5, 48)); 
// should log: false
*/
function commutative(func1, func2, value) {
    return func1(func2(value)) == func2(func1(value))
}

const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); 
// should log: true
console.log(commutative(multBy3, subtract5, 10)); 
// should log: false
console.log(commutative(divBy4, subtract5, 48)); 
// should log: false