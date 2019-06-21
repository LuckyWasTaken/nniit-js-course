// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(FIO) 
{
    let [family,name,secondName] = FIO.split(' '); 
    return name+' '+family;   
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(values) 
{
    let unique = new Set;

    values.forEach(function(element)
    {
        unique.add(element);
    });
    return Array.from(unique);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(values) 
{
    if(values[0] !== undefined)
    {

        let max = values.reduce(function(current,max)
        {
            return(current > max ? current : max);
        });

        let min = values.reduce(function(current,min)
        {
            return(current < min ? current : min);
        });

        return(max/min);
    }
    return false;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) 
{
    let foo = [];

    for(i = 1 ;i<=n;i++)
    {
        if(i % 15 === 0)
        {
            foo.push("FooBar");
        }
        else if(i % 3 === 0)
        {
            foo.push("Foo");
        } 
        else if(i % 5 === 0)
        {
            foo.push("Bar");
        }
        else
        {
            foo.push(i);
        } 

    }
    if (foo.length === 0) return false;
    return(foo);
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами


//Не совсем понял задание, по этому написал класс словарь, в котором ключи являются просто порядком добавления
//Знаю, что Map итерируется по порядку и просто так, но сделал как сделал
class Dictionary 
{
    constructor()
    {
        this._someVocabulary = new Map;
        this._iterator = 0;
    }

    addValue(value)
    {
        if(typeof value === 'string')
        {
            this._iterator+=1;
            this._someVocabulary.set(this._iterator,value);
            return true;
        }
        return false;
    }

    getValue(key)
    {  
        if(key > this._iterator) return null;
        if(typeof key === 'number') return this._someVocabulary.get(key);
        return false;
    }

    deleteValue(key)
    {
        if(key > this._iterator) return null;
        this._someVocabulary.delete(key);
        this._someVocabulary.set(key,'');

    }
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
