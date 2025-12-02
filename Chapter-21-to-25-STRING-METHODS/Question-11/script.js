let userInput = prompt("Enter Anything:");

document.write(`User input: ${userInput} <br/>`);
document.write(`Title case: ${userInput[0].toUpperCase() + userInput.slice(1)}`);