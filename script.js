// getComputerChoice will randomly return a move 
// get a number between 0 and 100 and divide by 3 to get three possibilities
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 100);
  if (randomNum < 33) {
    return "rock";
  } else if (randomNum > 66) {
    return "paper";
  } else {
    return "scissor";
  }
}

// playRound will take two arguments playerSelection
// and computerSelection and play a round
// We will take three conditions
// 1. Player Win
//      playerSelection and computerSelection
//    - Rock and Paper
//    - Paper and Scissor
//    - Scissor and Rock
// 2. Computer Win
//      computerSelection and playerSelection 
//    - Rock and Paper
//    - Paper and Scissor
//    - Scissor and Rock
// 3. Tie
//    - Same
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "rock")) {

    return `You Win! ${playerSelection} beats ${computerSelection}`;

  } else if ((computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissor") ||
    (computerSelection == "scissor" && playerSelection == "rock")) {

    return `You Lose! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Tie";
  }
}

function game(turns) {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < turns; i++) {
    let playerSelection = prompt("Enter Move: ");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result.includes("Win")) {
      playerScore++;
      console.log(result);
    } else if (result.includes("Lose")) {
      computerScore++;
      console.log(result);
    } else {
      console.log(result);
    }
  }
  let score = `Your Score: ${playerScore} and Computer Score: ${computerScore}`
  if (playerScore > computerScore) {
    console.log("You Win! " + score);
  } else if (playerScore < computerScore) {
    console.log("You Lose! " + score);
  } else {
    console.log("It's a Tie! " + score);
  }
}

game(5);
