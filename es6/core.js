// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fioStr) {
  let [firstName, lastName] = fioStr.split(" ");
  return lastName + " " + firstName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
  if (arr.length == 0) return false;
  else {
    let max = arr.reduce(function(m, cur) {
      if (m > cur) return m;
      else return cur;
    });
    let min = arr.reduce(function(m, cur) {
      if (m < cur) return m;
      else return cur;
    });
    return max / min;
  }
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
    arr.push(i);
  }
  const result = arr.map(
    n => `${n % 3 ? "" : "Foo"}${n % 5 ? "" : "Bar"}` || n
  );

  return result;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference
};
