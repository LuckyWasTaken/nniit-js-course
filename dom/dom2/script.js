const form = document.forms.calculator;

function calculatrFormValue () {
    let firstNumber = form.first.value;
    let operator = form.operator.value;
    let secondNumber = form.second.value;
    let res = calculateResult(firstNumber, operator, secondNumber);
    document.getElementById("output").innerHTML = res;
}

form.first.onchange = calculatrFormValue;
form.operator.onchange = calculatrFormValue;
form.second.onchange = calculatrFormValue;

function calculateResult(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return 0;
    }
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case '*':
            return firstNumber * secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
        case '%':
            return firstNumber % secondNumber;
            break;
    }
}

