var colors = ["Red", "Green", "Blue"];

document.write(`Colors Array: ${colors} <br/> <br/>`);

var colorToStart = prompt("Enter:, What color you wants to add to the beginning:");

colors.unshift(colorToStart);

document.write(`Colors Array:, after adding to start: ${colors} <br/>`);

var colorToEnd = prompt("Enter:, What color you wants to add to the end:");

colors.push(colorToEnd);

document.write(`Colors Array:, after adding to end: ${colors} <br/>`);

colors.unshift("Indigo", "Violet");

document.write(`Colors Array:, after adding two more colors to beginning: ${colors} <br/>`);

colors.shift();

document.write(`Colors Array:, after deleting first element from beginning: ${colors} <br/>`);

colors.pop();

document.write(`Colors Array:, after deleting last element from end: ${colors} <br/>`);

var deletingColorIndex = +prompt("Enter:, At which index you wants to delete color(s):");

var deletingColorCounts = +prompt("Enter:, How many colors you wants to delete:");

colors.splice(deletingColorIndex, deletingColorCounts);

document.write(`Colors Array:, after deleting number of elements from user-defined index: ${colors} <br/>`);