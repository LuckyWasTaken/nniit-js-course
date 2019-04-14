// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
  let [lastName, firstName, ...rest] = str.split(" ");
  return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
  let set = new Set();
  arr.forEach(arr => set.add(arr));
  return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
  if (arr.length == 0) {
    return false;
  }
  const min = arr.reduce((previousValue, currentValue) =>
    previousValue < currentValue ? previousValue : currentValue
  );
  const max = arr.reduce((previousValue, currentValue) =>
    previousValue > currentValue ? previousValue : currentValue
  );
  return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  if (n <= 1) {
    return false;
  }
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      arr.push("FooBar");
    } else if (i % 5 === 0) {
      arr.push("Bar");
    } else if (i % 3 === 0) {
      arr.push("Foo");
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
    this.map = new Map();
  }

  addNewWord(word, meaning) {
    if (typeof word != "string" || typeof meaning != "string") {
      console.log(`Error! Incorrect type`);
      return false;
    }

    if (this.map.has(word)) {
      console.log(`Word ${word} is already in the dictionary!`);
      return false;
    }

    this.map.set(word, meaning);
    console.log(`Word ${word} added to the dictionary!`);
    return true;
  }

  findWord(word) {
    if (this.map.has(word)) {
      console.log(`Word ${word} means ${this.map.get(word)}`);
      return true;
    }
    console.log(`Word ${word} is not in the dictionary!`);
    return false;
  }

  deleteWord(word) {
    if (this.map.delete(word)) {
      console.log(`Word ${word} deleted from the dictionary`);
      return true;
    }
    console.log(`Word ${word} cannot be deleted, it's not in the dictionary`);
    return false;
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
  fooBar
};
