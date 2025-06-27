// playGame();

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    let resultMessage = "Your Score: " + humanScore + 
                        "\nOpponent Score: " + computerScore;

    if(humanScore > computerScore) {
        resultMessage += "\nYou won the game, congratulations!";
    } else if(humanScore === computerScore) {
        resultMessage += "\nThe game was a draw!";
    } else {
        resultMessage += "\nYou lost the game, better luck next time!";
    }

    alert(resultMessage);

    function playRound(humanChoice, computerChoice) {
        // Capitalizes humanChoice if it is not already capitalized, as it will be used for displaying results.
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
        const humanWonRound = (humanChoice === "Rock" && computerChoice === "Scissors") ||
                              (humanChoice === "Paper" && computerChoice === "Rock") ||
                              (humanChoice === "Scissors" && computerChoice === "Paper");
    
        if(humanWonRound) {
            alert(`You win this round! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if(humanChoice === computerChoice) {
            alert(`Draw! ${humanChoice} does not beat ${computerChoice}`);
        } else {
            alert(`You lose this round! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
}