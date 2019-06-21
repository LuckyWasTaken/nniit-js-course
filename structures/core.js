//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) 
{
  if (str === "")
  {
    return str;
  }

  let splittedArr = str.split(' ');

  for (let index = 0; index < splittedArr.length; index++) 
  {
    splittedArr[index] =  splittedArr[index][0].toUpperCase() + splittedArr[index].substr(1);
  }

  return splittedArr.join(' ');
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) 
{
  if(n > str.length)
  {
    return str;
  }

  str = str.substr(0,n);
  str = str + '...'
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) 
{
  return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) 
{
  if (Object.keys(obj).length === 0) return obj;
  
  for (var key in obj) 
  {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение
  
    if(typeof obj[key] === 'number') obj[key] *= 2; 
  }

  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) 
{
  let sum = 0;

  return arr.reduce(function(current,sum)
  {
      return(sum + current);
  });
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) 
{
  return str === str.split("").reverse().join("");
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
