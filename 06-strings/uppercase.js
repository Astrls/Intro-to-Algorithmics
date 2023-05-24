const prompt = require("prompt-sync")();

function upCa(x) {
  return String(x.toUpperCase());
}

let input = (prompt("Type in your phrase: "));

console.log(upCa(input));
