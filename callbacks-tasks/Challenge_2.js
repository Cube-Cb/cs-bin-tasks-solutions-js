/*
Challenge 2
Create a function addS that accepts one input and adds an "s" to it.
*/
function addS(word){
    if(typeof(word) === "string") {
        return word + "s";
    } else {
        return console.log("function accepts only the string type")
    };
};

console.log(addS("pizza"));