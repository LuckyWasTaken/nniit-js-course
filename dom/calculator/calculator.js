let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let sign = document.getElementById("sign");


function calculator(number1, number2, sign){
    switch (sign.value) {
        case '*':
            return number1.value * number2.value;
        case '/':
            return number1.value / number2.value;
        case '-':
            return number1.value - number2.value;
        case'+':
            return number1.value + number2.value;
    }
}

number1.oninput = function(){
   document.getElementById('result').innerHTML = calculator(number1,number2, sign);
   console.log(calculator(number1,number2,sign));
}
number2.oninput = function(){
    document.getElementById('result').innerHTML = calculator(number1,number2, sign);
    console.log(calculator(number1,number2,sign));
}
sign.oninput = function(){
    document.getElementById('result').innerHTML = calculator(number1,number2, sign);
    console.log(calculator(number1,number2, sign));
}

