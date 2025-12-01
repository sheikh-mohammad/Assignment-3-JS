let A = [24, 53, 78, 91, 12];
let smallestNum = A[0];

for (let i = 0; i < A.length; i++) {
    if (smallestNum > A[i]) {
        smallestNum = A[i];
    }
}

document.write(`Array item: ${A} <br/>`);
document.write(`The smallest number is ${smallestNum}`);