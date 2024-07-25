// variable for 3 options

let options = ["rock", "paper", "scissors"];




// Function to let computer choose an option from "options" variable. It's either 0, 1 or 2.
function getComputerChoice() {
    const number = Math.floor(Math.random() * options.length);
    console.log(number);
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


// Win conditions are created according to playerSelection and computerSelection parameters.

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
         playerSelection === "paper" && computerSelection === "rock"
    ){
        return "Player"
    }else {
        return "Computer"
    }
}


// Round play is created, shows how one round is played. E.g. If checkWinner's either returns comes out, we provide the winning text.

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result = "Tie") {
       return "It's a tie"   
    }
    else if (result = "Player"){
        return `You win ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose ${computerSelection} beats ${playerSelection}`
    }
}

