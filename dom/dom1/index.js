const blueButton = document.querySelector(".blue_button");
const orangeButton = document.querySelector(".orange_button");
const text = document.querySelector(".text")

blueButton.onclick = function() {
    text.style.color = "blue"
}

orangeButton.onclick = function() {
    text.style.color = "orange"
}