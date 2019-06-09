const nextColorBElement=document.getElementById('nextColorButton');
const prevColorBElement=document.getElementById('prevColorButton');
const textElement=document.getElementById('text');



let colorArr=['#060F50','#06F050','#F6F050','#06F05F'];
let i=0;
function onNextColorButClick(){
    textElement.style.color=colorArr[i];
    i++;
    if(i===4){
        i=0;
    }
}
function onPrevColorButClick(){
    textElement.style.color=colorArr[i];
    i--;
    if(i===4){
        i=0;
    }
}
nextColorBElement.addEventListener('click',onNextColorButClick);
prevColorBElement.addEventListener('click',onNextColorButClick);