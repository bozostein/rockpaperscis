// variable for 3 options

let options = ["rock", "paper", "scissors"];




// Function to let computer choose an option from "options" variable. It's either 0, 1 or 2.
function getComputerChoice() {
    const number = Math.floor(Math.random() * options.length);
    return number;
}



// Function to get player's choice by prompt function. 
// When player writes an option like "rock" getPlayerFunction, takes the input, makes it all lowercase and returns it. 

function getPlayerChoice() {
    let playerSelection = false;
    
    while (playerSelection == false){
        const selection = prompt("Rock Paper Scissors");

        if (playerSelection == null) {
            console.log("You've quit the game");
            return null;
        }

        const selectionInLower = selection.toLowerCase();

        if (selection.includes(selectionInLower)) {
            playerSelection = true;
            return selectionInLower;
        }
}   }



getPlayerChoice()