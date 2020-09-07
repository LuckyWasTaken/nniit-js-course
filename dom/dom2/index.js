const form = document.forms.calculator;

function calc(firstOperanda, secondOperanda, operation) {
    
    firstOperanda = parseFloat(firstOperanda)
    secondOperanda = parseFloat(secondOperanda)

    if (isNaN(firstOperanda) || isNaN(secondOperanda)) {
        return "Вводите только цифры, пожалуйста"
    }

    let result = 0

    if (operation === '+') {
        result = firstOperanda + secondOperanda
    } else if (operation ===  '-') {
        result = firstOperanda - secondOperanda
    } else if (operation ===  '×') {
        result = firstOperanda * secondOperanda
    } else if (operation ===  '÷') {
        result = firstOperanda / secondOperanda
    } else if (operation ===  '^') {
        result = firstOperanda ** secondOperanda
    } else if (operation ===  '√') {
        result = Math.pow(firstOperanda, 1/secondOperanda)
    } else {
        result = firstOperanda % secondOperanda
    } 

    if (!isFinite(result)){
        return "Значение не определено"
    }

    return result
    
}

function resultCalc() {
    document.getElementById("output").innerHTML = calc(form.first.value, form.second.value, form.operation.value);
}

form.first.onchange = resultCalc;
form.second.onchange = resultCalc;
form.operation.onchange = resultCalc;