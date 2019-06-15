const firstValueElement=document.getElementById("firstValue");
const secondValueElement=document.getElementById("secondValue");
const ansValueElement=document.getElementById("ansValue");
const typeOfOperElement=document.getElementById("typeOfOper");

let fist=0;
let second=0;
let typeOfOper=0;

let oper=[()=>{return first+second;},()=>{return first-second;},()=>{return first*second;},()=>{return first/second;}];

function calcAns(){
    ansValueElement.value=oper[typeOfOper]();
}

function onFirstValueInput(){
    first=Number(firstValueElement.value);
    calcAns();
}
function onSecondValueInput(){
    second=Number(secondValueElement.value);
    calcAns();
}
function onTypeOfOperChange(){
    typeOfOper=typeOfOperElement.value;
    calcAns();
}