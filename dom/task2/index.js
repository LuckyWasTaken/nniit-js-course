function calculate(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = document.getElementById('result');
    var result;
    var op = document.getElementById("op").value;
    if (!isNaN(n1) && !isNaN(n2) && n1 != '' && n2 != ''){
        switch(op){
            case '+': 
                result = +n1 + +n2; 
                break;
            case '-': 
                result = +n1 - +n2; 
                break;
            case '*': 
                result = +n1 * +n2; 
                break;
            case '/':
                result = +n1 / +n2;
                break;
        }
        res.innerHTML = result;
    }
    else {
        res.innerHTML = '';  
    }
}