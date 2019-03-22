//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = capitalizeWord(arr[i]);
  }

  return arr.join(" ");

  function capitalizeWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    // тут напрашивается n >= str.length иначе строка в "n-символов" станет "n-символов..."
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
    if (obj[key] === Number(obj[key])) {
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
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
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
