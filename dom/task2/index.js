    const number1=document.getElementById("number1");
    const number2=document.getElementById("number2");

    let result=document.getElementById("result");
    function calculate(){
        let x=number1.value||0;
        let y=number2.value||0;
        x=parseInt(x,10);
        y=parseInt(y,10);
        if(isNaN(x)||isNaN(y)){
            result.innerHTML="Wrong type, enter the number again";
        }
        else{
            switch(operation.value){
                case("+"):
                    result.innerHTML=x+y;
                    break;
                case("-"):
                    result.innerHTML=x-y;
                    break;
                case("*"):
                    result.innerHTML=x*y;
                    break;
                case("÷"):
                    result.innerHTML=x/y;
                    break;
                case("^"):
                    let resultTotal=x;
                    for(let i=1;i<y;i++){
                        resultTotal*=x;
                    }
                    result.innerHTML=resultTotal;
                    break;
                case("%"):
                    result.innerHTML=x%y;
                    break;
            }   
        }
    }
