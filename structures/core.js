//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let str1 = str.charAt(0).toUpperCase();
  let str2 = str.substr(1,);
  return str1+str2;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(str.length > n)
    {
      let str1 = str.substr(0,n);
      return str1 + '...';
    }
    else return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  let counter = 0;
  for (let key in obj)
    counter++;
  if(counter) return false;
  else return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj)
    if (!isNaN(obj[key]))
      obj[key] *= 2;
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let sum = arr.reduce(function(s, curr)
  {
    return s + curr;
  }, 0);
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) { 
  let str1 = str.substr(0,Math.floor((str.length)/2));
  let str2 = str.substr(Math.ceil((str.length)/2), str.length);
  str2 = str2.split("").reverse().join("");
  if (str1 == str2)
  return true;
  else return false;
}//Наверняка можно было и легче :(

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
