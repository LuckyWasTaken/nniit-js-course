const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const oper = document.getElementById("select");
const result = document.getElementById("result");
let num1;
let num2;

firstInput.oninput = onFirstInput;
secondInput.oninput = onSecondInput;
oper.onchange = onChange;

function onFirstInput() {
  num1 = Number(firstInput.value);
}

function onSecondInput() {
  num2 = Number(secondInput.value);
}

function onChange() {
  switch (oper.value) {
    case "+":
      result.innerHTML = num1 + num2;
      break;
    case "-":
      result.innerHTML = num1 - num2;
      break;
    case "*":
      result.innerHTML = num1 * num2;
      break;
    case "/":
      result.innerHTML = num1 / num2;
      break;
  }
}
