function calculate()
{
    let left = document.getElementById("left");
    let right = document.getElementById("right")
    let result = document.getElementById("result")

    switch (document.getElementById("action").value) 
    {
        case '+':
            result.innerHTML = (Number(left.value) + Number(right.value));
            break;
        case '-':
            result.innerHTML = (left.value - right.value);
            break;
        case '*':
            result.innerHTML = (left.value * right.value);
            break;
        case '/':
            result.innerHTML = (left.value / right.value);
            break;
        default:
            break;
    }
}
