const button1 = document.getElementById("button1");

const button2 = document.getElementById("button2");

const text = document.getElementById("text");

button1.onclick = textColorBlue;
button2.onclick = textColorRed;

function textColorBlue(){
text.style.color = 'blue';
}

function textColorRed(){
 text.style.color = 'red';
}