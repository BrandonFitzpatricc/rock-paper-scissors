function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors? ");
    return humanChoice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}