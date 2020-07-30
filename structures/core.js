//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if(str=="")return str;
    let len = str.length;
            return str[0].toUpperCase() + str.substring(1, len);
}
//Для капитализации всех слов в строке(задание со звездочкой)
function capitalizeAllWordsInString(str) {
    if(str=="")return str;
    let divStr=str.split(" ");
    str=""
    let j=0;
        for(let i=0;i<divStr.length;i++) {
            str+=divStr[i].charAt(j).toUpperCase()+divStr[i].substring(j+1,divStr[i].length)+" ";
            j=0;
        }
         return str;
}
//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
        let len = str.length;
		if(n > len)return str;
		str=str.substring(0,n)+"...";
		return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
	  for(let i in obj)
		  if(obj[i]!==null)return false;
            return true;	  
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
     for(key in obj){
          if(typeof obj[key]==='number'){
             obj[key]= obj[key]*2;
          }
     }
     return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	let result=arr.reduce(function(x,y){
		return x+y;
	},0);
	return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    let len = str.length;
    let strCmp="";
    for (let j = len; j > 0;j--) {
        strCmp+= str.charAt(len-1);
        len--;
    }
    if(strCmp==str)return true;
    return false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
