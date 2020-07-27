// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  //return function sum2(b){ return a + b; }
  return (b) => a + b

}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let sum = 0;
  let i = 0;
  
  return function result(num) {
    i++;
    sum = sum + num;
    return sum/i;
  }
}

module.exports = {
  sum,
  average
};
