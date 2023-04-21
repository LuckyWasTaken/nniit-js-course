const number1Input = document.getElementById("number1");
const operatorSelect = document.getElementById("operator");
const number2Input = document.getElementById("number2");
const resultParagraph = document.getElementById("result");

function calculate() {
    const number1 = Number(number1Input.value);
    const number2 = Number(number2Input.value);
    let result;

    switch (operatorSelect.value) {
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            result = number1 / number2;
            break;
    }

    resultParagraph.textContent = `${result}`;
}

number1Input.addEventListener("input", calculate);
number2Input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);
