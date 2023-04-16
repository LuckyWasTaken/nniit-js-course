function calculate(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var el = document.getElementById("operator");
    var operator = el.options[el.selectedIndex].value;
    var result;
    
    if (Number.isNaN(number1) || Number.isNaN(number2)){
        result = "";
    }
    else if (operator === '+'){
        result = number1 + number2;
    }
    else if (operator === '-'){
        result = number1 - number2;
    }
    else if (operator === '*'){
        result = number1 * number2;
    }
    else if (operator === '/'){
        if (number2 === 0){
           result = "Cannot divide by zero!";
        }
        else {
            result = number1 / number2;
        }
    }
    
    document.getElementById("result").innerHTML = result;
}

document.getElementById('number1').oninput = calculate;
document.getElementById('number2').oninput = calculate;
document.getElementById('operator').onchange = calculate;
