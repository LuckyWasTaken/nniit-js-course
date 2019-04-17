const firstNumber = document.getElementById("firstNum");
const secondNumber = document.getElementById("secondNum");
const select = document.getElementById("select");
const result = document.getElementById("result");

firstNumber.oninput = onInputRes;
secondNumber.oninput = onInputRes;
select.onchange = onInputRes;

function countResult(){
    let res;
    if (select.value === "+"){
        res = +firstNumber.value + (+secondNumber.value);
    }
    else if (select.value === "-"){
        res = +firstNumber.value - (+secondNumber.value);
    }
    else if (select.value === "*"){
        //res = (+firstNumber.value * (+secondNumber.value));
        res = (Math.round((+firstNumber.value * (+secondNumber.value)) * 1000000) / 1000000);
    }
    else if (select.value === "/"){
        res = (Math.round((+firstNumber.value / (+secondNumber.value))* 1000000) / 1000000);
    }
    if (isNaN(res)){
        return "wrong input!";
    }
    if (res > 1000000000000000){
        return "too large number";
    }
    return res;
}

function onInputRes(){
    result.style.background = "white";
    result.style.color = "black";
    result.style.fontSize = "15pt";
    result.style.fontWeight = "600";
    result.value = countResult();
    result.innerText = result.value;
}