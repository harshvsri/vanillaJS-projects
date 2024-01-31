const result = document.querySelector(".result");
const choicesMade = document.createElement("h2");
const resultPara = document.createElement("h2");
const score = document.createElement("h2");
let userScore = 0;
let computerScore = 0;
let gameOver = false;

const isGameOver = () => {
  if (userScore === 5 || computerScore === 5) {
    const finalResult = document.createElement("h2");
    finalResult.textContent = userScore === 5 ? "YOU WON" : "YOU LOST";
    result.appendChild(finalResult);
    result.removeChild(choicesMade);
    result.removeChild(resultPara);
    result.removeChild(score);
    gameOver = true;
    return;
  }
};

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissor"];
  return choices[Math.floor(Math.random() * 3)];
};

const handleClick = (event) => {
  if (gameOver) return;

  const userChoice = event.target.innerText;
  const computerChoice = getComputerChoice();
  const res = gameLogic(userChoice, computerChoice);

  choicesMade.textContent = `You Chose: ${userChoice} AND Computer Chose: ${computerChoice}`;
  resultPara.textContent = res.result;
  score.textContent = `Your Score: ${res.userScore} AND Computer Score: ${res.computerScore}`;
};

const gameLogic = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    userScore++;
    computerScore++;
    isGameOver();
    return {
      result: `Its a tie!, ${userChoice} ${computerChoice}`,
      userScore: `${userScore}`,
      computerScore: `${computerScore}`,
    };
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    userScore++;
    isGameOver();
    return {
      result: `You Won!, ${userChoice} beats ${computerChoice}`,
      userScore: `${userScore}`,
      computerScore: `${computerScore}`,
    };
  } else {
    computerScore++;
    isGameOver();
    return {
      result: `You Lose!, ${computerChoice} beats ${userChoice}`,
      userScore: `${userScore}`,
      computerScore: `${computerScore}`,
    };
  }
};

const userChoices = document.querySelectorAll(".option");
userChoices.forEach((choice) => {
  choice.addEventListener("click", handleClick);
});

result.appendChild(choicesMade);
result.appendChild(resultPara);
result.appendChild(score);
