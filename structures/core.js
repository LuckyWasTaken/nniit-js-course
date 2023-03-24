//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
	const words = str.split(' ');
	const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
	return capitalizedWords.join(' ');
	
	return capitalizedWords;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
	if (str.length > n) {
		str = str.slice(0, n) + "...";
	}
	return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
	let isEmpty = JSON.stringify(obj) === '{}'
	return isEmpty;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	for (const [key, value] of Object.entries(obj)) {
        if (typeof(value) === 'number') {
            obj[key] *= 2
        }
    }
	return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	let res = arr.reduce((sum, current) => sum + current, 0);
	return res;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	str = str.toLowerCase()
	for (var i = 0; i < str.length/2; i++) {
		if (str[i] != str[str.length - i - 1]) {
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
  isPali
};
