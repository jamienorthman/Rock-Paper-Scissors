const compChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return compChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    if (cs === ps) {
        return "It's a draw!";
    } else if (ps === 'rock'     && cs === 'paper' || 
               ps === 'scissors' && cs === 'rock' ||
               ps === 'paper'    && cs === 'scissors') {
        return `You lose! ${cs} beats ${ps}.`;
    } else {
        return `You win! ${ps} beats ${cs}.`;
    } 
}
// Check for valid choice ??
//else if (ps !== 'rock' || ps !== 'paper' || ps !== 'scissors') {
        //return "Enter a valid choice.";

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt("Enter Rock, Paper, or Scisors: ");
        let computerChoice = getComputerChoice();
        console.log(`Round ${i}: ${playRound(playerChoice, computerChoice)}`);
    }   
}


function keepScore(playerScore, computerScore) {
    game()
 }

game();

// const playerSelection = 'rock';
// add input field or prompt for player
// then give points


//function game() {
//    playRound(playerSelection, computerSelection)
//}