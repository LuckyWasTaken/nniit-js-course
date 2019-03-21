// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a){
  return function(b){
      return a + b;
  }
}
 

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let arr=[];
  return function(n){
    arr.push(n);
    let sum = 0;
    for (let i=0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum/ arr.length;
  }
}

module.exports = {
  sum,
  average
};
