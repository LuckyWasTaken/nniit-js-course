const result = document.getElementById("result");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

function calculate() {
    let x = number1.value || 0;
    let y = number2.value || 0;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    if (isNaN(x) || isNaN(y)) {
        result.innerHTML = "ERROR";
    } else {
        const operation = document.getElementById("operation").value;
        switch (operation) {
            case("+"):
                result.innerHTML = x + y;
                break;
            case("-"):
                result.innerHTML = x - y;
                break;
            case("*"):
                result.innerHTML = x * y;
                break;
            case("÷"):
                result.innerHTML = x / y;
                break;
            case("%"):
                result.innerHTML = x % y;
                break;
            case("^"):
                let finalResult = x;
                for (let i = 1; i < y; i++) {
                    finalResult *= x;
                }
                result.value = finalResult;
                break;
        }
    }
}