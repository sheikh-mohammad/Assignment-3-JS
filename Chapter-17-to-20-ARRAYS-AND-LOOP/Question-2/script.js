var multidimensionalArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (let i = 0; i < multidimensionalArray.length; i++) {
    for (let j = 0; j < multidimensionalArray[i].length; j++) {
        document.write(`${multidimensionalArray[i][j]} `);
    }
    document.write("<br/>");
}