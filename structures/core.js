//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
	return str.split(' ').map(function(stringWord){ 
					return stringWord[0].toUpperCase()+stringWord.substr(1);
					}).join(' ');
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
	if(n > str.length){
		return str;
	}
	return str.substr(0,n)+"...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return !(keys(obj).length)
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	for (var index in obj){
    		if(+obj[index]===obj[index]){
			obj[index] *= 2;
   		}
	}
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sum,element){ 
		    	return sum+element; 
  	  	    },0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    return (str === "") || (str[0] == str[str.length-1]) && isPali(str.substr(1,str.length-2)) ;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
