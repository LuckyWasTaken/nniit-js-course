//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.replace(/[\wа-я]\S*/gi, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  return (str.length > n) ? str.substring(0, n) + "..." : str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let i in obj)
     if (obj.hasOwnProperty(i)) 
      return false; 
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(let key in obj) {
      if(obj.hasOwnProperty(key))
          if (typeof obj[key] == 'number') {
              obj[key] *= 2;
          }
        }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sumArray, currentItem) {return sumArray + currentItem;});
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return (str.split("").reverse().join("") === str) ? true : false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
