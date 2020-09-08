// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let arr = fio.split(" ")
    return (`${arr[1]} ${arr[0]}`); 
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    return [...new Set(arr)];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    return arr.sort()[arr.length - 1] / arr[0];
}
// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr = [];
    for(let i = 1; i <= n ; i++){
      if(i % 15 === 0){
        arr.push("FooBar");
      }else if(i % 3 === 0){
        arr.push("Foo");
      }else if(i % 5 === 0){
         arr.push("Bar");
      }else{
         arr.push(i)
      }
    }
   return arr
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
  #arr = [];

    add(word){
      this.#arr.push(word);
    }
    getAll(){
         return this.#arr.map((i)=> i).join(" ");
    }
    exchangeWord(name, exchname){
       for(let i = 0; i < this.#arr.length; i++){
         if(name === this.#arr[i]){
            this.#arr[i] = exchname;
         }
       }
    }
    deleteName(name){
      for(let i = 0; i < this.#arr.length; i++){
         if(name === this.#arr[i]){
            this.#arr.splice(i, 1);
         }
      }
    }
    toSort(){
        this.#arr.sort()
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
};