let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (
    playerSelection != "rock" ||
    playerSelection != "scissors" ||
    playerSelection != "paper"
  ) {
    result = "INVALID INPUT";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "You Lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result = "You Lose! Rock beats Scissors";
  } else if (playerSelection === computerSelection) {
    result = "Draw";
  } else {
    playerScore++;
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("what do you choose").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(`Your Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

game();
