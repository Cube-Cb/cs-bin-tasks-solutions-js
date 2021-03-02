/*
Challenge 7
Construct a function intersection that compares 
input arrays and returns a new array with elements 
found in all of the inputs. BONUS: Use reduce!

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
*/
function intersection(arrays) { 
    const args = Array.from(arguments).slice(1)
    return arrays.reduce((prev, curr) => {
        if(args.every(item => item.includes(curr))) {
            prev.push(curr)
        }
        return prev;
    },[])
}
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]