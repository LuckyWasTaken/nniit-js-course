const textElement = document.getElementById('text');
const PurpleButton = document.getElementById('purple');
const BlueButton = document.getElementById('blue');

PurpleButton.addEventListener('click', function() {
  textElement.style.color = 'purple';
});

BlueButton.addEventListener('click', function() {
  textElement.style.color = 'blue';
});