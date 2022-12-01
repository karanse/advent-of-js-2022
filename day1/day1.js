const fs = require('fs');

//read the input file and convert to nested array of numbers
const input = fs.readFileSync('./input.txt','utf8').toString().trim().split('\n\n').map((e) => {
            let [...item] = e.split('\n');
            return item.map(str => Number(str));
        });

console.log(input)
console.log(typeof(input))
console.log(input.length)


//create an object with index and sum value of each array
const obj = input.map((item) => [item.reduce((a, b) => a + b, 0)])
console.log(Math.max(...obj.flat()))

// console.log(obj)
// console.log(obj.length)
// console.log(obj.flat())


