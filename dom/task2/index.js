const firstArgInput = document.getElementById('firstArg');
const operationSelect = document.getElementById('operation');
const secondArgInput = document.getElementById('secondArg');
const resultInput = document.getElementById('result');

function performCalculation() {
    const firstArg = parseFloat(firstArgInput.value);
    const secondArg = parseFloat(secondArgInput.value);

    let result;
    switch (operationSelect.value) {
        case 'add':
            result = firstArg + secondArg;
            break;
        case 'subtract':
            result = firstArg - secondArg;
            break;
        case 'multiply':
            result = firstArg * secondArg;
            break;
        case 'divide':
            result = firstArg / secondArg;
            break;
    }

    if (!isNaN(result)) {
        resultInput.innerHTML = result;
    } else {
        resultInput.innerHTML = 'Incorrect arguments';
    }
}

firstArgInput.addEventListener('change', performCalculation);
operationSelect.addEventListener('change', performCalculation);
secondArgInput.addEventListener('change', performCalculation);
