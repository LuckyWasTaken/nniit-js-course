function calculate() {
  let x = document.getElementById("x").value || 0;
  let y = document.getElementById("y").value || 0;
  let res = document.getElementById("result");
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  const operation = document.getElementById("operation").value;
  switch (operation) {
    case "+": {
      res.innerHTML = x + y;
      break;
    }
    case "-": {
      res.innerHTML = x - y;
      break;
    }
    case "*": {
      res.innerHTML = x * y;
      break;
    }
    case "÷": {
      res.innerHTML = x / y;
      break;
    }
    case "%": {
      res.innerHTML = x % y;
      break;
    }
    case "^": {
      let result = x;
      for (let i = 1; i < y; i++) {
        result *= x;
      }
      res.value = result;
      break;
    }
    case "&": {
      res.innerHTML = x & y;
      break;
    }
    case "|": {
      res.innerHTML = x | y;
      break;
    }
  }
}
