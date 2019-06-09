// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  let ans=a;
  return function sumSecond(value){
    ans+=value;
    
    sumSecond.valueOf=function(){
      return ans;
    }

    return sumSecond;
  }
}// изменил для любого числа скобок

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
