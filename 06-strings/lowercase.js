const prompt = require("prompt-sync")();

function loCa(str) {
  return String(str.toLowerCase());
}

let input = (prompt("Type in your phrase: "));

console.log(loCa(input));
