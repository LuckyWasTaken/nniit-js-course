const operand1 = document.getElementById("operand1");
const op = document.getElementById("op");
const operand2 = document.getElementById("operand2");
const result = document.getElementById("result");

let val = 0, val2 = 0;

operand1.oninput = getFirstInput;
op.onchange = getChange;
operand2.oninput = getSecondInput;

function getFirstInput() {
  val1 = Number(operand1.value);
}

function getSecondInput() {
  val2 = Number(operand2.value);
}

function getChange() {
  switch (op.value) {
    case "+":
      result.innerHTML = val1 + val2;
      break;
    case "-":
      result.innerHTML = val1 - val2;
      break;
    case "*":
      result.innerHTML = val1 * val2;
      break;
    case "/":
      result.innerHTML = val1 / val2;
      break;
  }
}