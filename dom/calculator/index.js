let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let select = document.getElementById('operation');

function result() {
    if (select.value == '+') {
        document.getElementById('result').innerHTML = parseFloat(number1.value) + parseFloat(number2.value);
    }
    if (select.value == '-') {
        document.getElementById('result').innerHTML = parseFloat(number1.value) - parseFloat(number2.value);
    }
    if (select.value == '*') {
        document.getElementById('result').innerHTML = parseFloat(number1.value) * parseFloat(number2.value);
    }
    if (select.value == '/') {
        document.getElementById('result').innerHTML = parseFloat(number1.value) / parseFloat(number2.value);
    }
}

number1.oninput = function () {
    result();
}
number2.oninput = function () {
    result();
}
select.onchange = function () {
    result();
}