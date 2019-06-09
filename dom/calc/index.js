const firstNumElement=document.getElementById("firstNum");
const secondNumElement=document.getElementById("secondNum");
const actionElement=document.getElementById("action");
const resultElement=document.getElementById("result");

let num=0;
let num2=0;
let action;
let res=0;
actionElement.selectedIndex=0;
function onFirstInput(){
    num=Number(firstNumElement.value);
    giveResult()
}
function onSecondInput(){
    num2=Number(secondNumElement.value);
    giveResult()
}
function onSelection(){
    action=actionElement.selectedIndex;
    giveResult()
}
function giveResult(){
    console.log("Counting")
    if(action==0){
        resultElement.innerHTML=num+num2;
    }
    if(action==1){
        resultElement.innerHTML=num-num2;
    }
    if(action==2){
        resultElement.innerHTML=num/num2;
    }
    if(action==3){
        resultElement.innerHTML=num*num2;
    }
}