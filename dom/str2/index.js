function calculate() {
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  let operation = document.getElementById('operation').value
  let result = 0

  switch (operation) {
    case 'addition':
      result = num1 + num2
      break
    case 'subtraction':
      result = num1 - num2
      break
    case 'multiplication':
      result = num1 * num2
      break
    case 'division':
      result = num1 / num2
      break
  }

  document.getElementById('result').innerHTML = 'Результат: ' + result
}
