function sum(firstarg) {
    var globalSum = firstarg;
    function tempFunction(arg){
        globalSum += arg;
        return tempFunction;
    }
    tempFunction.toString = function(){ return globalSum }
    return tempFunction;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
    var globalResult = 0;
    var globalLength = 0;
    return function(nextvar){
        globalResult = (globalResult*(globalLength++)+nextvar)/globalLength;
        return globalResult;
    }
}

module.exports = {
  sum,
  average
};
