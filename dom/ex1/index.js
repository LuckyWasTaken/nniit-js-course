const bigTextElement = document.getElementById("bigText");
const blueButtonElement = document.getElementById("blueButton");
const redButtonElement = document.getElementById("redButton");
const greenButtonElement = document.getElementById("greenButton");
const randomButtonElement = document.getElementById("randomButton");

blueButtonElement.addEventListener("click", () => {
    bigTextElement.style.color = "blue";
});
redButtonElement.addEventListener("click", () => {
    bigTextElement.style.color = "red";
});
greenButtonElement.addEventListener("click", ()=>{
    bigTextElement.style.color = "green";
    
});

randomButtonElement.addEventListener("click",()=>{
    let r=Math.floor(Math.random() * (256));
    let g=Math.floor(Math.random() * (256));
    let b=Math.floor(Math.random() * (256));
    bigTextElement.style.color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
 
});