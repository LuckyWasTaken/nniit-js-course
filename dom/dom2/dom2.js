const form = document.forms.calculator;

function calculating(leftNum, operator, rightNum) {
    leftNum = parseInt(leftNum, 10);
    rightNum = parseInt(rightNum, 10);
    if (isNaN(leftNum) || isNaN(rightNum)) {
        return NaN;
    }
    if (operator === '+') {
        return leftNum + rightNum;
    } else if (operator ===  '-') {
        return leftNum - rightNum;
    } else if (operator ===  '*') {
        return leftNum * rightNum;
    } else if (operator ===  '/') {
        return leftNum / rightNum;
    } else if (operator ===  '%') {
        return leftNum % rightNum;
    }
    else {
        return NaN;
    }
}

function calculate() {
    document.getElementById("output").innerHTML = calculating(form.left.value, form.operator.value, form.right.value);
}

form.left.onchange = calculate;
form.operator.onchange = calculate;
form.right.onchange = calculate;
