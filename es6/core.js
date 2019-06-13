// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
  let [surName, name] = fio.split(" ");
  let fi = name + " " + surName;
  return fi;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
  const unique = new Set(array);
  return [...unique];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arrayOfSalaries) {
  if (arrayOfSalaries.length === 0) {
    return false;
  }
  const reducerMax = (current, next) => Math.max(current, next);
  const reducerMin = (current, next) => Math.min(current, next);
  let max = arrayOfSalaries.reduce(reducerMax);
  let min = arrayOfSalaries.reduce(reducerMin);
  return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      array.push("FooBar");
    } else if (i % 3 === 0) {
      array.push("Foo");
    } else if (i % 5 === 0) {
      array.push("Bar");
    } else {
      array.push(i);
    }
  }
  return array;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами

class Dictionary {
  constructor() {
    this._dict = new Map();
  }

  add(key, value) {
    if (typeof key === "string" && typeof value === "string") {
      if (this._dict.has(key)) {
        console.log(
          `Ключ (${key}) уже добавлен в словарь. Значение (${this._dict.get(
            key
          )}) было заменено на (${value}).`
        );
      }
      this._dict.set(key, value);
    } else {
      console.error(`Неверный формат ключа (${key}, ${value}).`);
    }
  }

  get(key) {
    if (typeof key !== "string") {
      console.error(`Неверный формат ключа (${key}).`);
    } else {
      return this._dict.get(key);
    }
  }

  delete(key) {
    if (typeof key !== "string") {
      console.error(`Неверный формат ключа (${key}).`);
    } else {
      if (this._dict.has(key)) {
        this._dict.delete(key);
      } else {
        console.error(`В словаре нет элемента (${key}).`);
      }
    }
  }
  find(key) {
    if (typeof key !== "string") {
      console.error(`Неверный формат ключа (${key}).`);
    } else {
      return this._dict.has(key);
    }
  }
  empty() {
    return this._dict.size === 0;
  }
  size() {
    return this._dict.size;
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
  fooBar
};
