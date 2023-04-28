const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

function calculate() {
const n1 = +num1.value;
const n2 = +num2.value;

switch (operation.value) {
  case "add":
    result.innerText = n1 + n2;
    break;
  case "subtract":
    result.innerText = n1 - n2;
    break;
  case "multiply":
    result.innerText = n1 * n2;
    break;
  case "divide":
    result.innerText = n1 / n2;
    break;
    }
}

num1.addEventListener("input", calculate);
num2.addEventListener("input", calculate);
operation.addEventListener("change", calculate);
