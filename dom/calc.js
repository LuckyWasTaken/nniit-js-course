calc.oninput = function toCalculate() {

	let form = document.getElementById("calc");
	let num1 = parseFloat(form.elements.x.value);
	let num2 = parseFloat(form.elements.y.value);
	let operator = parseInt(form.elements.operation.value);
	let out = form.elements.z;

	switch(operator){
		case 1: out.value = num1+num2;
		break;
		case 2: out.value = num1-num2;
		break;
		case 3: out.value = num1*num2;
		break;
		case 4: out.value = (num1/num2).toFixed(2);
		break;
		default:
		break;
	}
}