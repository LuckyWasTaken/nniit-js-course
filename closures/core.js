// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
// сумма двух чисел
function sum(a) {
  return function(b) {
    return a + b; 
  };
}
// //сумма любого количества чисел
// function sum(a) {
//   let currentSum = a;

//   function sum2(b) {
//     currentSum += b;
//     return sum2;
//   }

//   sum2.toString = function() {
//     return currentSum;
//   };

//   return f;
// }

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let  currentSum = 0;
  let currentCount = 0;
  return function (num)
  {
    currentSum += num;
    currentCount++;
    return currentSum/currentCount;
  }
}

module.exports = {
  sum,
  average
};
