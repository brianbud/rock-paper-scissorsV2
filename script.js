let playerScore = 0;
let computerScore = 0;
const container = document.querySelector("main");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.innerText = "rock";
paperBtn.innerText = "Paper";
scissorsBtn.innerText = "Scissors";
container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

rockBtn.addEventListener("click", function (e) {
  return playRound(e.target.innerText);
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let result = "";

  if (
    !(
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    )
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

  console.log(result);
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("what do you choose").toLowerCase();
//     let computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }

//   console.log(`Your Score: ${playerScore}`);
//   console.log(`Computer Score: ${computerScore}`);

//   if (playerScore > computerScore) {
//     console.log("You win");
//   } else if (computerScore > playerScore) {
//     console.log("you lose");
//   } else {
//     console.log("its a tie");
//   }
// }
