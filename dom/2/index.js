const firstNumElement = document.getElementById("firstNum");
const firstNum = parseInt(firstNumElement.value);
const secondNumElement = document.getElementById("secondNum");
const secondNum = parseInt(secondNumElement.value);
const operationElement = document.getElementById("operationSelect");
const resultElement = document.getElementById("result");

 function calc(){
    switch (operationElement.value){
        case "+": 
            resultElement.innerHTML = parseInt(firstNumElement.value) + parseInt(secondNumElement.value);
            break;
        case "-": 
            resultElement.innerHTML = parseInt(firstNumElement.value) - parseInt(secondNumElement.value);
            break;
        case "*": 
            resultElement.innerHTML = parseInt(firstNumElement.value) * parseInt(secondNumElement.value);
            break;
        case "/": 
            resultElement.innerHTML = parseInt(firstNumElement.value) / parseInt(secondNumElement.value);
            break;
        case "%": 
            resultElement.innerHTML = parseInt(firstNumElement.value) % parseInt(secondNumElement.value);
            break;

     }
}
