const form = document.forms.calculator;

function calculator(value1Num, value2Num, select) {
    value1Num = parseFloat(value1Num)
    value2Num = parseFloat(value2Num)
    if (isNaN(value1Num) || isNaN(value2Num)) {
        return "Вводите только цифры"
    }
    let result = 0
    switch(select){
        case "+":
            result = value1Num + value2Num;
            break;
        case "-":
            result = value1Num - value2Num;
            break;
        case "×":
            result = value1Num * value2Num;
            break;
        case "÷":
            result = value1Num / value2Num;
            break;
        case "^":
            result = value1Num ** value2Num;
            break;
        case "√":
            result = Math.pow(value1Num, 1/value2Num);
            break;
        default:
            return "Значение не определено";
    }
    return result;
}

function result_calculator() {
    document.getElementById("output").innerHTML = calculator(form.value1.value, form.value2.value, form.select.value);
}

form.value1.onchange = result_calculator;
form.value2.onchange = result_calculator;
form.select.onchange = result_calculator;