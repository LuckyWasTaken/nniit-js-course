function sum(a) {
  let temp=a;
  return function(b) {
    return temp+=b;
  }
}

function average() {
  let temp=0;
  let count=0;
  return function(b) {
    temp+=b;
    count++;
    return temp/count;
  }
}