function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors? ");
    return humanChoice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //capitalize humanChoice if it is not already capitalized, as it will be used for formatting
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    const humanWonRound = (humanChoice === "Rock" && computerChoice === "Scissors")
                       || (humanChoice === "Paper" && computerChoice === "Rock")
                       || (humanChoice === "Scissors" && computerChoice === "Paper");

    if(humanWonRound) {
        alert(`You win this round! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === computerChoice) {
        alert(`Draw! ${humanChoice} does not beat ${computerChoice}`);
    } else {
        alert(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
}