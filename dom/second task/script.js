let operator;
  function out() {
    let result;
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if (b) {
          result = a / b;
        } else {
          result = 'NaNa';
        }
        break;
      default:
        result = 'Choice +/-/*/:';
    }

    document.getElementById("result").innerHTML = result;
  }
