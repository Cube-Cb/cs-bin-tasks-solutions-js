/*
Challenge 6
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

Here's how it works. The function has an "accumulator value" which starts as
the initialValue and accumulates the output of each loop. The array is 
iterated over, passing the accumulator and the next array element as 
arguments to the callback. The callback's return value becomes the 
new accumulator value. The next loop executes with this new accumulator value.
In the example above, the accumulator begins at 0. add(0,4) is called. 
The accumulator's value is now 4. Then add(4, 1) to make it 5. 
Finally add(5, 3) brings it to 8, which is returned.
*/
let nums = [4, 1, 3]
function reduce(array, fn, start = null) {
    let i = 0;
    if(start == null) {
        i = 1
        start = array[0]
    }
    for (; i < array.length; i++) {
        start = fn(start, array[i]);
    }
    return start;
}
const add = function (a, b) { return a + b; }

console.log(reduce(nums, add));