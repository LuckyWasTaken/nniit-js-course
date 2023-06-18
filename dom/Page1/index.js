const textBlock = document.getElementById('text');
const purpleButton = document.getElementById('purple');
const blueButton = document.getElementById('blue');

purpleButton.addEventListener('click', function() {
  textBlock.style.color = 'purple';
});

blueButton.addEventListener('click', function() {
  textBlock.style.color = 'blue';
});
