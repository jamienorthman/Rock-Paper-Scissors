const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function checkWinner(playerSelection, computerSelection) {
    let ps = playerSelection;
    let cs = computerSelection;
    if (cs === ps) {
        return "Draw";
    } else if (ps === 'rock'     && cs === 'paper' || 
    ps === 'scissors' && cs === 'rock' ||
    ps === 'paper'    && cs === 'scissors') {
        return "Computer";
    } else {
        return "Player";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    if (result === "Draw") {
        return "It's a draw!";
    } else if (result === "Computer") {
        return `You lose! ${cs} beats ${ps}.`;
    } else {
        return `You win! ${ps} beats ${cs}.`;
    } 
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput === false) {
        let playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
        if (playerChoice === null) {
            continue;
        }
        const playerChoiceLower = playerChoice.toLowerCase();
        if (choices.includes(playerChoiceLower)) {
            validatedInput = true;
            return playerChoiceLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 1; i <= 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(`Round ${i}: ${playRound(playerChoice, computerChoice)}`);
        console.log("---------------");
        if (checkWinner(playerSelection, computerSelection) === "Player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            scoreComputer++;
        }
    }  
    console.log("GAME OVER");
    if (scorePlayer > scoreComputer) {
        console.log("Player WINS!");
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer WINS!");
    } else {
        console.log("Tie GAME!");
    }
}

// game();

// then give points
