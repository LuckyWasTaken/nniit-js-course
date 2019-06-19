let first;
let second;
let operator;
function isNumeric(n) {
    return ((Number)(n)) && isFinite(n);
  }
function setFirstOperand(){
    first = (Number)(document.getElementById('first').value);
}
function setSecondOperand(){
    second = (Number)(document.getElementById('second').value);
    }
function setSelection(){
    operator=document.getElementsByTagName("select")[0].selectedIndex;
    
}
function findAnswer(){
    setFirstOperand();
    setSecondOperand();
    setSelection();
    if (operator === 0){
        document.getElementsByTagName("h2")[0].innerHTML=first + second;
    }else if (operator === 1){
        document.getElementsByTagName("h2")[0].innerHTML=first - second;
    }
    else if (operator === 2){
        document.getElementsByTagName("h2")[0].innerHTML=first * second;
    }else if(operator === 3){
        document.getElementsByTagName("h2")[0].innerHTML=first/ second;
    }

}