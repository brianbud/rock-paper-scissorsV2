function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
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

const playerSelection = "ROck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
