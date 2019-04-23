function calc(){
let x = document.getElementById("text1").value;
let y = document.getElementById("text2").value;
let s = document.getElementById("select").value;
let r='';
switch (s) {
case '+':
r =Number(x)+Number(y);
break;
case '-':
r =Number(x)-Number(y);
break;
case '*':
r =Number(x)*Number(y);
break;
case '/':
r =Number(x)/Number(y);
break;
default:
r ='err';
}	
if(!(x===''||y==='')){
document.getElementById("result").innerHTML = `${x}${s}${y}=${r}`
}
};