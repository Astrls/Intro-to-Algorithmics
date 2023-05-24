// allow input from terminal
const prompt = require("prompt-sync")();

// User input
let input = parseInt(prompt("Enter an integer number "));

// Function
function checkPerfect(perf) {
  let divided = [];
  let i = 1;
  let x = 0;

  while (i < perf) {
    x = perf % (perf - i);
    if (x == 0) {
      divided.push(perf - i);
    }
    i++;
  }
  // Check -> console.log(divided);

  let z = parseInt(divided.reduce((a, b) => a + b, 0));

  // Results
  if (perf == z) {
    console.log(`your number ${perf} is a perfect number`);
  } else {
    console.log(
      `your number ${perf} has flaws but that's what makes it special! 🤩`
    );
  }
}

// Run function

checkPerfect(input);
