const startYear = parseInt(prompt("Enter start year:"));
const endYear = parseInt(prompt("Enter end year:"));

let listHTML = "<ul>";

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        listHTML += `<li>${year}</li>`;
    }
}

listHTML += "</ul>";
document.body.innerHTML = listHTML;