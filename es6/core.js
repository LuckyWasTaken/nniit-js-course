// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
  let arr = str.split(" ");
  return arr[1] + " " + arr[0];
}


// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
  let set = new Set();
 arr.forEach(element => {
    set.add(element);
  });
}


// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
  let max = arr.reduce(function(max, cur) {
    if (cur > max) return cur;
    return max;
  }, 0);
  let min = arr.reduce(function(min, cur) {
    if (cur < min) return cur;
    return min;
  }, max);
  return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      arr.push("FooBar");
    } else if (i % 3 == 0) {
      arr.push("Foo");
    } else if (i % 5 == 0) {
      arr.push("Bar");
    } else {
      arr.push(i);
    }
  }
  return arr;
}


// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  constructor() {
    this._dict = new Map();
  }
  addWord(word, meaning) {
    if (this.checkWord(word) && this.checkWord(meaning)) {
      this._map.set(word, meaning);
      return true;
    }
    return false;
  }
  getWord(word) {
    if (this.checkWord(word) && this.has(word)) {
      this._map.get(word);
    }
  }
  deleteWord(word) {
    if (this.checkWord(word)) {
      this._map.delete(word);
    }
  }
  checkWord(word) {
    return word && typeof word === "string";
  }
} 

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
