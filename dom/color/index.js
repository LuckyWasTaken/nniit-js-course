
let text = document.getElementById ("text");
 
const greenButtonElement = document.getElementById ("greenButton");
  
const yellowButtonElement = document.getElementById ("yellowButton");
  
greenButtonElement.addEventListener("click", onGreenButton);
  
yellowButtonElement.addEventListener("click", onYellowButton);

function onGreenButton(){
    text.style.color = "#00FF00";
}
  
function onYellowButton(){
    text.style.color = "#FFCC33";
}
  