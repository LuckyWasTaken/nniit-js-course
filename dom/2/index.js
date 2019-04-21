function calculate() {
  let element1 = document.getElementById("element1");
  let element2 = document.getElementById("element2");
  let sign = document.getElementById("sign");
  let result = document.getElementById("result");

  if (sign.value === "+") {
    result.innerHTML =
      "= " + (parseFloat(element1.value) + parseFloat(element2.value));
  } else if (sign.value === "-") {
    result.innerHTML = "= " + (element1.value - element2.value);
  } else if (sign.value === "*") {
    result.innerHTML = "= " + element1.value * element2.value;
  } else if (sign.value === "/") {
    result.innerHTML = "= " + element1.value / element2.value;
  }
}
