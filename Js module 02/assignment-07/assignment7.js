function rollCustomDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
const sides = parseInt(prompt("How many sides?"));
let ul = "<ul>";
let result;
do {
    result = rollCustomDice(sides);
    ul += `<li>${result}</li>`;
} while (result !== sides);
ul += "</ul>";

document.body.innerHTML = ul;