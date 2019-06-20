let firstElement;
let secondElement;
let operator;
function setFirstOperand(){
    firstElement = (Number)(document.getElementById('first').value) || 0;
}
function setSecondOperand(){
    secondElement = (Number)(document.getElementById('second').value) || 0;
    }
function setSelection(){
    operator=document.getElementById('selectAction').value;
    
}
function findAnswer(){
    setFirstOperand();
    setSecondOperand();
    setSelection();
    if (operator === '+'){
       document.getElementById('result').value = firstElement + secondElement;
    }else if (operator === '-'){
        document.getElementById('result').value = firstElement - secondElement;
    }
    else if (operator === '*'){
        document.getElementById('result').value = firstElement * secondElement;
    }else if(operator === '/'){
        document.getElementById('result').value = firstElement / secondElement;
    }

}