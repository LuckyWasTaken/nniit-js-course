//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if(str == ''){
    return str
  }
  let arr = str.split(' ');
  for(let i = 0; i < arr.length; i++){
    let first = arr[i][0].toUpperCase();
    let rest_str = arr[i].slice(1);
    arr[i] = first + rest_str;
  }
  return arr.join(' ')
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(str.length < n){
    return str
  }
  return str.slice(0, n) + '...'
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(let key in obj){
    if(typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, current) => sum + current, 0)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  str = str.toLowerCase()
  let revers = [...str].reverse().join('')
  return str === revers
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
