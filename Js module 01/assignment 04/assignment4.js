const studentName = prompt("Enter student name:");
const rand = Math.floor(Math.random() * 4) + 1;

let house;

if (rand === 1) house = "Gryffindor";
else if (rand === 2) house = "Slytherin";
else if (rand === 3) house = "Hufflepuff";
else house = "Ravenclaw";

document.body.innerHTML = `<p>${studentName}, you are ${house}.</p>`;