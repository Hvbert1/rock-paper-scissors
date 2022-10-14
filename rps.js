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

    console.log("playerscore:" + playerScore);
    console.log("compscore:" + computerScore);

    const computerSelection = getComputerChoice();
    console.log("computer selection:", computerSelection);
    console.log(playerSelection)

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore++;
            result = ("You win! " + playerSelection + " beats " + computerSelection) + "<br/>player_score: " + playerScore + " comp_score: " + computerScore;

            if(playerScore == 5){
                result = ("You won the game!" + "<br/>player_score: " + playerScore + " comp_score: " + computerScore);
                disableButtons();
            }
        }

    else if(playerSelection === computerSelection) {
        result =  "Tie!";
    }
            
    else {
        computerScore++;
        result = ("You lose! " + computerSelection + " beats " + playerSelection + "<br/>player_score: " + playerScore + " comp_score: " + computerScore);
        if (computerScore == 5) {
            result = ("You lost the Game!" + "<br/>player_score: " + playerScore + " comp_score: " + computerScore);
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

