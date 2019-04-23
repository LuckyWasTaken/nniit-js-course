const button = document.getElementById("button");
let cube1 = document.getElementById("cube1");
let cube2 = document.getElementById("cube2");
let select = document.getElementById("select");
const result = document.getElementById("result");
let num1 ;
let num2 ;

 cube1.oninput = function() {
  num1 = Number(cube1.value);
};

 cube2.oninput = function() {
  num2 = Number(cube2.value);};


button.onclick = function() {
  switch (select.value) {
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
  };