let answer = document.getElementById("answer");
let selector = document.getElementById("sign");
let first = document.getElementById("first");
let second = document.getElementById("second");

function someChanged() {
  switch (selector.value) {
    case "+":
      answer.textContent = Number(first.value) + Number(second.value);
      break;
    case "-":
      answer.textContent = Number(first.value) - Number(second.value);
      break;
    case "*":
      answer.textContent = Number(first.value) * Number(second.value);
      break;
    case "\\":
      answer.textContent = Number(first.value) / Number(second.value);
      break;
  }
}

selector.addEventListener("change", someChanged);
first.addEventListener("input", someChanged);
second.addEventListener("input", someChanged);
