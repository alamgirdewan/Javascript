const numbers = [];

while (true) {
    let num = parseFloat(prompt("Enter a number:"));
    if (numbers.includes(num)) {
        alert("The number has already been given.");
        break;
    }
    numbers.push(num);
}

numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers);