
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let operatorElement = document.getElementById ("operator");
let resultElement = document.getElementById("result")
 
firstNumberElement.oninput = calculate;
secondNumberElement.oninput = calculate;
operatorElement.onchange = calculate;

function calculate(){
    if (!Number.isNaN(+firstNumberElement.value) && !Number.isNaN(+firstNumberElement.value)){

        if (operatorElement.value == "+"){
            resultElement.innerHTML = +firstNumberElement.value + +secondNumberElement.value;
        }

        else if (operatorElement.value === "-"){
            resultElement.innerHTML = +firstNumberElement.value - +secondNumberElement.value;
        }

        else if (operatorElement.value == "*"){
            resultElement.innerHTML = +firstNumberElement.value * +secondNumberElement.value;
        }

        else if (operatorElement.value === "/"){
            resultElement.innerHTML = +firstNumberElement.value / +secondNumberElement.value;
        }

        else {
          resultElement.innerHTML = "";
        }
    }
}


