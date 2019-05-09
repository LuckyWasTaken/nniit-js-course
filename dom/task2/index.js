function calculate() {
    let x = document.getElementById("number1").value||0;
    let y = document.getElementById("number2").value||0;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    const operation = document.getElementById("operation").value;
    switch(operation) {
        case("+"):
            document.getElementById("result").innerHTML = x + y;
            break;
        case("-"):
            document.getElementById("result").innerHTML = x - y;
            break;
        case("*"):
            document.getElementById("result").innerHTML = x * y;
            break;
        case("÷"):
            document.getElementById("result").innerHTML = x / y;
            break;
        case("%"):
            document.getElementById("result").innerHTML = x % y;
            break;
        case("^"):
            let result = x;
            for (let i = 0; i < y; i++) {
                result *= x;
            }
            document.getElementById("result").value = result;
            break;
        }
    }