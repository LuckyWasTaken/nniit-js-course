//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
	let newStr = "";
	for (let i = 0; i < str.length; i++){
		if (i === 0 || str[i - 1] === ' '){
			newStr += str[i].toUpperCase();
		}
		else{
			newStr += str[i];
		}
	}
	return newStr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
	if (str.length <= n) {
		return str;
	}
	return str.substr (0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
	for (let key in obj){
		return false;
	}
	return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	for (let key in obj) {
		if (isFinite(obj[key])) {
		 	obj[key] *= 2;
		}
	}
	return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	return arr.reduce(function (sum, element) {return sum + element});
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	return (str === str.split("").reverse().join(""));
}

module.exports = {
	capitalize,
	truncate,
	isEmpty,
	multiply,
	sumArr,
	isPali
};
