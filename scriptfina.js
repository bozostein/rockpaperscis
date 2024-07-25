
/*

- Create var for options
- Create computer choice by using random function
- Create human choice on prompt page
- Check winner
- Play round
- Game function ends on round 5

*/

const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
}



function getHumanChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            console.log("You've quit the game.");
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
    }

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie"
    }
    else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
     (humanChoice == "paper" && computerChoice == "rock") 
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}


    function playRound(humanChoice, computerChoice) {
        const result = checkWinner(humanChoice, computerChoice);

        if (result == "Tie") {
            return "It's a Tie"
        }
        else if (result == "Player") {
            return `You win! ${humanChoice} beats ${computerChoice}`
        }
        else{
            return `You Lose ${computerChoice} beats ${humanChoice} `
        }


    }

    let playerScore = 0;
    let computerScore = 0;
    function checkScore(humanChoice, computerChoice) {
        const result = checkWinner(humanChoice, computerChoice)


        if (result == "Tie") {
            return "It's a Tie noone gains a score"
        }
        else if (result == "Player") {
            playerScore++;
            return `Player: ${playerScore} - ${computerScore} Computer`
        }else {
            computerScore++
            return `Computer: ${computerScore} - ${playerScore} Player`
        }
    }

    function name(params) {
        
    }
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(playRound(humanChoice, computerChoice)); 


function game() {
    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(checkScore(humanChoice, computerChoice));
    }
}

game()