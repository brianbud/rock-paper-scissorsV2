function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "You Lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You Lose! Rock beats Scissors";
  } else if (playerSelection === computerSelection) {
    result = "Draw";
  } else {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  return result;
}

function game() {
  for (let i = 0; i < 6; i++) {
    let playerSelection = prompt("what do you choose?");
    playerSelection = playerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
}

const computerSelection = getComputerChoice();
game();
