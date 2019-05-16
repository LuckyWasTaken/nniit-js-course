const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const story=document.getElementById("story")

button1.onclick=changeColor;
button2.onclick=ChangeRandColor;

function changeColor(){
    story.style.color='blue';
}

function ChangeRandColor(){
    let r=Math.floor(Math.random() * (256));
    let g=Math.floor(Math.random() * (256));
    let b=Math.floor(Math.random() * (256));
    let c='#' + r.toString(16) + g.toString(16) + b.toString(16);
    story.style.color=c;
}