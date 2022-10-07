const playerSelection = "rock";

function getComputerChoice() {
    const computerOption = ["rock", "paper", "scissors"];
    return computerOption[Math.floor(Math.random() * computerOption.length)];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection) {

    if(playerSelection === computerSelection) {
        return "Tie!"
    }
    if(playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    }
    if(playerSelection == "scissors" && computerSelection == "scissor") {
        return "You Win! Rock beats Scissor"
    }
    if(playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats rock"
    }
}