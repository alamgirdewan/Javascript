const numDice = parseInt(prompt("Enter number of dice:"));
const targetSum = parseInt(prompt("Enter the sum of interest:"));
const iterations = 10000;
let matches = 0;

for (let i = 0; i < iterations; i++) {
    let currentSum = 0;
    for (let d = 0; d < numDice; d++) {
        currentSum += Math.floor(Math.random() * 6) + 1;
    }
    if (currentSum === targetSum) {
        matches++;
    }
}

const probability = (matches / iterations) * 100;
document.body.innerHTML = `<p>Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%</p>`;