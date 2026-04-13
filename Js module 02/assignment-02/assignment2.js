const count = parseInt(prompt("Number of participants:"));
const participants = [];

for (let i = 0; i < count; i++) {
    participants.push(prompt(`Name of participant ${i + 1}:`));
}
participants.sort();

let ol = "<ol>";
for (let p of participants) ol += `<li>${p}</li>`;

ol += "</ol>";
document.body.innerHTML = ol;
