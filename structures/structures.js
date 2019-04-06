//Напишите функцию, которая делает первый символ строки заглавным 
//(задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);//toUpperCase() делает первый эл-т массива заглавным, 
  //slice() возвращает часть строки начиная с 1 эл-та и до конца
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие 
//(если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (n > str.length) {
        return str;
      }
      return str.slice(0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
        for (let key in obj) {
          return false;
        }
        return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
   for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sum, current) {//reduce  используется для вычесления единого значения массива
    return sum + current;
 });
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  if(typeof str !== "string"){
    return false;
}
let strReverse = str.split("").reverse().join("");
return str == strReverse;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty, ,m.
  multiply,
  sumArr,
  isPali
};
