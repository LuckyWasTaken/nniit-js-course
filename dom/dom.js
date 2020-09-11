const redbutton = document.querySelector(".knopka1");
const bluebutton = document.querySelector(".knopka");
const text = document.querySelector(".text")

redbutton.onclick = function() {
    text.style.color = "red"
}

bluebutton.onclick = function() {
    text.style.color = "blue"
}