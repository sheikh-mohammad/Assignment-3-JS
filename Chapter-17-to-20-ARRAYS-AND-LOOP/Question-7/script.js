A = ["cake", "apple pie", "cookie", "chips", "patties"];

var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

if (A.includes(item)) {
    document.write(`${item} is <b>available</b> at index ${A.indexOf(item)} in our bakery`);
} else {
    document.write(`We are sorry. ${item} is <b>not available</b> in our bakery`);
}