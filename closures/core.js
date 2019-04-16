function sum (a){
    return function (b){
        return a + b;
    }
}

function average() {
    let currentCount = 0;
    let currentSum = 0;
    return function(a) {
        currentCount++;
        currentSum += a;
        return currentSum/currentCount;
    }
}

module.exports = {
  sum,
  average
};