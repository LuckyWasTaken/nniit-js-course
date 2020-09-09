const blueButton = document.querySelector(".blue_button");
const redButton = document.querySelector(".red_button");
const greenButton = document.querySelector(".green_button");
const text = document.querySelector(".text");

blueButton.onclick = function(){
    text.style.color = "blue"
}

redButton.onclick = function(){
    text.style.color = "red"
} 

greenButton.onclick = function(){
    text.style.color = "green"
}