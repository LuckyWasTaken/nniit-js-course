//Сделал одну нормальную
function sum(a) {
  let res = a;
  return function sumNext(value) {
    res += value;

    sumNext.valueOf = function() {
      return res;
    };

    return sumNext;
  };
}

// // Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
// function sum(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// //Пытался написать, но не получилсоь. Нашел вот это, оно работает, но я так до конца и непонял, как это работает, можешь объяснить???
// function sum(...parametrs) {
//   let s = parametrs.reduce((a, b) => a + b);
//   function innerSum(...innerParametrs) {
//     return sum(...innerParametrs.concat(s));
//   }

//   innerSum.toString = innerSum.valueOf = function() {
//     return s;
//   };
//   return innerSum;
// }

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let sum = 0;
  let amount = 0;
  return function(next) {
    sum += next;
    amount++;
    return sum / amount;
  };
}

module.exports = {
  sum,
  average
};
