const prompt = require("prompt-sync")();

function convName(x) {
  arr = String(x).split(",");
  fName = arr[1].trimStart();
  sName = arr[0];
  return String(`${fName} ${sName}`);
}

let input = prompt(`Type in your full name in this format "Doe, John": `);

console.log(convName(input));
