// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function (b) {
    return a + b;
  }
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  average.sumArg = 0;
  average.countArg = 0;
  return function (a){
    average.sumArg += a;
    average.countArg++;
    return Math.round(average.sumArg/average.countArg);
  }
}

module.exports = {
  sum,
  average
};
