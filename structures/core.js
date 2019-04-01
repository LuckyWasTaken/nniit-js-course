//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if (!str) return str;
    let newStr = str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    return newStr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
	if(n > str.length)
	return str;
	let newStr = str.substr(0, n) + "...";
	return newStr;	
}

//Определите, пуст ли объект
function isEmpty(obj) {
	for(let key in obj){
		return false;
	}
	return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	for(let key in obj){
		if(isNumber(obj[key])){
			obj[key] *= 2;
		}
	}
	return obj;
}
function isNumber (n){
	return !isNaN(parseFloat(n) && isFinite(n));
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	return arr.reduce(function(sum, current) {
		return sum + current;
	}, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

module.exports = {
	capitalize,
	truncate,
	isEmpty,
	multiply,
	sumArr,
	isPali,
};


