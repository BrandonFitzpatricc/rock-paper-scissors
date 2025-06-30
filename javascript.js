let playerScore = 0;
let opponentScore = 0;

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    const playerSelection = event.target.id;
    const opponentSelection = getOpponentSelection();
    setIcons(playerSelection, opponentSelection);
    checkResults(playerSelection, opponentSelection);
})

function getOpponentSelection() {
    const selections = ["rock", "paper", "scissors"];
    const opponentSelection = Math.floor(Math.random() * 3);
    return selections[opponentSelection];
}

function setIcons(playerSelection, opponentSelection) {
    const playerSelectionIcon = document.querySelector("#player-selection").firstChild;
    playerSelectionIcon.setAttribute("src", `./icons/${playerSelection}.png`);

    const opponentSelectionIcon = document.querySelector("#opponent-selection").firstChild;
    opponentSelectionIcon.setAttribute("src", `./icons/${opponentSelection}.png`);
}

function checkResults(playerSelection, opponentSelection) {
    const roundResultSymbol = document.querySelector("#round-result-symbol");
    const gameText = document.querySelector("#game-text");

    const playerWonRound = (playerSelection === "rock" && opponentSelection === "scissors") ||
                           (playerSelection === "paper" && opponentSelection === "rock") ||
                           (playerSelection === "scissors" && opponentSelection === "paper");

    if(playerWonRound) {
        roundResultSymbol.setAttribute("src", "./icons/player-won.png");
        gameText.textContent = "You win this round!"
        
        const playerScoreText = document.querySelector("#player-score");
        playerScoreText.textContent = `${++playerScore} points`
    } else if(playerSelection === opponentSelection) {
        roundResultSymbol.setAttribute("src", "./icons/draw.png");
        gameText.textContent = "Draw!"
    } else {
        roundResultSymbol.setAttribute("src", "./icons/player-lost.png");
        gameText.textContent = "You lose this round!"
        
        const opponentScoreText = document.querySelector("#opponent-score");
        opponentScoreText.textContent = `${++opponentScore} points`
    }

    if(playerScore === 5 || opponentScore === 5) {
        buttons.style.visibility = "hidden";
        if(playerScore === 5) {
            gameText.innerText = "You won the game, congratulations!\nRefresh the page to play again."
        } else {
            gameText.innerText = "You lost the game, better luck next time!\nRefresh the page to play again."
        }
    }
}