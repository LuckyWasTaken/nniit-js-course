// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fioString) {
	let [firstName, lastName, ...rest] = fioString.split(' ');
	return lastName+" "+ firstName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
	let set = new Set(arr);
	return [...set];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
	return Math.max(...arr)/Math.min(...arr);
	// Я присмотрелась к .reduce, честно. Но таким способом мне нравится больше =)
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами

function fooBar(n) {
	let arr = [];
	for(let i = 1; i < n; i++){
		if(i % 15 === 0){
			arr.push("FooBar");
		} else if(i % 3 === 0){
			arr.push("Foo");
		} else if(i % 5 === 0) {
			arr.push("Bar");
		} else arr.push(i);
	}	 
	return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {

	constructor() {
		this._map = new Map();
	}

	addWord(word, value) {
		if(typeof word == "string" && this._map.has(word) != true){
			this._map.set(word, value);
			return true;
		}
		return false;
	}

	deleteWord(word) {
		if(this._map.has(word) == true){
			this._map.delete(word);
			return true;
		}
	}

	findWord(word) {
		if(this._map.has(word) == true){
			this._map.get(word);
			return true;
		}
	}
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
