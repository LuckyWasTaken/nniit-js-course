// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToNam(fio) {
  const [lastName, firstName] = string.split(" ");
  return lastName + " " + firstName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
  const set = new Set(array);
  return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
  const [mini, maxi] = array.reduce(
    function([mini, maxi], current) {
      mini = Math.min(mini, current);
      maxi = Math.max(maxi, current);
      return [mini, maxi];
    },
    [array[0], array[0]]
  );
  return maxi / mini;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      array.push("FooBar");
      continue;
    }
    if (i % 3 == 0) {
      array.push("Foo");
      continue;
    }
    if (i % 5 == 0) {
      array.push("Bar");
      continue;
    }
    array.push(i);
  }
  return array;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  constructor() {
    this._dictionary = new Map();
  }
  isString(str) {
    if (typeof str != "string") {
      console.log("Please, check the data entered");
      return false;
    }
    return true;
  }
  add(word, interpretation) {
    if (this.isString(word) && this.isString(interpretation)) {
      this._dictionary.set(word, interpretation);
    }
  }
  delete(word) {
    if (this.isString(word) && this._dictionary.has(word)) {
      this._dictionary.delete(word);
      return;
    }
  }
  get(word) {
    if (this.isString(word) && this._dictionary.has(word)) {
      return this._dictionary.get(word);
    }
    return "WARNING! There is no such word in the dictionary.";
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
  fooBar
};
