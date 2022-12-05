const choices = ["rock", "paper", "scissors"];
const winners = [];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let input = prompt("Enter Rock, Paper, or Scissors: "); 
    while (input == null) {
        input = prompt("Enter Rock, Paper, or Scissors: ");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Please type ONLY one of the following: Rock, Paper, or Scissors");
        while (input == null) {
            input = prompt("Enter Rock, Paper, or Scissors: ");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {
    return choices.includes(choice)
    //return choices.includes(choice);
}

// ps = player selection, cs = computer selection
function checkWinner(playerSelection, computerSelection) {
    let ps = playerSelection;
    let cs = computerSelection;
    if (cs === ps) {
        return "Draw" //"It's a draw!";
    } else if (ps === 'rock'     && cs === 'paper' || 
    ps === 'scissors' && cs === 'rock' ||
    ps === 'paper'    && cs === 'scissors') {
        return "Computer" //`You lose! ${cs} beats ${ps}.`;
    } else {
        return "Player" //`You win! ${ps} beats ${cs}.`;
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let draws = winners.filter((item) => item == "Draw").length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Draws:', draws);
    console.log('----------------------------------');
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', computerChoice);
    console.log(winner);
    console.log('----------------------------------');
}

function playRound(round) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

//Plays game
//plays 5 rounds
//console based
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    } 
    document.querySelector('button').textContent = 'Play new game';
    logWins();
}

document.querySelector('button').addEventListener("click", (event) => {
    game();
});
