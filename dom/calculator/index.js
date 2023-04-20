const num1 = document.getElementById("a");
const num2 = document.getElementById("b");
const res = document.getElementById("c");
const operator = document.getElementById("operator");

function calc()
{
    const a = +num1.value;
    const b = +num2.value;
	let c = 0;
    switch (operator.value)
	{
        case "add":
            c = a + b;
            break;
        case "subtract":
            c = a - b;
            break;
        case "multiply":
            c = a * b;
            break;
        case "divide":
            c = a / b;
            break;
    }
	res.innerText = c;
}

num1.addEventListener("input", calc);
num2.addEventListener("input", calc);
operator.addEventListener("change", calc);