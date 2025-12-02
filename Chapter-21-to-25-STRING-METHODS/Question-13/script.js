let userName = prompt("Enter Username:");

for (let i = 0; i < userName.length; i++) {
    if (userName.charCodeAt(i) == 33) {
        alert("Please enter a valid username");
    }
    else if (userName.charCodeAt(i) == 44) {
        alert("Please enter a valid username");
    }
    else if (userName.charCodeAt(i) == 46) {
        alert("Please enter a valid username");
    }
    else if (userName.charCodeAt(i) == 64) {
        alert("Please enter a valid username");
    }
}