let playerScore = 0;
let computerScore = 0;
let playerChoice;

const outerDiv = document.querySelector(".outer-div");
const h2 = document.createElement("h2");
h2.textContent = "";
outerDiv.appendChild(h2);

const scoreDiv = document.querySelector(".score-div");
const score = document.querySelector(".score");
const gameResult = document.createElement("p");
gameResult.textContent = "";
scoreDiv.appendChild(gameResult);

// Computer's random choice function
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

// Play one round function
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    h2.textContent = "Tied";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    h2.textContent = "you won! rock beats scissors";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    h2.textContent = "you won! paper beats rock";
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    h2.textContent = "you won! scissors beats paper";
    playerScore += 1;
  } else {
    h2.textContent = `you lost! ${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
  }

  keepScore();

  if (playerScore >= 5) {
    gameResult.textContent = "You won the game! Reload the page to play again";
  }
  if (computerScore >= 5) {
    gameResult.textContent =
      "You lost! Computer won the game. Reload the page to play again";
  }

  if (playerScore >= 5 || computerScore >= 5) {
    disableButtons();
  }
}

// Disable buttons after game ended
function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

// Keep track of score
function keepScore() {
  score.textContent = `Score is: ${playerScore} - ${computerScore}`;
}

// Buttons function
const buttons = Array.from(document.querySelectorAll(".bttn"));

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playerChoice = button.id;
    computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
  });
});
