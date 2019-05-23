// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function(b){
    return a + b;
  }
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average(a) {
  function average(a) {
    let count = 0;
    let sum = 0;
    return function(a){
      count++;
      sum += a;
      return sum / count;
    };
  }
}

module.exports = {
  sum,
  average
};
