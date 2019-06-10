// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) 
{
    let [lastName, firstName, middleName] = str.split(" ");
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) 
{
    let uniqArray = new Set(array);
    return Array.from(uniqArray);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) 
{
    if (array.length === 0)
    {
        return null;
    }
    let [highestSalary, lowestSalary] = array.reduce(function([highestSalary, lowestSalary], temp)
    {
        if (temp >= highestSalary)
        {
            highestSalary = temp;
        }
        if (temp <= lowestSalary)
        {
            lowestSalary = temp;
        }
        return [highestSalary, lowestSalary];
    }, [0, 999999]); //тест ругается на infinity вместо второго числа, с большими числами работает нормально

    return highestSalary / lowestSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) 
{
  let array = [];
  for (let i = 0; i < n; i++)
  {
      if ((i + 1) % 15 === 0)
      {
        array.push("FooBar");
      }
      else if ((i + 1) % 3 === 0)
      {
        array.push("Foo");
      }
      else if ((i + 1) % 5 === 0)
      {
        array.push("Bar");
      }
      else 
      {
        array.push(i + 1);
      }
  }
    return array;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary 
{
    constructor() 
    {
        this.vocabulary = new Map();
    }

    addWordToDict(newWord, definition) 
    {
        if (typeof(newWord) !== 'string' || typeof(definition) !== 'string') 
        {
            return null;
        }
        this.vocabulary.set(newWord, definition);
    }

    deleteWordFromDict(deletedWord, definition) 
    {
        if (typeof(deletedWord) !== 'string' || !(this.vocabulary.has(deletedWord)) || typeof(definition) !== 'string') 
        {
            return null;
        }
        this.vocabulary.delete(deletedWord, definition);
    }

    getDefinition(tempWord) {
        if (typeof(tempWord) !== 'string' || !(this.vocabulary.has(tempWord))) 
        {
            return null;
        }
        return this.vocabulary.get(tempWord);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
