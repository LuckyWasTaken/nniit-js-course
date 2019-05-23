// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function sumSecond(value){
    return a+value;
  }
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let sum=0;
  let cnt=0;

  function changeAverage(value){
    sum+=value;
    cnt++;
    return sum/cnt;
  }

  return changeAverage;
}

module.exports = {
  sum,
  average
};
