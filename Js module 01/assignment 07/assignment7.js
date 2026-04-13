const numDice = parseInt(prompt("How many dice rolls?"));

let sum = 0;

for (let i = 0; i < numDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.body.innerHTML = `<p>The sum of the results: ${sum}</p>`;