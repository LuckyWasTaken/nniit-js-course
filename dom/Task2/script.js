function getResult() {
  const val1 = Number(document.getElementById("value1").value);
  const val2 = Number(document.getElementById("value2").value);
  const oper = document.getElementById("operation").value;
  return Calc(val1, val2, oper);
}
function Calc(val1, val2, oper) {
  if (oper == "+") {
    return val1 + val2;
  }
  if (oper == "-") {
    return val1 - val2;
  }
  if (oper == "*") {
    return val1 * val2;
  }
  if (oper == "/") {
    return val1 / val2;
  }
}
