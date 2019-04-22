// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
  let buf = str.split(" ");
  return buf[1] + " " + buf[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(buf) {
  let set = new Set();
  buf.forEach(element => {
    set.add(element);
  });
  buf.length = 0;
  set.forEach(el => {
    buf.push(el);
  });
  return buf;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(buf) {
  if (buf.length === 0) {
    return false;
  }
  let minSalary = buf.reduce((min, curr, buf) => {
    if (min < curr) {
      return min;
    }
    return curr;
  });
  let maxSalary = buf.reduce((max, curr, buf) => {
    if (max > curr) {
      return max;
    }
    return curr;
  });
  return maxSalary / minSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
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
    constructor(){
       let dictionary = new Map();
    }
    setWord(key, str) {
        if (typeof key === "string" && typeof str === "string"){
            dictionary.set(key, str);
        } else {
            console.log("Error! Use the right word type!");
        }
    }
    getWord(key) {
        if (dictionary.has(key)) {
            console.log(`${key} : ${dictionary.get(key)}`);
        } else {
            console.log("Error! This word isn't in the dictionary");
        }
    }
    delWord(key) {
        if (dictionary.has(key)) {
            dictionary.delete(key);
        } else {
            console.log("Error! This word isn't in the dictionary");
        }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
  fooBar
};
