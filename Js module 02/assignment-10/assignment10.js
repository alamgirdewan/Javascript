const numCandidates = parseInt(prompt("Enter the number of candidates:"));
const candidates = [];

for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({
        name: name,
        votes: 0
    });
}

const numVoters = parseInt(prompt("Enter the number of voters:"));

for (let i = 0; i < numVoters; i++) {
    const voteName = prompt(`Voter ${i + 1}, who do you vote for? (Leave empty for empty vote)`);
    if (voteName.trim() !== "") {
        const candidate = candidates.find(c => c.name.toLowerCase() === voteName.toLowerCase());
        if (candidate) {
            candidate.votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates.length > 0) {
    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
    console.log("results:");
    candidates.forEach(c => {
        console.log(`${c.name}: ${c.votes} votes`);
    });
}