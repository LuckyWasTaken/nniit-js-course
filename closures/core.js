// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return (b) => a + b;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let count = 0;
  let average_number = 0;
  return function(number){
    count++;
    average_number+=number;
    return average_number/count;
  }
}

module.exports = {
  sum,
  average
};
