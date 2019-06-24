//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {}
function capitalize(str) 
{
  if (str === "")
  {
    return str;
  }
  let defaultArr = str.split(" ");
  let upperArr = defaultArr.map(function(word)
  {
    return word[0].toUpperCase() + word.substr(1);
  })
  return upperArr.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {}
function truncate(str, n) 
{
  if (str.length > n) 
  {
    return str.substring(0, n) + "...";
  }
return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {}
function isEmpty(obj) 
{
  for (let key in obj) 
  {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {}
function multiply(obj) 
{
  for (let key in obj)
  {
    if (isFinite(obj[key]) === true) 
    {
      obj[key]*=2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {}
function sumArr(arr) 
{
  let sumArray = arr.reduce(function(sumArray, current) {return sumArray + current;});
  return sumArray;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {}
function isPali(str) 
{
  for (let i = 0; i < str.length/2; i++)
  {
    if (str[i]!==str[str.length-i-1])
    {
      return false;
    }
  }
  return true;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};