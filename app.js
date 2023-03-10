// Game-wide variables
let round = 0;
let playerScore = 0;
let computerScore = 0;
let emergency = 0;

// Helper function to determine if computer is playing Rock, Paper, or Scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let options = ['rock', 'paper', 'scissors'];
  return options[choice];
}

// Helper function to determine if player is playing Rock, Paper, or Scissors
function getPlayerChoice() {
  let choice = prompt('Would you like to play Rock, Paper, or Scissors?');

  if (!choice) {
    emergency += 1;
    return undefined;
  } else if (
    choice.toLowerCase() == 'rock' ||
    choice.toLowerCase() == 'paper' ||
    choice.toLowerCase() == 'scissors'
  ) {
    return choice;
  } else {
    alert(
      'Invalid selection - please enter either "rock", "paper", or "scissors".'
    );
    return getPlayerChoice();
  }
}

// Helper function to simulate a single round between the Player and the Computer
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == 'rock' &&
      computerSelection.toLowerCase() == 'scissors') ||
    (playerSelection.toLowerCase() == 'paper' &&
      computerSelection.toLowerCase() == 'rock') ||
    (playerSelection.toLowerCase() == 'scissors' &&
      computerSelection.toLowerCase() == 'paper')
  ) {
    round += 1;
    playerScore += 1;
    console.log(
      `You win round ${round}, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!\nThe Score is now Player ${playerScore} - Computer ${computerScore}.`
    );
  } else if (
    (playerSelection.toLowerCase() == 'rock' &&
      computerSelection.toLowerCase() == 'paper') ||
    (playerSelection.toLowerCase() == 'paper' &&
      computerSelection.toLowerCase() == 'scissors') ||
    (playerSelection.toLowerCase() == 'scissors' &&
      computerSelection.toLowerCase() == 'rock')
  ) {
    round += 1;
    computerScore += 1;
    console.log(
      `You lose round ${round}, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!\nThe Score is now Player ${playerScore} - Computer ${computerScore}.`
    );
  } else if (
    (playerSelection.toLowerCase() == 'rock' &&
      computerSelection.toLowerCase() == 'rock') ||
    (playerSelection.toLowerCase() == 'paper' &&
      computerSelection.toLowerCase() == 'paper') ||
    (playerSelection.toLowerCase() == 'scissors' &&
      computerSelection.toLowerCase() == 'scissors')
  ) {
    console.log(
      `You both selected ${playerSelection.toLowerCase()}. The Score is still Player ${playerScore} - Computer ${computerScore}.\nChoose again.`
    );
  } else {
    throw new Error('Invalid selections.');
  }
}

// Helper function to allow re-playability

function playAgain() {
  let replay = prompt('Would you like to play again?');
  if (!replay) {
    emergency += 1;
    return undefined;
  } else if (choice.toLowerCase() == 'yes' || choice.toLowerCase() == 'y') {
    console.log('Great choice!');
    round = 0;
    playerScore = 0;
    computerScore = 0;
    return undefined;
  } else if (choice.toLowerCase() == 'no' || choice.toLowerCase() == 'n') {
    console.log('Thanks for playing!');
    return undefined;
  } else {
    alert('Invalid selection - please enter either "yes", or "no".');
    return playAgain();
  }
}

// Main function to play the game
function game() {
  while (playerScore < 5 && computerScore < 5) {
    let p = getPlayerChoice();
    let c = getComputerChoice();
    playRound(p, c);
  }

  if (emergency > 0) {
    round = 99;
    playerScore = 99;
    computerScore = 99;
    console.log('See you next time!');
  }

  if (playerScore == 5) {
    console.log(
      `Congratulations! You won with a final score of Player ${playerScore} - Computer ${computerScore}.`
    );
    playAgain();
  } else if (computerScore == 5) {
    console.log(
      `You lose! The final score is Player ${playerScore} - Computer ${computerScore}.`
    );
    playAgain();
  } else {
    throw new Error('Invalid scores.');
  }
}

// Function invocation
game();
