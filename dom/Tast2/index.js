function calculate() {
    const firstNumber = parseInt(document.getElementById("first-number").value);
    const secondNumber = parseInt(document.getElementById("second-number").value);
    const operation = document.getElementById("operation").value;
    let result = '';
    
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        switch (operation) {
        case "plus":
            result = firstNumber + secondNumber;
            break;
        case "minus":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            if (secondNumber != 0) {
                result = firstNumber / secondNumber;
            } else {
                result = 'Деление на 0!'
            }
            break;
        case "power":
            result = Math.pow(firstNumber, secondNumber);
            break;
        default:
            result = 0;
        }
    }   

    document.getElementById("result").innerHTML = result;
}