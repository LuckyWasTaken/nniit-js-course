const textElement = document.getElementById('text');
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');

redButton.addEventListener('click', function() {
  textElement.style.color = 'red';
});

blueButton.addEventListener('click', function() {
  textElement.style.color = 'blue';
});