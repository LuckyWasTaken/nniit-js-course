const num1=document.getElementById('num1')
const op=document.getElementById('op')
const num2=document.getElementById('num2')
const resLink=document.getElementById('res')

function calculator(){

    if(num1.value!="" && num2.value!="" && op.value!="**")
    {
        resLink.innerText=String(eval(num1.value+op.value+num2.value))  
    }
    else if(num1.value!="" && num2.value!="" && op.value=="**")
    {
        resLink.innerText=String(Math.pow(num1.value,num2.value))
    }      
    else
    {
        resLink.innerText="Nan"  
    }  
}
