document.addEventListener("DOMContentLoaded", function () {
    let firstOperand = "";
    let secondOperand = "";
    let currentOperator = null;
    let shouldResetScreen = false;
  
    const screen = document.getElementById("screen_display");
  
    function updateScreen(value) {
      if (screen.innerText === "0" || shouldResetScreen) {
        screen.innerText = value;
        shouldResetScreen = false;
      } else {
        screen.innerText += value;
      }
    }
  
    function clearScreen() {
      screen.innerText = "0";
      firstOperand = "";
      secondOperand = "";
      currentOperator = null;
    }
  
    function setOperator(operator) {
      if (currentOperator !== null) operate();
      firstOperand = screen.innerText;
      currentOperator = operator;
      shouldResetScreen = true;
    }
  
    function operate() {
      if (currentOperator === null || shouldResetScreen) return;
      secondOperand = screen.innerText;
      const a = parseFloat(firstOperand);
      const b = parseFloat(secondOperand);
      let result;
  
      switch (currentOperator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Error";
          break;
      }
  
      screen.innerText = result;
      currentOperator = null;
    }
  
    function initCalculator() {
      const numericButtons = document.querySelector(".numeric-pad");
  
      // Clear button
      const buttonAc = document.createElement("button");
      buttonAc.innerText = "AC";
      buttonAc.addEventListener("click", clearScreen);
      numericButtons.appendChild(buttonAc);
  
      // Number buttons
      for (let i = 9; i >= 0; i--) {
        const numButton = document.createElement("button");
        numButton.innerText = i;
        numButton.addEventListener("click", () => updateScreen(i));
        numericButtons.appendChild(numButton);
      }
  
      // Dot
      const dotButton = document.createElement("button");
      dotButton.innerText = ".";
      dotButton.addEventListener("click", () => {
        if (!screen.innerText.includes(".")) {
          updateScreen(".");
        }
      });
      numericButtons.appendChild(dotButton);
  
      // Operator buttons
      document.querySelectorAll(".operator").forEach((btn) => {
        const operator = btn.dataset.operator;
        if (operator === "equals") {
          btn.addEventListener("click", operate);
        } else {
          btn.addEventListener("click", () => setOperator(btn.innerText));
        }
      });
    }
  
    initCalculator();
  });
  