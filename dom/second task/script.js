let a; 
let b;   
let out = document.getElementById('out');
 
function sum() {
 a = document.getElementById('a').value; 
 a = parseInt(a)
 b = document.getElementById('b').value;
 b = parseInt(b)
 
 out.innerHTML = a + b;
}
 
function minus() {
 a = document.getElementById('a').value; 
 a = parseInt(a)
 b = document.getElementById('b').value;
 b = parseInt(b)
 
 out.innerHTML = a - b;
}
 
function mul() {
 a = document.getElementById('a').value; 
 a = parseInt(a)
 b = document.getElementById('b').value;
 b = parseInt(b)
 
 out.innerHTML = a * b;
}
 
function div() {
 a = document.getElementById('a').value; 
 a = parseInt(a)
 b = document.getElementById('b').value;
 b = parseInt(b)
 
 out.innerHTML = a / b;
}