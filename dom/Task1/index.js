const textBlock = document.getElementById('text-block');
const greenButton = document.getElementById('green-button');
const violetButton = document.getElementById('violet-button');

greenButton.addEventListener('click', function() {
    textBlock.style.color = '#008a00';
});

violetButton.addEventListener('click', function() {
    textBlock.style.color = '#af01af';
});