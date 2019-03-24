// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    }

    return f;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average(a) {
    let currentSum = a;
    let count = 1;

    function f(b) {
        currentSum += b;
        count++;
        return f;
    }
    f.toString = function() {
        return currentSum / count;
    }
    return f;
}

module.exports = {
  sum,
  average
};
