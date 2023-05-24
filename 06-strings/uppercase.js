const prompt = require("prompt-sync")();

function upCa(str) {
  return String(str.toUpperCase());
}

let input = (prompt("Type in your phrase: "));

console.log(upCa(input));
