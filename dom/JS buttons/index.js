const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const text = document.getElementById("textChangingColor");

redButton.onclick = onClickRed;
blueButton.onclick = onClickBlue;

function onClickRed(){
    text.style.color = "#DC143C";
}

function onClickBlue(){
    text.style.color = "#0000CD";
}