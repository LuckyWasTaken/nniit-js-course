let buttons=document.querySelectorAll("#blockId > button");
let text=document.querySelector(".textBlock")
function changeColor(){
  if(this.name=="button1"){
    text.style.color=this.innerHTML;
  }
  if(this.name=="button2"){
    text.style.color=this.innerHTML;
  }
}
for(i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click',changeColor);
}
