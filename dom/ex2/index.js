const leftNumberElement = document.getElementById("leftNumber");
const rightNumberElement = document.getElementById("rightNumber");
const operationsElement = document.getElementById("operations");
const resultElement = document.getElementById("result");

function countAnsw(){
    switch (operationsElement.value){
        case "+": resultElement.innerHTML = Number(leftNumberElement.value) + Number(rightNumberElement.value);
            break;
        case "-": resultElement.innerHTML = leftNumberElement.value - rightNumberElement.value;
        break;
        case "*": resultElement.innerHTML = leftNumberElement.value * rightNumberElement.value;
        break;
        case "/": resultElement.innerHTML = leftNumberElement.value / rightNumberElement.value;
        break;
        case "^": resultElement.innerHTML = Math.pow(leftNumberElement.value, rightNumberElement.value);
        break; 

    }
}

operationsElement.addEventListener("change",countAnsw);
leftNumberElement.addEventListener("input",countAnsw);
rightNumberElement.addEventListener("input",countAnsw);
