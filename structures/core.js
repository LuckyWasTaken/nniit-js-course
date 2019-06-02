//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.replace(/[a-zа-яё]+/g,(item) => 
  {return item.replace(/^\S/, letter => 
    {return letter.toUpperCase()})});
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  return (str.length > n) ? str.slice(0, n) + '...' : str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return (Object.keys(obj).length !== 1);
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (const key in obj) {
    if(!isNaN(obj[key])){
      obj[key] = obj[key]*2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, curr) => {
    return (!isNaN(curr))?(sum+curr):sum;})
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return (str.split('').reverse().join('') === str);
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};