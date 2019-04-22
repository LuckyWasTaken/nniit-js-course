// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(name) 
{
    let [lastName,firstName]=name.split(' ');
    return '${firstName} ${lastName}';
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr)
 {
     let set=new Set(arr);
     set.forEach(number=>{set.add(number);});
     return [...set];
    
 }

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) 
{
    let minSalary = arr.reduce((min, current) => 
    {
        return min < current ? min : current;
    }, 
        arr[0]);
        
      let maxSalary = arr.reduce((max, current) =>
      {
        return max > current ? max : current;
      },
        arr[0]);
    
      return maxSalary / minSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) 
{
    let arr=[];

    for (let i=1;i<n;i++)
    {
        if (i%3===0)
        {
            arr.push("Foo");
        } else if (i%5===0)
        {
            arr.push("Bar");
        } else if (i%15===0)
        {
            arr.push("Foobar");
        } else 
        {
            arr.push(i);
        }
    }
    return arr;
       
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary
 {
     constructor()
     {
         this._map=new Map();
     }
     checkword(word)
     {
         if (word!==string)
         {
             return false;
         }
         return true;
     }
     addValue(word,propereties)
     { 
         if (this._checkword(word)===false)
         {
             return false;
         }

         this._map.set(word,propereties);

         return true;

     }
     setValue(word,propereties)
     {
         this._map.set(word,propereties);
     }
     getValue(word)
     {
         return this._map.get(word);
     }

     change(word,propereties)
     {
         if (this._map.get(word))
         {
             this.setValue(word,propereties);
             return true;
         }
         return false;
     }
     del(word)
     {
         return this._map.delete(word);
     }
 }

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
