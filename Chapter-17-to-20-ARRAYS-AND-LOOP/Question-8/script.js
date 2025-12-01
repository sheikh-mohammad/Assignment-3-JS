let A = [24, 53, 78, 91, 12];
let largestNum = 0;

for (let i = 0; i < A.length; i++) {
    if (largestNum < A[i]) {
        largestNum = A[i];
    }
}

document.write(`Array item: ${A} <br/>`);
document.write(`The largest number is ${largestNum}`);