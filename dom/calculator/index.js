function calculate() {
	const numA = document.getElementById("numA").value
	const numB = document.getElementById("numB").value
	const oper = document.getElementById("operator").value
	const result = document.getElementById("result")

	document.getElementById("numB").disabled = false

	if      (oper == "+")  { result.textContent = Number(numA) + Number(numB) }
	else if (oper == "-")  { result.textContent = numA - numB }
	else if (oper == "*")  { result.textContent = numA * numB }
	else if (oper == "/")  { result.textContent = numA / numB }
	else if (oper == "^2") {
		document.getElementById("numB").disabled = true
		result.textContent = numA * numA
	}
}
