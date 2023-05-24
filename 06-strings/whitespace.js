const prompt = require("prompt-sync")();

function whitSpc(str) {
  return String(str).trim().split(/\s+/).join(" ");
}

let input = prompt(`Type in your sentence: `);

console.log(whitSpc(input));
