function myFunction(){

if(document.getElementById("operation").value == "+"){
    document.getElementById("result").innerHTML = +document.getElementById("number1").value+ +document.getElementById("number2").value;
    }
if(document.getElementById("operation").value == "*"){
    document.getElementById("result").innerHTML = +document.getElementById("number1").value*+document.getElementById("number2").value;
 }
 if(document.getElementById("operation").value == "-"){
    document.getElementById("result").innerHTML = +document.getElementById("number1").value-+document.getElementById("number2").value;
 }
 if(document.getElementById("operation").value == "/"){
    document.getElementById("result").innerHTML = +document.getElementById("number1").value/+document.getElementById("number2").value;
 }  
}