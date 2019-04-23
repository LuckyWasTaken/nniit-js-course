const resultButton = document.getElementById("resultButton");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let select = document.getElementById("select");
let result = document.getElementById("result");
let op1;
let op2;

num1.oninput = function() {
  op1 = Number(num1.value);
};

num2.oninput = function() {
  op2 = Number(num2.value);
};

resultButton.onclick = function() {
  switch (select.value) {
    case "+":
      result.innerHTML = op1 + op2;
      break;
    case "-":
      result.innerHTML = op1 - op2;
      break;
    case "*":
      result.innerHTML = op1 * op2;
      break;
    case "/":
      result.innerHTML = op1 / op2;
      break;
  }
};
