const pinkButton = document.getElementById("pinkButton");
const greenButton = document.getElementById("greenButton");
const blackButton = document.getElementById("defaultButton");
const text = document.getElementById("text");

pinkButton.onclick = setPink;
greenButton.onclick = setGreen;
blackButton.onclick = setDefault;

function setPink() {
  text.style.color = "pink";
}

function setGreen() {
  text.style.color = "green";
}

function setDefault() {
  text.style.color = "black";
}
