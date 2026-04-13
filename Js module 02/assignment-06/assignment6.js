function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
let ul = "<ul>";
let result;
do {
    result = rollDice();
    ul += `<li>${result}</li>`;
} while (result !== 6);
ul += "</ul>";
document.body.innerHTML = ul;