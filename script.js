// variable for 3 options

let options = ["rock", "paper", "scissors"];




// Function to let computer choose an option from "options" variable. It's either 0, 1 or 2.
function getComputerChoice() {
    const number = Math.floor(Math.random() * options.length);
    return number;
}
