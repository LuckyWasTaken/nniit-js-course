function resultFunction() {
    var oper1 = document.getElementById("input1").value;
    var oper2 = document.getElementById("input2").value;
    var sign = document.getElementById("sign").value;

    switch (sign) {
        case "+":
        document.getElementById("result").innerHTML = +oper1 + +oper2;
          break;
        case "-":
        document.getElementById("result").innerHTML = oper1 - oper2;
          break;
        case "*":
        document.getElementById("result").innerHTML = oper1 * oper2;
          break;
        case "/":
        document.getElementById("result").innerHTML = +oper1 / +oper2;
          break;
    }
}