// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    let temp=str.split(' ');
    return temp[1]+' '+temp[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(mas) {
    let temp=new Set();
    let res=new Array;
    for(let i=0;i<mas.length;i++){
        if(temp.has(mas[i])===false){
            temp.add(mas[i]);
            res.push(mas[i]);
        }
    }
    return res;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(mas) {
    let res=mas.sort();
    return res.pop()/res.shift();
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(num) {
    let mas=new Array;
    for(let i=1;i<=num;i++){
        if(i%3===0 || i%5===0){
            if(i%3===0 & i%5!==0){
                mas.push("Foo");
            }
            if(i%3!==0 & i%5===0){
                mas.push("Bar");
            }
            if(i%3===0 & i%5===0){
                mas.push("Foo");
            }
        }else{
            mas.push(i);
        }
    }
    return mas;
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
