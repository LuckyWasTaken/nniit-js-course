let answer = document.getElementById('answer')
let selector = document.getElementById('sign')
let firstInput = document.getElementById('first')
let secondInput = document.getElementById('second')


function someChanged(){
    switch(selector.value){
        case '+':
            answer.textContent = Number(firstInput.value) + Number(secondInput.value)
            break;
        case '-':
            answer.textContent = Number(firstInput.value) - Number(secondInput.value)
            break;
        case '*':
            answer.textContent = Number(firstInput.value) * Number(secondInput.value)
            break;
        case '\\':
            answer.textContent = Number(firstInput.value) / Number(secondInput.value)
            break;
    }
}


selector.addEventListener("change", someChanged)
firstInput.addEventListener('input', someChanged)
secondInput.addEventListener('input', someChanged)
