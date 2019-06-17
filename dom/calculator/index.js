sign.onchange = function() {
    var rez = document.getElementById("rezult");
    var a = +document.getElementById("elem1").value;
    var b = +document.getElementById("elem2").value;
    var sign = document.getElementById("sign").value;
    
    if(!isNaN(a)&&!isNaN(b)){
    switch(sign){
        case "+":
            rez.innerHTML = a + b;
            break;
        case "-":
            rez.innerHTML = a - b;
            break;
        case "*":
            rez.innerHTML = a * b;
            break;
        case "/":
            rez.innerHTML = a / b;
            break;
    }
    }
    else{
        rez.innerHTML = "Введите число!";
    }
};