let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
const buttons = document.querySelectorAll('button');


function getComputerChoice() {
    const computerOption = ["rock", "paper", "scissors"];
    return computerOption[Math.floor(Math.random() * computerOption.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound() {
    let result = "";

    const computerSelection = getComputerChoice();

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore++;
            result = ("You win! " + playerSelection + " beats " + computerSelection) + "<br/>🧠 Score: " + playerScore + " 🤖 score: " + computerScore;

            if(playerScore == 5){
                result = ("You won the game!" + "<br/>🧠 Score: " + playerScore + " 🤖 score: " + computerScore + "<br/> Refresh to try again!");
                disableButtons();
            }
        }

    else if(playerSelection === computerSelection) {
        result =  "Tie!";
    }
            
    else {
        computerScore++;
        result = ("You lose! " + computerSelection + " beats " + playerSelection + "<br/>🧠 Score: " + playerScore + " 🤖 score: " + computerScore);
        if (computerScore == 5) {
            result = ("You lost the Game!" + "<br/>🧠 Score: " + playerScore + " 🤖 score: " + computerScore + "<br/> Refresh to try again!");
            disableButtons();
        }
    }
    document.getElementById("ret").innerHTML = result;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound();
  });
});

