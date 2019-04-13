// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName() {
  const str = arguments[0].split(" ");
  return str[1] + " " + str[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
  const arrU = new Set();
  arr.forEach(arg => arrU.add(arg));
  arr = Array.from(arrU);
  return arr;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
  if (arr == !arr) {
    return false;
  }
  arr.sort((a, b) => a - b);
  return arr.pop() / arr.shift();
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  if (typeof n != "number") {
    return false;
  }
  let arr = [];
  let buf;
  while (n > 0) {
    if (n % 3 == 0 || n % 5 == 0) {
      if (n % 3 == 0) {
        buf = "Foo";
      }
      if (n % 5 == 0) {
        buf += "Bar";
      }
      arr.unshift(buf);
    } else {
      arr.unshift(n);
    }
    buf = "";
    n--;
  }
  return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  constructor() {
    this.dict = new Map();
  }
  addWord(word, translate) {
    if (typeof word != "string" || typeof translate != "string") {
      console.log(`TypeError`);
      return false;
    }
    if (this.dict.has(word) == true) {
      console.log("Это слово уже присутствует в словаре!");
      return false;
    }
    this.dict.set(word, translate);
    return `Слово ${word} (${translate}) записано в словарь!`;
  }
  getWord(word) {
    //console.log(`${word} - ${this.dict.get(word)}`);
    return this.dict.get(word);
  }
}
module.exports = {
  fooBar,
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference
};
