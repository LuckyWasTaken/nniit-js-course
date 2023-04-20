function calculate() {
    const left = Number(document.getElementById("first_number").value);
    const right = Number(document.getElementById("second_number").value);
    const operator = document.getElementById("operator").value;
    let result;
    switch (operator) {
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "*":
            result = left * right;
            break;
        case "/":
            result = left / right;
            break;
        default:
            result = "Invalid operator";
    }
    document.getElementById("result").textContent = result;
}
