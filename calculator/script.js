//* DISPLAY
const display = document.querySelector(".display");
const calculationResult = document.createElement("p");
calculationResult.classList.add("calculation-result");
updateDisplay("0");
display.appendChild(calculationResult);

function updateDisplay(value) {
  calculationResult.innerText = value;
}

//* BUTTONS
const buttonContainer = document.querySelector(".calculator .buttons");
const tokens = [
  "AC",
  "del",
  "+/-",
  "^",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "/",
  "0",
  ".",
  "=",
  "*",
];

// Rendering Buttons
for (let i = 0; i < tokens.length; i++) {
  const button = document.createElement("div");
  button.classList.add("button");
  button.innerText = tokens[i];
  buttonContainer.appendChild(button);
}

// Adding EventListeners
const buttons = document.querySelectorAll(".button");
let inputEquation = "";
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonPressed = event.target.innerText;
    if (buttonPressed == "=") {
      inputEquation = getResult(inputEquation);
      updateDisplay(inputEquation);
    } else if (buttonPressed == "AC") {
      inputEquation = "";
      updateDisplay("0");
    } else if (buttonPressed == "del") {
      if (inputEquation.length == 1) {
        inputEquation = "";
        updateDisplay("0");
      } else {
        inputEquation = inputEquation.slice(0, inputEquation.length - 1);
        updateDisplay(inputEquation);
      }
    } else {
      inputEquation += buttonPressed;
      updateDisplay(inputEquation);
    }
  });
});

//* OPERATE FUNCTION
const operate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return (num1 / num2).toPrecision(3);
    case "^":
      return (num1 ** num2).toPrecision(3);
  }
};

//* GET RESULT
const operators = ["+", "-", "*", "/", "^"];
const getResult = (string) => {
  let i = 0;
  while (i < string.length) {
    if (operators.includes(string.charAt(i))) {
      // Assigning values
      const firstNum = Number(string.slice(0, i));
      const operator = string.charAt(i);
      const secondNum = Number(string.slice(i + 1, string.length));

      return operate(firstNum, secondNum, operator);
    }
    i++;
  }
};
