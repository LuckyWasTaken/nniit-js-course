// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) 
{
    let [surname,name]=fio.split(' ');

    return name +' '+ surname;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) 
{
    const set = new Set(arr);
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salary) 
{
    return Math.max(...salary)/Math.min(...salary);
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) 
{
    if(isNaN(n)||!n)return 0;
    const arr = [...Array(n)].map((_, i) => i + 1);
    const res = arr.map(n => `${n % 3 ? '' : 'Foo'}${n % 5 ? '' : 'Bar'}` || n);
    return res;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary 
{
    constructor(defW)
    {
        this.map=new Map();
    
        for (let i in defW)
        {
            if(!(Number(i)||Number(defW[i])||this.map.has(i)))
            {           
              this.map.set(i,defW[i]);                                  
            }
        }
    
        Object.defineProperty(this, 'map',{writable : false});
      }
    
      setWordAndTranslation(wordComb)
      {
        for (let i in wordComb)
        {
          if(!(Number(i)||Number(wordComb[i]||this.map.has(i)||this.map.has(wordComb[i]))))
          {     
            this.map.set(i,wordComb[i]);                                                           
          }
        }
      }
    
      getTranslation(word)
      {
        for (let i of this.map)
        {
          if (i.indexOf(word)!=-1)
          {
            return i[Number(!i.indexOf(word))];
          }
        }
        return 'Not found';
    }
    
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};

