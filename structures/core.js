// Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) {
    return str;
  }

  const words = str.split(' ');

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
}

// Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (!str || n >= str.length) {
    return str;
  }

  return str.slice(0, n) + '...';
}

// Определите, пуст ли объект
function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

// Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  if (!obj) {
    return obj;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }

  return obj;
}

// Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  if (!arr) {
    return 0;
  }

  return arr.reduce((sum, current) => {
    return sum + current;
  }, 0);
}

// Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  if (!str) {
    return false;
  }

  str = str.toLowerCase();

  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
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
