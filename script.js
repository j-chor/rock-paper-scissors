function getComputerChoice() {
  let choice = (Math.floor(Math.random() * 3));
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissors";
}

function getPlayerChoice() {
  return prompt("Rock, paper or scissors?").toLowerCase();
}

let testvar = 0;
function testfunc(testt) {
  if (true) {testt++}
  testt++;
}

testfunc(testvar);
console.log(testvar);

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let announcement = document.createElement("p");
document.body.appendChild(announcement);

let scoreP = 0;
let scoreC = 0;
let scoretext = document.createElement("p");

document.body.appendChild(scoretext);

function addScore(announcement, scoretext) {
  if (announcement.textContent.includes("win")) {scoreP++;}
  else if (announcement.textContent.includes("lose")) {scoreC++}
}

rock.addEventListener("click", (e) => {
  announcement.textContent = (playRound("rock", getComputerChoice()));
  addScore(announcement, scoreP, scoreC, scoretext);
  scoretext.innerText = scoreP + '' + " - " + scoreC + '';
})
paper.addEventListener("click", (e) => {
  announcement.textContent = playRound("paper", getComputerChoice());
  addScore(announcement, scoreP, scoreC, scoretext);
  scoretext.innerText = scoreP + '' + " - " + scoreC + '';
})
scissors.addEventListener("click", (e) => {
  announcement.textContent = playRound("scissors", getComputerChoice());
  addScore(announcement, scoreP, scoreC, scoretext);
  scoretext.innerText = scoreP + '' + " - " + scoreC + '';
})



function playRound(playerChoice, computerChoice) {
  let outcome = result();
  if (outcome == "win") return `You win!\n${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}!`;
  if (outcome == "lose") return `You lose!\n${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}!`;
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

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result.includes("win")) {
      console.log(result);
      scorePlayer += 1;
    }
    else if (result.includes("lose")) {
      console.log(result);
      scoreComputer += 1;
    }
    else if (result.includes("draw")) {
      console.log(result);
      scoreComputer += 0.5;
      scorePlayer += 0.5;
    }
    else console.log("error")
  }
  if (scorePlayer > scoreComputer) console.log(`PLAYER ${scorePlayer} : ${scoreComputer} COMPUTER\nYou win!`);
  else if (scorePlayer < scoreComputer) console.log(`PLAYER ${scorePlayer} : ${scoreComputer} COMPUTER\nYou lose!`);
  else if (scorePlayer == scoreComputer) console.log(`PLAYER${scorePlayer} : ${scoreComputer} COMPUTER\nIt's a draw - nobody wins, everybody loses!`);
}