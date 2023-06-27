const result = document.getElementById("result");
const sign = document.getElementById("sign");
const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");

function calculate() {
  switch (sign.value) {
    case "+":
      result.textContent = Number(val1.value) + Number(val2.value);
      break;
    case "-":
      result.textContent = Number(val1.value) - Number(val2.value);
      break;
    case "*":
      result.textContent = Number(val1.value) * Number(val2.value);
      break;
    case "/":
      result.textContent = Number(val1.value) / Number(val2.value);
      break;
  }
}


val1.addEventListener("change", calculate);
sign.addEventListener("change", calculate);
val2.addEventListener("change", calculate);