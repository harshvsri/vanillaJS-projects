const buttonColors = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

const gamePattern = [];
const userClickedPattern = [];

const currLevel = document.querySelector("#level-title");

document.addEventListener("keypress", () => {
  currLevel.innerText = `Level ${level}`;
  nextSequence();
  started = true;
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  })
);

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => nextSequence(), 1000);
    }
  } else {
    currLevel.innerText = "Game Over, Press Any Key to Restart";
    const body = document.querySelector("body");
    body.classList.add("game-over");
    setTimeout(() => body.classList.remove("game-over"), 100);
    playSound("wrong");
    startOver();
  }
}

function nextSequence() {
  userClickedPattern.length = 0;
  level++;
  currLevel.innerText = `Level ${level}`;

  const randomIndex = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomIndex];
  gamePattern.push(randomChosenColor);

  fade(randomChosenColor);
  playSound(randomChosenColor);
}

function fade(currentColor) {
  const currTile = document.querySelector(`#${currentColor}`);
  currTile.classList.add("fade");
  setTimeout(() => currTile.classList.remove("fade"), 100);
}

function animatePress(currentColor) {
  const currTile = document.querySelector(`#${currentColor}`);
  currTile.classList.add("pressed");
  setTimeout(function () {
    currTile.classList.remove("pressed");
  }, 100);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
