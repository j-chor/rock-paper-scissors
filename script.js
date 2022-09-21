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

function game() {
  let score0 = 0;
  let score1 = 0;

  for (let i = 0; i<5; i++) {
    let outcome = playRound(getPlayerChoice(), getComputerChoice());
    console.log(outcome)
    if (outcome == "win") {
      console.log(`You win!\n${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)} beats ${computerChoice}!`);
      score0 += 1;
    }
    else if (outcome == "lose") {
      console.log(`You lose!\n${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${playerChoice}!`);
      score1 += 1;
    }
    else if (outcome == "draw") {
      console.log("It's a draw!");
      score0 += 0.5;
      score1 += 0.5;
    }
    else console.log("no outcome???")
  }
  if (score0 > score1) alert("You win!!!");
  else if (score0 < score1) alert("You lose!!!");
  else if (score0 == score1) alert("It's a draw. Nobody wins, everyone loses.");
}