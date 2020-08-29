class Calculator {
  constructor() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.action = "+";
    this.result = null;
  }

  setFirstNumber(num) {
    if (!isNaN(num)) this.firstNumber = Number(num);
    else {
      this.firstNumber = 0;
      alert("not a number!");
    }
  }

  setSecondNumber(num) {
    if (!isNaN(num)) this.secondNumber = Number(num);
    else alert("not a number!");
  }

  setAction(action) {
    if (action === "+" || action === "-" || action === "*" || action === "/")
      this.action = action;
    else alert("incorrect action!");
  }

  allAreFilled() {
    return this.firstNumber !== null &&
      this.action !== null &&
      this.secondNumber !== null
  }

  getResult() {
    let check = this.allAreFilled();
    if (check==false) {
      return null;
    }
    if (this.action === "*") return this.firstNumber * this.secondNumber;
    if (this.action === "+") return this.firstNumber + this.secondNumber;
    if (this.action === "-") return this.firstNumber - this.secondNumber;
    if (this.action === "/")
      if (this.secondNumber == 0) {
        alert("divided by 0");
        return null;
      } else return this.firstNumber / this.secondNumber;
  }
}

let calculator = new Calculator();

function onFirstNumberInput() {
  calculator.setFirstNumber(document.getElementById("first-number").value);
  setResult();
}

function onActionChange() {
  calculator.setAction(document.getElementById("action").value);
  setResult();
}

function onSecondNumberInput() {
  calculator.setSecondNumber(document.getElementById("second-number").value);
  setResult();
}

function setResult() {
  res = document.getElementById("result");
  if (calculator.getResult() !== null){
    res.innerText = "= " + calculator.getResult();
  }
  else 
  res.innerText = "";
}
