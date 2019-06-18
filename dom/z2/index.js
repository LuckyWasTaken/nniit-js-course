function calculateResault(){
    let firstNumberElement = document.getElementById("input1");
    let firstNumber = firstNumberElement.value;
    let secondNumberElement = document.getElementById("input2");
    let secondNumber = secondNumberElement.value;
    let operationElement = document.getElementById("selector");
    let operation = operationElement .value;
    if (operation == '+'){
        document.getElementById("output1").innerHTML = Number(firstNumber) + Number(secondNumber);
    }
    if (operation == '-'){
        document.getElementById("output1").innerHTML = Number(firstNumber) - Number(secondNumber);
    }
    if (operation == '*'){
        document.getElementById("output1").innerHTML = Number(firstNumber) * Number(secondNumber);
    }
    if (operation == '/'){
        document.getElementById("output1").innerHTML = Number(firstNumber) / Number(secondNumber);
    }
    if (operation == '^'){
        let answer = 1;
        if (Number(secondNumber) < 0)
        {
            secondNumber *= -1;
            for (let i = 0; i < secondNumber; i++)
            {
                answer /= firstNumber;
            }
        }
        if (Number(secondNumber) > 0)
        {
            for (let i = 0; i < secondNumber; i++)
                {
                    answer *= firstNumber;
                }
        }
        document.getElementById("output1").innerHTML = answer;
    }
}