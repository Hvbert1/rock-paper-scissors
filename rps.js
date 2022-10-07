const playerSelection = "rock";

function getComputerChoice() {
    const computerOption = ["rock", "paper", "scissors"];
    return computerOption[Math.floor(Math.random() * computerOption.length)];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection) {
    const playerSelection = "rock";

    function getComputerChoice() {
        const computerOption = ["rock", "paper", "scissors"];
        return computerOption[Math.floor(Math.random() * computerOption.length)];
    }
    
    function playRound() {

        const computerSelection = getComputerChoice();
        console.log("computer selection:", computerSelection);
        console.log(playerSelection)

        if(playerSelection === computerSelection) {
            return "Tie!"
        }
        if(playerSelection == "rock" && computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        }
        if(playerSelection == "rock" && computerSelection == "scissors") {
            return "You Win! Rock beats Scissors"
        }
        if(playerSelection == "paper" && computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        }
        if(playerSelection == "paper" && computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper"
        }
        if(playerSelection == "scissors" && computerSelection == "rock") {
            return "You Lose! Rock beats Scissors"
        }
        if(playerSelection == "scissors" && computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }
    }
}