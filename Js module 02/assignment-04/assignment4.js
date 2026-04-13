const numbers = [];
while (true) {
    let num = parseFloat(prompt("Enter a number (0 to stop):"));
    if (num === 0) break;
    numbers.push(num);
}

numbers.sort((a, b) => b - a);
console.log("Largest to smallest:");
for (let n of numbers) console.log(n);