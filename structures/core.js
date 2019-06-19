//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length === 0)
  return ''
  var newstr;
  var firstchar;
  firstchar = str[0].toUpperCase();
  newstr = firstchar + str.substring(1);
  return newstr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length <= n)
  return str;
  var out = str.substring(0, n) + '...'
  return out;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj)
    if (obj.hasOwnProperty(key))
      return false;
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj)
    if(typeof(obj[key]) === 'number')
      obj[key] *= 2;
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  function sum(a, b)
  {
    return a + b;
  }
result = arr.reduce(sum);
return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
 var inter = str.split('');
 inter = inter.reverse();
 var revstr = inter.join('');
 var res = str.localeCompare(revstr);
 if (res === 0)
 return true;
 else 
 return false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
