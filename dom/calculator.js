function Calculator() {
    let element1 = document.getElementById("element1").value;
    let element2 = document.getElementById("element2").value;
    let sign = document.getElementById("sign").value;
    let result = document.getElementById("result").value;
    switch (sign) {
        case "+":
        result = parseInt(element1)+parseInt(element2);
          break;
        case "-":
        result = element1-element2;
          break;
        case "*":
        result = element1*element2;
          break;
        case "/":
        result = element1/element2;
        break;
      }
      document.getElementById("result").innerHTML = result;
}
