let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * options.length) + 1;

  if (randomChoice === 1) {
    return "rock";
  }
  if (randomChoice === 2) {
    return "paper";
  }
  if (randomChoice === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tied");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("you won! rock beats scissors");
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("you won! paper beats rock");
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("you won! scissors beats paper");
    playerScore += 1;
  } else {
    console.log(`you lost! ${computerSelection} beats ${playerSelection}`);
    computerScore += 1;
  }
}

//const playerSelection = prompt(
//  "Start the game by picking among 'Rock, Paper, Scissors'"
//).toLowerCase();
//const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Start the game by picking among 'Rock, Paper, Scissors'"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("Score is: " + playerScore + " - " + computerScore);
  }
  if (playerScore === computerScore) {
    console.log("tied");
  } else if (playerScore > computerScore) {
    console.log("you won the game");
  } else {
    console.log("you lost the game");
  }
}

game();

// IF PS equals rock and CS equals rock => tied
// IF PS equals rock and CS equals paper => you lost! paper beats rock
// IF PS equals rock and CS equals scissors => you won! rock beats scissors
// IF PS equals paper and CS equals rock => you won! paper beats rock
// IF PS equals paper and CS equals paper => tied
// IF PS equals paper and CS equals scissors => you lost! scissors beats paper
// IF PS equals scissors and CS equals rock => you lost! rock beats scissors
// IF PS equals scissors and CS equals paper => you won! scissors beats paper
// IF PS equals scissors and CS equals scissors => tied
