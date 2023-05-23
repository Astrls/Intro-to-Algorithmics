// allow input from terminal
const prompt = require("prompt-sync")();

//Description
console.log("Throwing the dice");
const throws =[];

//action of rolling the dice
function rolldice(maxLimit = 3){

    return Math.floor(Math.random() * 3);
}

//Loop dice roll 3 times
for (let i = 0; i < 3; i++) {
    
    throws.push(rolldice());
}

//Display results of rolls
console.log(throws);

//Create object for total throws
const elementCounts = {}
throws.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

//Calculate length of object
roll = (Reflect.ownKeys(elementCounts).length);

console.log(elementCounts);

//Display results based on object length
if (roll == 3) {
    console.log("No luck");
}

else if (roll == 2) {
    console.log("A pair, nice!");
}

else {
    console.log("A triplet, lucky you!");
}