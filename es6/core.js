// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    if (fio.length !== 0){
        //const str=arguments[0].split(' ');
        const [surname, name] = fio.split(' ');       //[...str]; 
        return name+' '+surname;
    }
    
    return ''; //if fioToName() does not have arguments
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique() {
    return [... new Set(... arguments)];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference() {
    if (!arguments.length || arguments[0].length<2) //for calculateSalaryDifference([5])
        return false;
 
    const averagePayment=arguments[0].reduce((a,x)=>{
        if (x < a.min || (a.min==0 &&  x < a.max))
            a.min=x;
        else if (x > a.max && a.min!==0)
            a.max=x; 
        else if (a.min==0 &&  x > a.max){
            a.min=a.max;
            a.max=x;
        }
        else if (a.min==0 &&  x < a.max)
            a.min=x;
        
        return a;
    }, {min: 0, max: 0});
    
    return averagePayment.max/averagePayment.min;
}
    
// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar() {
    const result=[];

    function* range (end, start=1, step=1){
        while (start<end){
            yield start;
            start += step;
        }
    }

    for (let i of range(arguments[0]+1)){  //with number
        if (i%3==0 && i%15!==0)
            result.push("Foo");
        else if (i%5==0 && i%15!==0)
            result.push("Bar");
        else if (i%15==0)
            result.push("FooBar");
        else
            result.push(i); 
    }
    
    return result;
}
    
// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {

    constructor() {
        this.dictionary=new Map();
    }

    addWord(key,value) {
        if (typeof(key)==='string'){
            this.dictionary.set(key, value);
            return this.dictionary.has(key);
        }

        return false;  
    }

    getValue(key){
        return this.dictionary.get(key);
    }

    deleteWord(key){
        return this.dictionary.delete(key);  
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    fooBar,
    calculateSalaryDifference
};
