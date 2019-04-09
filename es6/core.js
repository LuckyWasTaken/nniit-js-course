// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(string) {
  if (!string || typeof string !== "string") {
    console.log("Incorrect name!");
    return undefined;
  }
  let [lastName, firstName, fathersName, ...rest] = string.split(" ");
  return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(valueArray) {
  if (valueArray.length === 0 || valueArray.isArray == false) {
    console.log("Incorrect value array!");
    return [];
    // Пустой массив таким образом нормально возвращать?
  }
  let set = new Set();
  valueArray.forEach(function(item, i, valueArray) {
    set.add(item);
  });
  return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salaryArray) {
  if (salaryArray.length === 0 || salaryArray.isArray == false) {
    console.log("Incorrect salary array!");
    return false;
  }

  let minSalary = salaryArray.reduce(function(previousValue, currentValue) {
    return previousValue < currentValue ? previousValue : currentValue;
  });

  let maxSalary = salaryArray.reduce(function(previousValue, currentValue) {
    return previousValue > currentValue ? previousValue : currentValue;
  });

  return maxSalary / minSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  if (n <= 0 || isNaN(n) === true) {
    return [];
  }
  var arr = [];

  for (let i = 1; i < n; i++) {
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
   this._map = new Map();
    
  }
  //Добавить слово и его толкование в словарь:
  addToDictionary(word, meaning) {
    if (this._checkOnString(word)===false || this._checkOnString(meaning)===false) {
      console.log("Error! Incorrect arguments for addToDictionary");
      return false;
    }
    this._map.set(word,meaning);
  }

//Изменить толкование слова:
  changeMeaning(word, meaning){
   if (this._map.has(word)===false){
      console.log("Error! Could not find entered word in dictionary (for set meaning)");
      return false;
    }
   if (this._checkOnString(meaning)===false){
    console.log("Error! Incorrect meaning entered");
    return false;
   }
   this._map.set(word,meaning);
  }

  //Проверка является ли слово непустой строкой:
  _checkOnString(checkingWord){
    if (
      !checkingWord ||
      typeof checkingWord !== "string"
       ) {
      return false;
    }
    return true;
  }

  //Удалить слово из словаря:
  deleteWord(word){
    if (this._map.has(word)===false){
      console.log("Error! Could not find entered word in dictionary (to delete)");
      return false;
    }
    this._map.delete(word);
  }

  //Получить толкование по слову:
  getMeaning(word){
    if (this._map.has(word)===false){
      console.log("Error! Could not find entered word in dictionary (to delete)");
      return false;
    }
    return this._map.get(word);
  }

}


module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
  fooBar
};
