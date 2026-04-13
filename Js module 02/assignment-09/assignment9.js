function even(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const originalArray = [2, 7, 4, 9, 10, 13];
const filteredArray = even(originalArray);

console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", filteredArray);

document.body.innerHTML = `
    <p>Original Array: [${originalArray}]</p>
    <p>Even Numbers Array: [${filteredArray}]</p>
    <p>Check the console for detailed output.</p>
`;