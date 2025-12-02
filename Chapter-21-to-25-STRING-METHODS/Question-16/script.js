var university = "University of Karachi";

university = university.split("");

for (let i = 0; i < university.length; i++) {
    document.write(`${university[i]}<br/>`);
}