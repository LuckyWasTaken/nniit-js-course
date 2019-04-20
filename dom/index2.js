const button = document.getElementById("button");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let select = document.getElementById("select");
let result = document.getElementById("result");
let n1;
let n2;
let sign;
num1.oninput = function() {
  n1 = num1.value;
};
num2.oninput = function() {
  n2 = num2.value;
};
select.onchange = function() {
  sign = select.value;
};
button.onclick = function() {
  switch (sign) {
    case "+":
      result.innerHTML = `${Number(n1) + Number(n2)}`;
      break;
    case "-":
      result.innerHTML = `${Number(n1) - Number(n2)}`;
      break;
    case "/":
      result.innerHTML = `${Number(n1) / Number(n2)}`;
      break;
    case "*":
      result.innerHTML = `${Number(n1) * Number(n2)}`;
      break;
  }
};
