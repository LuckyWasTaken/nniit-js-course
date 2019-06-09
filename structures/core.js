//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
 let flag = 1;
    for (let i =0; i< str.length; i++)
    {
        if (str[i] == ' ')
        {
            flag = 1;
            continue;
        }
        if (flag == 1)
        {
            str = str.substr(0, i) + str[i].toUpperCase()+ str.substr(i+1);
            flag = 0;
        }
    }
    return str;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
if (str.length > n) {
    return str.slice(0, n) + '...'
  } 
  else {
return str;
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
for(let key in obj){
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
 for (let key in obj) {
        if (obj[key]*2 == obj[key]*2)
        {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
 let sum = arr.reduce(function(sum, current) {return sum + current;});
    return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
let reverseStr = str.split('').reverse().join('');
  return reverseStr == str ? true : false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
