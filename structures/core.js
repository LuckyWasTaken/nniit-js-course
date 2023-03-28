//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  try {
    return str.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
  }
  catch {
    return '';
  }
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  return str.slice(0, n) + (n > str.length ? '' : '...');
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  let res = Object.assign({}, obj);
  Object.keys(res).forEach(k => {
    if (typeof (res[k]) === "number") {
      res[k] *= 2;
    }
  });
  return res;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let res = true;
  for (let i = 0; i <= str.length / 2; i++) {
    res = res && str[i] == str[str.length - i - 1];
  }
  return res;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
