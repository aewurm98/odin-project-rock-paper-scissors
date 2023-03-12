// Game-wide variables
let round = 0;
let playerScore = 0;
let computerScore = 0;
// let emergency = 0;

// Helper function to determine if computer is playing Rock, Paper, or Scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let options = ['rock', 'paper', 'scissors'];
  return options[choice];
}

// Helper function to determine if player is playing Rock, Paper, or Scissors
// NOT NEEDED for click-to-interact version

// function getPlayerChoice() {
//   let choice = prompt('Would you like to play Rock, Paper, or Scissors?');

//   if (!choice) {
//     emergency += 1;
//     return undefined;
//   } else if (
//     choice.toLowerCase() == 'rock' ||
//     choice.toLowerCase() == 'paper' ||
//     choice.toLowerCase() == 'scissors'
//   ) {
//     return choice;
//   } else {
//     alert(
//       'Invalid selection - please enter either "rock", "paper", or "scissors".'
//     );
//     return getPlayerChoice();
//   }
// }

// Helper function to create on-screen prompt
function displayPrompt() {
  const container = document.querySelector('.container');
  const buttons = document.querySelector('.buttons');
  const results = document.querySelector('.results');

  const question = document.createElement('h2');
  question.className = 'question';
  question.textContent = 'Would you like to play Rock, Paper, or Scissors?';

  container.insertBefore(question, results);
}

// Helper function to remove on-screen prompt

function removePrompt() {
  const question = document.querySelector('.question');
  question.remove();
}

// Helper function to simulate a single round between the Player and the Computer
function playRound(playerSelection, computerSelection) {
  const oldannounce = document.getElementById('announce');

  if (oldannounce) {
    console.log('working');
    oldannounce.remove();
  }

  const container = document.querySelector('.container');
  const announce = document.createElement('p');
  announce.setAttribute('id', 'announce');
  announce.style.fontSize = '1.5rem';

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
    // console.log(
    //   `You win round ${round}, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!\nThe Score is now Player ${playerScore} - Computer ${computerScore}.`
    // );
    announce.textContent = `You win round ${round}, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!\nThe Score is now Player ${playerScore} - Computer ${computerScore}.`;
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
    // console.log(
    //   `You lose round ${round}, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!\nThe Score is now Player ${playerScore} - Computer ${computerScore}.`
    // );
    announce.textContent = `You lose round ${round}, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!\nThe Score is now Player ${playerScore} - Computer ${computerScore}.`;
  } else if (
    (playerSelection.toLowerCase() == 'rock' &&
      computerSelection.toLowerCase() == 'rock') ||
    (playerSelection.toLowerCase() == 'paper' &&
      computerSelection.toLowerCase() == 'paper') ||
    (playerSelection.toLowerCase() == 'scissors' &&
      computerSelection.toLowerCase() == 'scissors')
  ) {
    // console.log(
    //   `You both selected ${playerSelection.toLowerCase()}. The Score is still Player ${playerScore} - Computer ${computerScore}.\nChoose again.`
    // );
    announce.textContent = `You both selected ${playerSelection.toLowerCase()}. The Score is still Player ${playerScore} - Computer ${computerScore}.\nChoose again.`;
  } else {
    throw new Error('Invalid selections.');
  }

  document.getElementById('pscore').textContent = playerScore;
  document.getElementById('cscore').textContent = computerScore;

  container.appendChild(announce);

  if (playerScore == 5) {
    announce.textContent = `Congratulations! You won with a final score of Player ${playerScore} - Computer ${computerScore}. You played ${round} rounds.`;
    endGame();
  } else if (computerScore == 5) {
    announce.textContent = `You lost! The final score was Player ${playerScore} - Computer ${computerScore}. You played ${round} rounds.`;
    endGame();
  }
}

// Helper function to allow re-playability

// NOT NEEDED in click-to-interact version

// function playAgain() {
//   let replay = prompt('Would you like to play again?');
//   if (!replay) {
//     emergency += 1;
//     return undefined;
//   } else if (choice.toLowerCase() == 'yes' || choice.toLowerCase() == 'y') {
//     console.log('Great choice!');
//     round = 0;
//     playerScore = 0;
//     computerScore = 0;
//     return undefined;
//   } else if (choice.toLowerCase() == 'no' || choice.toLowerCase() == 'n') {
//     console.log('Thanks for playing!');
//     return undefined;
//   } else {
//     alert('Invalid selection - please enter either "yes", or "no".');
//     return playAgain();
//   }
// }

// Main function to play the game
// function game() {
//   displayPrompt();

// while (playerScore < 5 && computerScore < 5) {
// NOT NEEDED in click-to-interact version
// let p = getPlayerChoice();
// let c = getComputerChoice();
// playRound(p, c);
// }

// if (emergency > 0) {
//   round = 99;
//   playerScore = 99;
//   computerScore = 99;
//   console.log('See you next time!');
// }

// if (playerScore == 5) {
//   removePrompt();
//   console.log(
//     `Congratulations! You won with a final score of Player ${playerScore} - Computer ${computerScore}.`
//   );
//   playAgain();
// } else if (computerScore == 5) {
//   removePrompt();
//   console.log(
//     `You lose! The final score is Player ${playerScore} - Computer ${computerScore}.`
//   );
//   playAgain();
// }

// NOT NEEDED in click-to-interact version
// else {
//   throw new Error('Invalid scores.');
// }
// }
// Event Listeners for UI Components in updates to project

const btns = document.querySelectorAll('.choice');
btns.forEach((btn) =>
  btn.addEventListener('click', (e) =>
    playRound(e.target.classList.item(0), getComputerChoice())
  )
);

// Function invocation -- edited to be button for click-to-interact version

function startGame() {
  const oldannounce = document.getElementById('announce');

  if (oldannounce) {
    console.log('working');
    oldannounce.remove();
  }

  const startbtn = document.querySelector('.start');
  startbtn.style.display = 'none';
  const choices = document.querySelectorAll('.choice');
  choices.forEach((choice) => choice.classList.add('live'));
  displayPrompt();
}

// Helper function to end game on reaching maximum score

function endGame() {
  removePrompt();
  round = 0;
  playerScore = 0;
  computerScore = 0;
  document.getElementById('pscore').textContent = playerScore;
  document.getElementById('cscore').textContent = computerScore;
  const startbtn = document.querySelector('.start');
  startbtn.style.display = 'block';
  const choices = document.querySelectorAll('.choice');
  choices.forEach((choice) => choice.classList.remove('live'));
}

const startbtn = document.querySelector('.start');
startbtn.addEventListener('click', startGame);
