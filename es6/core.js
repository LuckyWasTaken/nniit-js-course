// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str = "User User") {
  let arr = str.split(" ");
  return `${arr[1]} ${arr[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
  let set = new Set();
  arr.forEach((item) => {
    set.add(item);
  });
  arr.length = 0;
  set.forEach(h => {
    arr.push(h);
  });
  return arr;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
  if (arr.length === 0) {
    return false;
  }
  let min = arr.reduce((min, Item, arr) => {
    return min < Item ? min : Item;
  });
  let max = arr.reduce((max, Item, arr) => {
    return max > Item ? max : Item;
  });
  return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  let arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  arr.forEach((item, i, arr) => {
    if (!(item % 3)) {
      arr[i] = "Foo";
    }
    if (!(item % 5)) {
      arr[i] = "Bar";
    }
    if (!(item % 15)) {
      arr[i] = "FooBar";
    }
  });
  return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  consructor() {
    let glossary = new Map();
  }
  newWord(word, meaning) {
    //добавляет слово
    if (
      !glossary.has(word) &&
      typeof word === "string" &&
      typeof meaning === "string"
    ) {
      glossary.set(word, meaning);
    } else console.log("error data or this word is exist");
  }

  newMeaning(word, meaning) {
    if (glossary.has(word)) {
      glossary.set(word, meaning);
    } else console.log("error data or this word isn't exist");
  }

  deleteWord(word) {
    if (glossary.has(word)) {
      glossary.delete(word);
    } else console.log("this word isn't exist");
  }
  getMeaning(word) {
    if (glossary.has(word)) {
      console.log(`${word} : ${glossary.get(word)}`);
    } else console.log("this word isn't exist");
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference
};
