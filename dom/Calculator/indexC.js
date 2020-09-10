const first = document.getElementById('first');
const second = document.getElementById('second');
const operation = document.getElementById('operation');
const result = document.getElementById('result');

function calculator() {
    if(first.value != "" && operation.value === "/" && second.value === "0" ) {
        result.innerHTML = "ZeroDivisionError!";
    }

    else if(first.value != "" && second.value != "" && operation.value != "") {
        result.innerHTML = eval(first.value + operation.value + second.value);   
    }

    else {
        result.innerHTML = "Enter your numbers!";  
    }  
}
