
class Calculator{
    constructor() {
        this.firstNumber = null;
        this.secondNumber = null;
        this.action = "+";
        this.result = null;
      }

      setFirstNumber(num){
        if(!isNaN(num))
            this.firstNumber = Number(num);
        else
            alert("not a number!")
      }
 
      setSecondNumber(num){
        if(!isNaN(num))
            this.secondNumber = Number(num);
        else
            alert("not a number!")
    }

    setAction(action){
        if(action==="+" || action==="-" || 
           action==="*" || action==="/")
            this.action = action;
        else
            alert("incorrect action!")
    }

    getResult(){
        if(this.action==="*")
            return this.firstNumber*this.secondNumber;
        if(this.action==="/")
            if(this.secondNumber==0)
                alert("divided by 0");
            else
                return this.firstNumber/this.secondNumber;
        if(this.action==="+")
            return this.firstNumber+this.secondNumber;
        if(this.action==="-")
            return this.firstNumber-this.secondNumber;
    }
}

let calculator = new Calculator();

function onFirstNumberInput(){
    calculator.setFirstNumber(document.getElementById("first-number").value);
    if (allAreFilled()){
        setResult();
    }
}

function onActionChange(){
    calculator.setAction(document.getElementById("action").value);
    if (allAreFilled()){
        setResult();
    }
}

function onSecondNumberInput(){
    calculator.setSecondNumber(document.getElementById("second-number").value);
    if (allAreFilled()){
        setResult();
    }
}

function allAreFilled(){
    if(calculator.firstNumber!==null && 
        calculator.action!==null && 
        calculator.secondNumber!==null)
        return true;
    return false;
}

function setResult(){
    res = document.getElementById("result");
    res.innerText = "= " + calculator.getResult();
}