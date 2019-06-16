//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) return str;
  let temp = str.split(' ');
  temp.forEach(function(item, i, temp){
    let alpha = item[0].toUpperCase();
    temp[i] = alpha + temp[i].substr(1);
  });
  temp = temp.join(' ');
  return temp;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) return str;
  return `${str.substr(0, n)}...`;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let feature in obj) {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
    isNaN(obj[key]) ? '' : obj[key] *= 2;
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
 return arr.reduce(function(accum, currentValue, i, arr){
    return accum + currentValue;
  });
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return (str == str.split('').reverse().join(''));
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
