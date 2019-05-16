// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  let sumBuffer = a;
  function getSum (b){
    sumBuffer +=b;
    return getSum;
  }
  getSum.toString = function(){return sumBuffer;};
  return getSum; // code successfully lifted :( just a+b ain't tough enough
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let buffer = [], sumToDevide = 0; // instead, a counter can be used too that's to be put into the function (a)...
  return function (a){
    buffer.push(a);
    sumToDevide += a;
    return sumToDevide/buffer.length; // or divided by counter
}

module.exports = {
  sum,
  average
};
