const greenButton = document.querySelector(".green_button");
const redButton = document.querySelector(".red_button");
const text = document.querySelector(".text")

greenButton.onclick = function() {
    text.style.color = "green"
}

redButton.onclick = function() {
    text.style.color = "red"
}