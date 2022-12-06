// ----------------- PART I -------------------------------
const fs = require('fs');

//read input file and parse it to array of two arrays for each comportements of rucksack
const input = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n')
const nestedInput = input.map((e) => { 
    let firstArray = [...e].slice(0,e.length/2)
    let secondArray = [...e].slice(e.length/2, e.length)
    return [firstArray, secondArray];
});
// console.log(input.splice(0, 2))


//Find the intersection of the compertaments of each rucksack
const intersectaionArray = nestedInput.map(e => e.reduce((a, b) => a.filter(c => b.includes(c))));

//remove the duplicate letters if there is more than one intersection letters and then flatten the array
const intersectionLettersArray = intersectaionArray.map(e => [...new Set(e)]).flat()



// Generate the map for upper and lower case letters with priority numbers
const upperCaseCharcode = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseAlphabet = upperCaseCharcode.map(e => String.fromCharCode(e));
const lowerCaseCharcode = Array.from(Array(26)).map((e, i) => i + 97);
const lowerCaseAlphabet = lowerCaseCharcode.map(e => String.fromCharCode(e));
const alphabet = [...lowerCaseAlphabet, ...upperCaseAlphabet];

const prioAlphabetObj = {}
alphabet.forEach((e, i) =>{
    prioAlphabetObj[e] = i + 1;
});
// console.log(prioAlphabetObj);


// Get the prioity numbers of each letter
const priorityArray = intersectionLettersArray.map(e => prioAlphabetObj[e]);
// console.log(priorityArray);
console.log(priorityArray.reduce((a, b) => a + b, 0));


// ----------------- PART II -------------------------------


// Created nested array of three arrays for every three lines - for each elf group
const chunkSize = 3
const chunkedInputArray = []
for (let i = 0; i < input.length; i += chunkSize) {
    const chunk = input.slice(i, i + chunkSize);
    chunkedInputArray.push(chunk.map(e => [...e]));
}
console.log(chunkedInputArray.slice(0,2));


// Find the intersection letter for each group
const intersectionBadgesArray = chunkedInputArray.map(e => e.reduce((a, b) => a.filter(c => b.includes(c))));

//remove duplicated letters if there is more than one intersection letter
const badgesArray = intersectionBadgesArray.map(e => [...new Set(e)])

// Get the prioity numbers of each badge letter
const priorityBadgeArray = badgesArray.map(e => prioAlphabetObj[e]);
// console.log(priorityArray);
console.log(priorityBadgeArray.reduce((a, b) => a + b, 0));