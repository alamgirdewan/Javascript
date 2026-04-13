const shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {
    const number = parseFloat(prompt("Enter a number:"));

    if (number < 0) {
        document.body.innerHTML = "<p>The square root of a negative number is not defined</p>";

    } else {
        const sqrtValue = Math.sqrt(number);
        document.body.innerHTML = `<p>The square root of ${number} is ${sqrtValue}</p>`;
    }
    
} 

else {
    document.body.innerHTML = "<p>The square root is not calculated.</p>";
}