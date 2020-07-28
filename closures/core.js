// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function summarize(b) {
    return a+b;
  };
}

//Task* first option
function sumAnyQuantityOfNumbers1(a) {
  let result = a;
  return function summarize(b) {
    result += b;
    console.log(result);
    return summarize;
  };
}

//Task* second option
function sumAnyQuantityOfNumbers2(a) {
  let result = a;
  return function summarize(b) {
    result += b;
    return (result);
  };
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  const array = [];
  return function calculateAvarage(number) {
    array.push(number);
    const result = array.reduce(function(sum, current) {
      return sum + current;

    }, 0);
    return (result / (array.length));
  };
}

module.exports = {
  sum,
  average
};