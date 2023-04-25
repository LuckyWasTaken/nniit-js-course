//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {

	if ( n > str.length ) { return str }

	return (str.substring(0, n) + "...")
}

//Определите, пуст ли объект
function isEmpty(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false
		}
	}
	return true
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
	// if ( isEmpty(obj) ) { return NaN }

	for (let [key, number] of Object.entries(obj)) {
		if ( (typeof number) == 'number' ) { obj[key] *= 2 }
	}

	return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	return (arr.reduce((a, b) => { return (a + b) }, 0))
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	for (let i = str.length; i > str.length / 2; --i) {
		if (str[str.length - i] != str[i - 1]) { return false }
	}
	return true
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
