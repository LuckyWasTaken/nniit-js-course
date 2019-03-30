function isInteger(n) {
  return n ^ (0 === n);
}

function even() {
  let arr = [];
  for (let i = 2; i <= 20; i += 2) {
    arr.push(i);
  }
  return arr;
}

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function recSumTo(n) {
  let sum = 0;
  if (n <= 1) return n;
  sum = n + recSumTo(n - 1);
  return sum;
}

function factorial(n) {
  let fact = 0;
  if (n <= 1) return n;
  fact = n * factorial(n - 1);
  return fact;
}

function isBinary(n) {
  let num = 2;
  let x = 0;
  while (num < n) {
    num = Math.pow(2, x++);
  }
  if (num != n) return false;
  else return true;
}

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i]= arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
