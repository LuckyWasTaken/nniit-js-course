const redButtonElement = document.getElementById("redButton");
const blueButtonElement = document.getElementById("blueButton");
let blue = 0;
let red = 0;
function changeColorBlue() {
  if (red === 1 || red === 0) {
    document.body.style.color = "blue";
    blueButtonElement.style.color = "blue";
    if (red === 1) {
      red ^= 1;
    }
    redButtonElement.style.color = "";
  }
  if (blue === 1) {
    document.body.style.color = "";
    blueButtonElement.style.color = "";
  }
  blue ^= 1;
}
function changeColorRed() {
  if (blue === 1 || blue === 0) {
    document.body.style.color = "red";
    redButtonElement.style.color = "red";
    if (blue === 1) {
      blue ^= 1;
    }
    blueButtonElement.style.color = "";
  }
  if (red === 1) {
    document.body.style.color = "";
    redButtonElement.style.color = "";
  }
  red ^= 1;
}

blueButtonElement.onclick = changeColorBlue;
redButtonElement.onclick = changeColorRed;
