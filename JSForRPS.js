const buttons = document.querySelectorAll ('button');
const resultEl = document.getElementById("result")

let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");


buttons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log('User choice: ', button.id,
        // "Computer choice: ", computerPlay());
        const result = playRound(button.id, computerPlay())
        //console.log(result);
        resultEl.textContent = result;
    })
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()* choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You have won the round! Congratulations! Your choice: " + playerSelection + " beats Computer choice: " + computerSelection;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You have lost this round but keep your head up. You can always try again. | Computer choice: " + computerSelection + " beats Your choice: " + playerSelection;
    }
}