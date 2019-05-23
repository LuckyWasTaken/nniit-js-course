//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
// Первый символ заглавным 
// function capitalize(str) {
//   return (str) ? str[0].toUpperCase() + str.slice(1) : str;
// }
//каждое слово заглавным
function capitalize(str) {
  if (!str) {return str;}
  str =  str[0].toUpperCase() + str.slice(1);
  for (let i =2; i<str.length; i++)
  {
    if( (str[i-1] === ' ')&& (str[i]!=' '))
    {
      str = str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1);
    }
  }
  return str;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length <= n)
  {
    return str;
  } else {
    return str.substr(0,n)+'...';
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (key in obj) {
   if (typeof obj[key] == "number") {
     obj[key] *= 2; 
     }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  for (let i = 0; i<(str.length)/2; i++ )
  {
    if (str[0+i] != str[str.length - 1 - i])
    {
      return false
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
