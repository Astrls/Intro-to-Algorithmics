// allow input from terminal
const prompt = require("prompt-sync")();

tab = [];
verif = [];

//user input
for (let i = 0; i < 4 ; i++) {
    tab.push(parseInt((prompt("Type in any number: "))));
}

console.log(tab);

const N = (tab.length -1); // = 4


for (let i = 1 ; i <= N ; i++){
    if (tab[N] >= tab[N-i] >= tab[N-i-1] ) {
        verif.push(true);
    } 
    else {
        verif.push(false);
    }
} 

console.log(verif);

if (verif[0,1,2] == true) {
    console.log("TRUE")
}
else {
    console.log("FALSE")
}





