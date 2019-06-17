const n1 = document.getElementById("n1").innerHTML;
const Num1 = parseInt(n1.value);
const n2 = document.getElementById("n2").innerHTML;
const Num2 = parseInt(n2.value);
const operation = document.getElementById("operation").innerHTML;
const result = document.getElementById("result").innerHTML;

  function calculate(){
    switch (operation.value){
        case "+": 
            result.innerHTML = Num1 + Num2;
            break;
        case "-": 
            result.innerHTML = Num1 - Num2;
            break;
        case "*": 
            result.innerHTML = Num1 * Num2;
            break;
        case "/": 
            result.innerHTML = Num1 / Num2;
            break;
        case "%": 
            result.innerHTML = Num1 % Num2;
            break;
      }
}