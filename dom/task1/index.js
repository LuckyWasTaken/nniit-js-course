const redButton=document.getElementById("redButton");
const blueButton=document.getElementById("blueButton");
const textColor=document.getElementById("textForChange");

redButton.onclick=changeColorRed;
blueButton.onclick=changeColorBlue;

function changeColorBlue(){
    textColor.style.color = "blue";
}

function changeColorRed(){
    textColor.style.color = "red";
}
