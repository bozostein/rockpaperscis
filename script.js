// variable for 3 options

let options = ["rock", "paper", "scissors"];

const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const secondDiv = document.querySelector('.results')
const playerPoints = document.querySelector(".playerScore");
const computerPoints = document.querySelector(".computerScore");


// Function to let computer choose an option from "options" variable. It's either 0, 1 or 2.
function getComputerChoice() {
    const number = options[Math.floor(Math.random() * options.length)];
    return number;
}



// Function to get player's choice by prompt function. 
// When player writes an option like "rock" getPlayerFunction, takes the input, makes it all lowercase and returns it. 

/*function getPlayerChoice() {
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
}   } */


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
    if (result === "Tie") {
        secondDiv.textContent = "It's TIE";
    }
    else if (result === "Player"){
        secondDiv.textContent = `You win ${playerSelection} beats ${computerSelection}`;
    }
    else {
        const p = document.createElement('h3');
        secondDiv.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    }
}





// Scoreboard function, 2 score variables will increment after whichever player wins and will return the text along with the scoreboard.

let playerScore = 0;
let computerScore = 0;

function scoreboard(humanChoice, computerChoice){
    const scoreboard = checkWinner(humanChoice, computerChoice)

    if (scoreboard === "Tie") {
        playerPoints.textContent = `Player: ${playerScore} `;
        computerPoints.textContent = `Computer Score: ${computerScore} `;
    }
    else if (scoreboard === "Player"){
        playerScore++;
        
        playerPoints.textContent = `Player: ${playerScore} `;
        computerPoints.textContent = `Computer Score: ${computerScore} `;
    }
    else {
        computerScore++;
        playerPoints.textContent = `Player: ${playerScore} `;
        computerPoints.textContent = `Computer Score: ${computerScore} `;
    }
} 

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    scoreboard(playerSelection, computerSelection);
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    scoreboard(playerSelection, computerSelection);
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    scoreboard(playerSelection, computerSelection);
})
// Finally, Game function has been added along with For loop, the game function will repeat the playround and scoreboard until it reaches 5th round.
