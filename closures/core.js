// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function() {
    return a + arguments[0];
  };
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let count = 0;
  let avgSum = 0;
  return function() {
    count++;
    avgSum += arguments[0];
    return avgSum / count;
  };
}

module.exports = {
  sum,
  average
};
