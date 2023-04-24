function updateResult() {
    var num1 = parseFloat(document.getElementById("firstNum").value)
    var num2 = parseFloat(document.getElementById("secondNum").value)
    var op = document.getElementById("operations").value
    var result = ""
	var isItSingleElemOp = SetVisibility(op);

    if (!isNaN(num1) && !isNaN(num2) || (isItSingleElemOp && !isNaN(num2))) {
		if (op == '/' && num2 == 0) {
			alert("WARNING:division by zero");
			document.getElementById("result").value = NaN;
			return;
		}
		switch (op) {
		  case '+':
			result = num1 + num2;
			break;
		  case '-':
			result = num1 - num2;
			break;
		  case '*':
			result = num1 * num2;
			break;
		  case '/':
			result = num1 / num2;
			break;
		  case '^':
			result = num1 ** num2;
			break;
		  case '!':
			result = factorial(num2)
			break;
		  case "log":
			result = Math.log(num2);
			break;
		}
    }

    document.getElementById("result").value = result;
}

function SetVisibility(op) {
	var firstInput = document.getElementById("firstNum");
	if (op == '!' || op == "log") {
		firstInput.type = 'hidden';
		return true;
	} else {
		firstInput.type = 'number';
	}
	return false;
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}