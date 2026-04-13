const n1 = parseInt(prompt("Enter first integer:"));
const n2 = parseInt(prompt("Enter second integer:"));
const n3 = parseInt(prompt("Enter third integer:"));

const sum = n1 + n2 + n3;
const product = n1 * n2 * n3;
const average = sum / 3;

document.body.innerHTML = `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;