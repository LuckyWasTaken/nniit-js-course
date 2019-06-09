// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    let arr = str.split(' ', 2);
    arr.reverse();
    str = arr.join(' ');
    return str;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let set = new Set();
    // for (var i = 0; i < arr.length; i++) {
    //     set.add(arr[i]);
    //   }
    arr.forEach(function(item, i, arr) {
       set.add(item);
      });
    arr = [];
    let i = 0;
      set.forEach((value, valueAgain, set) => {
        arr[i] = value;
        i++;
      });
      return arr;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    var result = arr.reduce(function(minAndMax, current) {
        if (minAndMax[0] === -1) {
            minAndMax[0] = current;
            minAndMax[1] = current;
        }
        if (minAndMax[0] > current)
                    minAndMax[0] = current;
        if (minAndMax[1]<current) 
                    minAndMax[1] = current;
        return minAndMax;
      }, [-1,-1]);
      if (result[0] === -1) return false;
      return result[1]/result[0];
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами


function fooBar(n) {
    let newElem;
    let arr = [];
    for (let i=1; i<=n; i++)
    {
        newElem = [];
        arr[i-1] = i;
        if(i%3 === 0) newElem.push("Foo");
        if(i%5 === 0) newElem.push("Bar");
        if (typeof(newElem[0]) ==="string")
        arr[i-1] =  newElem.join(''); 
    }
    return arr; 
}
// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor()
    {
        this.diction = new Map();
    }
    chekWord (str){
        if (typeof(str) !== "string") return false;
        for(let i = 0; i<str.length; i++){
            if (~"0123456789".indexOf(str.charAt(i))){
                return false;
            }
        }
        return true;
    }
    add(word, translate)
    {
        if ((this.chekWord(word))&&(this.chekWord(translate))){
            this.diction.set(word,translate);
        }
        else{
            console.log("Цифры не допустимы в записи слова");
        }
    }
    getT(word){
        if(this.diction.has(word))
        {
            return this.diction.get(word);
        }
        console.log("такое слово не найдено");
    }
    del(word)
    {
        this.diction.delete(word);
    }
    isEmpty()
    {
        if(this.diction.size === 0) return true;
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
