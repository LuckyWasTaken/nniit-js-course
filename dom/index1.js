const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const text = document.getElementById("text");

redButton.onclick = redClick;
blueButton.onclick = blueClick;

function redClick() {
  text.style.color = "red";
}

function blueClick() {
  text.style.color = "blue";
}
