// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function (b) {
    return a + b;
  };
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average(number) {
  let summ = 0;
  let average = 0;
  return function (number) {
    summ++;
    average += number;
    return average / summ;
  };
}

module.exports = {
  sum,
  average,
};
