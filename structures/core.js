//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str || typeof str !== "string") {
    // без проверки тоже работает, но с ней как-то поприличнее вроде
    return "";
  }

  let flag = 0; // 1 - мы в слове, 0 - вне слова
  let capitalizedArr = [];
  for (let i = 0; i < str.length; i++) {
    if (flag == 0 && str[i] != " ") {
      // первая буква слова
      flag = 1;
      capitalizedArr.push(str[i].toUpperCase());
    } else if (flag == 1 && str[i] == " ") {
      // попали на пробел между слов
      flag = 0;
      capitalizedArr.push(str[i]);
    } else {
      capitalizedArr.push(str[i]);
    }
  }
  return capitalizedArr.join("");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки -
//ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str;
  }
  return str.substr(0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  if (counter == 0) {
    return true;
  }
  return false;
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
  const result = arr.reduce(function(sum, current) {
    return sum + current;
  });
  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  if (!str || typeof str !== "string") {
    return "Error!";
  }

  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
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
