const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const result = document.getElementById('result');

function calculate() {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);
  const op = operator.value;

  if (isNaN(val1) || isNaN(val2)) {
    result.textContent = 'Invalid input';
    return;
  }

  let answer;
  switch (op) {
    case '+':
      answer = val1 + val2;
      break;
    case '-':
      answer = val1 - val2;
      break;
    case '*':
      answer = val1 * val2;
      break;
    case '/':
      answer = val1 / val2;
      break;
    default:
      result.textContent = 'Invalid operator';
      return;
  }

  result.textContent = answer;
}

num1.addEventListener('input', calculate);
num2.addEventListener('input', calculate);
operator.addEventListener('change', calculate)