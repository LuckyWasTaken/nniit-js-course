function calculate() {
    const number1 = Number(document.getElementById("number1").value);
    const operator = document.getElementById("operator").value;
    const number2 = Number(document.getElementById("number2").value);
    const result = document.getElementById("result");

    let answer;
    switch (operator) {
        case "+":
            answer = number1 + number2;
            break;
        case "-":
            answer = number1 - number2;
            break;
        case "*":
            answer = number1 * number2;
            break;
        case "/":
            answer = number1 / number2;
            break;
        case "^":
            answer = Math.pow(number1, number2);
            break;
    }

    result.textContent = answer;
}