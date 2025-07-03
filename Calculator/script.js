const display       = document.getElementById("display");
const buttons       = document.querySelectorAll(".buttons button");
const clearBtn      = document.getElementById("clear");
const equalsBtn     = document.getElementById("equals");
const backspaceBtn  = document.getElementById("backspace");

let expression = "";

buttons.forEach(btn => {
  const value = btn.getAttribute("data-value");
  if (!value) return;

  btn.addEventListener("click", () => {
    expression += value;
    display.value = expression;
  });
});

equalsBtn.addEventListener("click", () => {
  try {
    const sanitized = expression.replace(/×/g, "*").replace(/÷/g, "/");
    const result = eval(sanitized);
    display.value = result;
    expression = result.toString();
  } catch (err) {
    display.value = "Error";
    expression = "";
  }
});

clearBtn.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

backspaceBtn.addEventListener("click", () => {
  if (expression.length > 0) {
    expression = expression.slice(0, -1);
    display.value = expression;
  }
});
