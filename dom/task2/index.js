function findResult()
{
    if( document.getElementById("action").value == "+")
    {
        document.getElementById("result").innerHTML = +document.getElementById("num1").value + +document.getElementById("num2").value;
    }
    else if( document.getElementById("action").value == "*")
    {
        document.getElementById("result").innerHTML = +document.getElementById("num1").value * +document.getElementById("num2").value;
    }
}
