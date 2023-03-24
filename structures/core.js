//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize_sentence(sentence) {
  list_items = [];
  for (const item of sentence.split(" ")) {
    list_items.push(capitalize(item));
  }
  return list_items.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  var str_slice = str.slice(0, n);
  if (n > str.length) {
    return str_slice;
  } else {
    return str_slice + "...";
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  str = str.toLowerCase();
  var reverse_str = str.split("").reverse().join("");
  if (str == reverse_str) {
    return true;
  } else return false;
}


module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
