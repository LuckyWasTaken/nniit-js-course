// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
  let [lastName, firstName, secondName] = fio.split(" ");
  return firstName + " " + lastName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(buf) {
  let set = new Set(buf);
  let mas = [];
  let i = 0;
  for (let item of set) {
    mas[i] = item;
    i++;
  }
  return mas;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(buf) {
  if (buf.length == 0) return false;
  else {
    let max = buf.reduce(function(m, cur) {
      if (m > cur) return m;
      else return cur;
    });
    let min = buf.reduce(function(m, cur) {
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
  let buf = [];
  for (let i = 0, j=1; i < n; i++, j++) {
    if (j % 15 == 0) buf[i] = "FooBar";
    else if (j % 5 == 0) buf[i] = "Bar";
    else if (j % 3 === 0) buf[i] = "Foo";
    else buf[i] = j;
  }
  return buf;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  constructor() {
    this._dict = new Map([
      ["Горилла", "Большая волосатая обезьяна"],
      ["Дед Мороз", "Бородатый волшебник"]
    ]);
  }
  set(word, value) {
    this._dict.set(word, value);
    alert(`Слово ${word} добавлено!`);
  }
  get(word) {
    if (this._dict.has(word)) {
      alert(`${word} : ${this._dict.get(word)}`);
    } else {
      alert("Такого слова нет в словаре!");
    }
  }
  del(word) {
    if (this._dict.has(word)) {
      this._dict.delete(word);
      alert(`Слово ${word} удалено!`);
    } else {
      alert("Такого слова нет в словаре!");
    }
  }
  change(word, value) {
    if (this._dict.has(word)) {
      this._dict.delete(word);
      this._dict.set(word, value);
      alert(`${word} : ${this._dict.get(word)}`);
    } else {
      alert("Такого слова нет в словаре!");
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
