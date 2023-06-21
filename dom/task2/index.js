function calculate() {
	const firstNumber = document.getElementById("firstNumber").value
	const operator = document.getElementById("operator").value
	const secondNumber = document.getElementById("secondNumber").value
	const result = document.getElementById("result")

    switch (operator) {
        case "+":
            result.textContent = Number(firstNumber) + Number(secondNumber)
            break
        case "-":
            result.textContent = Number(firstNumber) - Number(secondNumber)
            break
        case "*":
            result.textContent = Number(firstNumber) * Number(secondNumber)
            break
        case "/":
            if (Number(secondNumber) != 0) {
                result.textContent = Number(firstNumber) / Number(secondNumber)
            }
            else {
                alert('Деление на ноль')
            }
            break
    }
}