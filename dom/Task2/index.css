function updateResult() {
    var first = parseFloat(document.getElementById("firstNum").value)
    var second = parseFloat(document.getElementById("secondNum").value)
    var operation = document.getElementById("operations").value
    var result = ""

    if (!isNaN(first) && !isNaN(second)) {
        if (operation == "+") {
            result = first + second;
        } else if (operation == "-") {
            result = first - second
        } else if (operation == "*") {
            result = first * second
        } else if (operation == "^") {
            result = first ** second
        } else if (operation == "/" && second !== 0) {
            result = first / second
        } else {
            result = "Zero division error"
        }
    }

    document.getElementById("result").value = result;
}