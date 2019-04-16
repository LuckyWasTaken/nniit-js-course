/*function capitalize(str) {
	if (!str)
		return "";
	return str[0].toUpperCase() + str.substring(1, str.length);	
}
*/

//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
	if (typeof str != "string"){
		return null;
	}
	if (!str) {
		return "";
	}
	arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
	}
	return arr.join(" ");
}


//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
	if ((typeof str != "string") || (typeof n != "number")){
		return null;
	}	
	if (!str){
		return "";
	}
	if ((n >= str.length) || (n < 0)){
		return str;
	}
	return str.substring(0, n) + "...";	
}


//Определите, пуст ли объект
function isEmpty(obj) {
	return Object.keys(obj).length === 0
}


//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	for (let key in obj){
	if (typeof obj[key] === "number"){
		obj[key] *= 2;
		}
	}
	return obj;
}


//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	function isNumber(n) {
		return typeof n === "number";
	}
	if (!arr.every(isNumber)){
		return null;
	}
	return arr.reduce(function(sum, current) {
		return sum + current;
	}, 0);
}


//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	if ((typeof str != "string") || (!str)){
		return null;
	}
	res = true;
	for (i = 0, j = str.length - 1; i < j; i++, j--){
		if (str[i] != str[j]){
			res = false;
		}
	}
	return res;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};