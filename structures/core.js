//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str)
{
	return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n)
{
	if (n > str.length)
	{
		return str;
	}
	return str.slice(0, n).concat("...");
}

//Определите, пуст ли объект
function isEmpty(obj)
{
	return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj)
{
	for (let [key, value] of Object.entries(obj))
	{
		if (typeof value === 'number')
		{
			obj[key] = value * 2;
		}
	}
	return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr)
{
	return arr.reduce(function (sum, n) {
		return sum + n }, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str)
{
	for (let i = 0; i < str.length/2; i++)
	{
		if (str[i] != str[str.length - 1 - i])
		{
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
