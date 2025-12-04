let text = "The quick brown fox jumps over the lazy dog";

let textArr = text.toLowerCase();

textArr = textArr.split(" ");

let count = 0

for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] == "the") {
        count++;
    }
}

document.write(`Text: ${text} <br/>`);
document.write(`There are ${count} occurence(s) of word 'the'`);