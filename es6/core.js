// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio){
  let arr=fio.split(' ', 2);
  return `${arr[1]} ${arr[0]}`;  //используем возможности по полной так сказатб))
};

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
  return Math.max(...arr)/Math.min(...arr);// es6 spread, не понял зачем тут reduce
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
  if(isNaN(n)||!n)return 0;//если не число или 0 возвратим просто число 0
  let arr=[...Array(n)];//создаем массив из n элементов, которые равны undefined
  arr.forEach((_,i,array)=>array[i]=i+1); //заполняем значениями от 1 до n
  return arr.map(n => `${n % 3 ? '' : 'Foo'}${n % 5 ? '' : 'Bar'}` || n); //15=3*5=>Foo(3)Bar(5)
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"  <= РАБОТАТЬ ТОЛЬКО СО СЛОВАМИ И ИСПОЛЬЗОВАТЬ MAP??
// * покройте класс тестами
class Dictionary {
  constructor(defW){//defW- объект слов на русском с переводом на английский в начальном словаре
    this.map=new Map();

    for (let i in defW){
        if(!(Number(i)||Number(defW[i])||this.map.has(i))){           //заполним значения словаря, повторяется с
          this.map.set(i,defW[i]);                                   //setWordAndTranslation
        }
    }

    Object.defineProperty(this, 'map',{writable : false});
  }

  setWordAndTranslation(wordComb){
    for (let i in wordComb){
      if(!(Number(i)||Number(wordComb[i]||this.map.has(i)||this.map.has(wordComb[i])))){     //если и правое и левое значение строковые
        this.map.set(i,wordComb[i]);                                                           //и значений нет в словаре
      }
    }
  }

  getTranslation(word){
    for (let i of this.map){
      if (i.indexOf(word)!=-1){
        return i[Number(!i.indexOf(word))];
      }
    }
    return 'К сожалению, в нашем словаре такого слова нет';
  }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
