function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

//func with 2 params , playerSelection and Comp selection
//get playerInput
// input should be lowercase
//get pc input
//return message

function playRound(playerSelection, computerSelection) {
  return playerSelection.toLowerCase();
}

const playerSelection = "ROck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
