num1Element = document.getElementById('Num1');
// num1 = parseInt(num1Element.value);
num2Element = document.getElementById('Num2');
// num2 = parseInt(num2Element.value);
operElement = document.getElementById('Calc');
resElement = document.getElementById('Res');


function calculator() {
    switch (operElement.value) {
        case "+":
            resElement.innerHTML = parseFloat(num1Element.value) + parseFloat(num2Element.value);
            break;
        case "-":
            resElement.innerHTML = parseFloat(num1Element.value) - parseFloat(num2Element.value);
            break;
        case "*":
            resElement.innerHTML = parseFloat(num1Element.value) * parseFloat(num2Element.value);
            break;
        case "/":
            resElement.innerHTML = parseFloat(num1Element.value) / parseFloat(num2Element.value);
            break;
        case "^":
            resElement.innerHTML = Math.pow(parseFloat(num1Element.value), parseFloat(num2Element.value));
            break;
        case "%":
            resElement.innerHTML = parseFloat(num1Element.value) % parseFloat(num2Element.value);
            break;
        default:
            break;
    }
}