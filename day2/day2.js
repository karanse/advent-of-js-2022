// ----------------- PART I -------------------------------
const fs = require('fs');

//read the input file and convert toarray of numbers
const input = fs.readFileSync('./input.txt','utf8').toString().trim().split('\n');

const map = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
}

function scoreCalculator(map, input) {
    let resultArray =[]
    input.forEach(i => resultArray.push(map[i]));
    const sumScore = resultArray.reduce((a, b) => a + b, 0)
    return sumScore;
}
console.log(scoreCalculator(map, input));

// ----------------- PART II ------------------------



const secondMap = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7,
}

console.log(scoreCalculator(secondMap, input));