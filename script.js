let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const container = document.querySelector("main");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const div = document.createElement("div");

rockBtn.innerText = "rock";
paperBtn.innerText = "paper";
scissorsBtn.innerText = "scissors";
container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(div);

rockBtn.addEventListener("click", function (e) {
  return playRound(e.target.innerText);
});

paperBtn.addEventListener("click", function (e) {
  return playRound(e.target.innerText);
});

scissorsBtn.addEventListener("click", function (e) {
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

  rounds++;
  div.innerHTML = `
  <div>
  <p>Round ${rounds}: ${result}</p>
  <p>playerScore: ${playerScore}</p>
  <p>computerScore: ${computerScore}</p>
  </div>`;
  displayFinalResult();
}

function displayFinalResult() {
  if (rounds === 5) {
    if (playerScore > computerScore) {
      div.innerHTML += `
        <div>
          <h3>YOU WIN</h3>
        </div>
      `;
    } else if (computerScore > playerScore) {
      div.innerHTML += `
        <div>
          <h3>YOU LOSE</h3>
        </div>
      `;
    } else {
      div.innerHTML += `
        <div>
          <h3>TIE</h3>
        </div>
      `;
    }
  }
}
