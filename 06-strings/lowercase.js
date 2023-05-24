const prompt = require("prompt-sync")();

function loCa(x) {
  return String(x.toLowerCase());
}

let input = (prompt("Type in your phrase: "));

console.log(loCa(input));
