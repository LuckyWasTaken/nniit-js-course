// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
    return function(b) {
        return a + b;
    }
}

function sum2(a) { //задание со звездочкой
    let sum = a;
    function add(b) {
        if (b) {
            sum += b;
            return add;
        } else
            return sum;
    }
    add.toString = function () {
        return sum;
    };
    return add;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
    let sum=0;
    let elementCount=0;
    return function(a) {
        sum += a;
        elementCount++;
        return sum / elementCount;
    }
}

module.exports = {
    sum,
    average
};