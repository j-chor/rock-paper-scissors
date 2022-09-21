function getComputerChoice() {
  let choice = (Math.floor(Math.random() * 3));
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissors";
}

function getPlayerChoice() {
  return prompt("Rock, paper or scissors?").toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  let outcome = result();
  if (outcome == "win") return `You win!\n${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)} beats ${computerChoice}!`;
  if (outcome == "lose") return `You lose!\n${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${playerChoice}!`;
  if (outcome == "draw") return "It's a draw!";


  function result() {
    switch (playerChoice) {
      case "rock":
        switch (computerChoice) {
          case "rock":
            return "draw";
          case "paper":
            return "lose";
          case "scissors":
            return "win";
        }
      case "paper":
        switch (computerChoice) {
          case "rock":
            return "win";
          case "paper":
            return "draw";
          case "scissors":
            return "lose";
        }
      case "scissors":
        switch (computerChoice) {
          case "rock":
            return "lose";
          case "paper":
            return "win";
          case "scissors":
            return "draw";
        }
    }
  }
}