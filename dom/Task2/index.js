function count() {
    num1 = Number(document.getElementById("num1").value);
    operator = document.getElementById("operator").value;
    num2 = Number(document.getElementById("num2").value);
    result = document.getElementById("result");

    let answer = 0 ;
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
        case "^":
            answer = Math.pow(num1, num2);
            break;
    }

    result.textContent = answer;
}