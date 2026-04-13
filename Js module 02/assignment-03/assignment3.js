const dogs = [];

for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Enter dog name ${i + 1}:`));
}

dogs.sort().reverse();
let ul = "<ul>";

for (let dog of dogs) ul += `<li>${dog}</li>`;
ul += "</ul>";

document.body.innerHTML = ul;