//Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
console.log("first function")
function addTwo() {
    return function (num) {
        return num + 2;
    };
};

let twoAdd = addTwo();
console.log(twoAdd(2));

//or
console.log("second function")
function addTwo02(num) {
    return num + 2;
};

console.log(addTwo02(20))

