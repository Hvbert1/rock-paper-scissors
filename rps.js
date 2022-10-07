const playerSelection = "rock";

function getComputerChoice() {
    const computerOption = ["rock", "paper", "scissors"];
    return computerOption[Math.floor(Math.random() * computerOption.length)];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection) {

    let playerScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const computerOption = ["rock", "paper", "scissors"];
        return computerOption[Math.floor(Math.random() * computerOption.length)];
    }

    function playRound() {
        let choice = prompt("Rock, paper or scissors?")
        const playerSelection = choice;
        let result = "";

        console.log("playerscore:" + playerScore);
        console.log("compscore:" + computerScore);

        const computerSelection = getComputerChoice();
        console.log("computer selection:", computerSelection);
        console.log(playerSelection)

        if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
                playerScore++;
                result = ("You win! " + playerSelection + " beats " + computerSelection)

                if(playerScore == 5){
                    result = ("You won the game!")
                }
            }

        else if(playerSelection === computerSelection) {
            result =  "Tie!"
        }
            
        else {
            computerScore++;
            result = ("You lose! " + computerSelection + " beats " + playerSelection)
            if (computerScore == 5) {
                result = ("You lost the Game!")
            }
        }
        return result;
    }
}
