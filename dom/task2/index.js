const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");


let result = document.getElementById("result");

function calculate()
{

    let x = number1.value || 0;
    let y = number2.value || 0;
    
    x=parseInt(x,10);
    y=parseInt(y,10);

    if (isNaN(x) || isNaN(y)) 
    {
        result.innerHTML = "Ошибка, введите число";
    } 
    else 
    {
        switch(operator.value)
        {
            case("+"):
                result.innerHTML = x + y;
                break;
            case("-"):
                result.innerHTML = x - y;
                break;
            case("*"):
                result.innerHTML = x * y;
                break;
            case("÷"):
                result.innerHTML = x / y;
                break;
            case("%"):
                result.innerHTML = x % y;
                break;
            case("^"):
                let res = 1;
                for (let i = 0; i < y; i++) 
                    res *= x;
                result.innerHTML= res;
                break;
        }
    }
}