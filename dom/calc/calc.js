const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const selector = document.getElementById("selector");
const res = document.getElementById("res");
var operator = '+';
function swapoperator()
{
    var operatorindex = selector.selectedIndex;
    operator = selector.options[operatorindex].value;
    return operator;
}
function calculate(a, b)
{
    switch (operator){
    case '+':
        var result = parseFloat(a) + parseFloat(b)
        res.innerText = result
        break;
    case '-':
        var result = parseFloat(a) - parseFloat(b)
        res.innerText = result
    break;
    case '*':
        var result = parseFloat(a) * parseFloat(b)
        res.innerText = result
        break;
    case '/':
        var result = parseFloat(a) / parseFloat(b)
        res.innerText = result
        break;
    case 'sqr':
        var result = Math.pow(parseFloat(a), parseFloat(b))
        res.innerText = result
        break;
    }
}
