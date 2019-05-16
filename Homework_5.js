function fioToName(str) {
  let arr = str.split(" ");
  return arr[1] + " " + arr[0];
}

function filterUnique(arr) {
  let set = new Set();
  arr.forEach(element => {
    set.add(element);
  });
}

function calculateSalaryDifference(arr) {
  let max = arr.reduce(function(max, cur) {
    if (cur > max) return cur;
    return max;
  }, 0);
  let min = arr.reduce(function(min, cur) {
    if (cur < min) return cur;
    return min;
  }, max);
  return max / min;
}

function fooBar(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      arr.push("FooBar");
    } else if (i % 3 == 0) {
      arr.push("Foo");
    } else if (i % 5 == 0) {
      arr.push("Bar");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

class Dictionary {
  constructor() {
    this._dict = new Map();
  }
  addWord(word, meaning) {
    if (this.checkWord(word) && this.checkWord(meaning)) {
      this._map.set(word, meaning);
      return true;
    }
    return false;
  }
  getWord(word) {
    if (this.checkWord(word) && this.has(word)) {
      this._map.get(word);
    }
  }
  deleteWord(word) {
    if (this.checkWord(word)) {
      this._map.delete(word);
    }
  }
  checkWord(word) {
    return word && typeof word === "string";
  }
}