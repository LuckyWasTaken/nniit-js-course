let variable_one=0;
let variable_two=0;
let operator = 0;
let variable_result=0;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function doMath(operator, variable_one, variable_two){
	if(operator===0){
		document.getElementsByTagName("h3")[0].innerHTML=variable_one+variable_two;
	}
    if(operator===1){
       document.getElementsByTagName("h3")[0].innerHTML=variable_one-variable_two;
    }
    if(operator===2){
		if (variable_two !== 0){
			document.getElementsByTagName("h3")[0].innerHTML=variable_one/variable_two;
		}
    }
    if(operator===3){
       document.getElementsByTagName("h3")[0].innerHTML=variable_one*variable_two;
    }
}

function onFirst_Operand(){
    if (isNumeric(document.getElementsByTagName("input")[0].value)===true){
		variable_one = Number(document.getElementsByTagName("input")[0].value)
		doMath(operator,variable_one, variable_two)
	}
}
function onSecond_Operand(){
   if (isNumeric(document.getElementsByTagName("input")[1].value)===true){
		variable_two = Number(document.getElementsByTagName("input")[1].value)
		doMath(operator,variable_one, variable_two)
	}
}
function onSelection(){
    operator=document.getElementsByTagName("select")[0].selectedIndex
    doMath(operator,variable_one, variable_two)
}
