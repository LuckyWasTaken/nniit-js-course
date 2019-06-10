const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");


let result = document.getElementById("result");

function calculate()
{

    let x = num1.value || 0;
    let y = num2.value || 0;
    
    x=parseInt(x,10);
    y=parseInt(y,10);

 //   console.log(x,y,operator.value);

    if (isNaN(x) || isNaN(y)) 
    {
        result.innerHTML = "Error, pls enter number";
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
                {
                    res *= x;
                }
                result.innerHTML= res;
                break;
        }
    }
}