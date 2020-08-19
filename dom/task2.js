function calculator(){
    const num1=document.getElementById('num1').value
    const op=document.getElementById('op').value
    const num2=document.getElementById('num2').value
    
    if(num1!="" && num2!="" && op!="**")
    {
        document.getElementById('res').innerText=String(eval(num1+op+num2))  
    }
    else if(num1!="" && num2!="" && op=="**")
    {
        document.getElementById('res').innerText=String(Math.pow(num1,num2))
    }
           
    else
    {
        document.getElementById('res').innerText="Nan"  
    }
 
}