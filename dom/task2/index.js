function calculate() {
  let first_number = Number(document.getElementById('first_number').value);
  let second_number = Number(document.getElementById('second_number').value);
  let operation = document.getElementById('operation').value;
  let ans = 0;

  switch (operation) {
    case '+':
      ans = first_number + second_number;
      break;
    case '-':
      ans = first_number - second_number;
      break;
    case '*':
      ans = first_number * second_number;
      break;
    case '/':
      ans = first_number / second_number;
      break;
    default:
      ans = "Wrong operator";
  }

  document.getElementById('ans').textContent = ans;
}
