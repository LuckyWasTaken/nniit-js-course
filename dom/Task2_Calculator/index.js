function calculate() {
    const lValue = Number(document.getElementById("lValue").value);
    const rValue = Number(document.getElementById("rValue").value);
    const operator = document.getElementById("operator").value;
    let result;
    switch (operator) {
        case "+":
            result = lValue + rValue;
            break;
        case "-":
            result = lValue - rValue;
            break;
        case "*":
            result = lValue * rValue;
            break;
        case "/":
            result = lValue / rValue;
            break;
        default:
            result = "incorrect expression!";
    }
    document.getElementById("result").textContent = result;
}