const _ = {
  clamp(num, lowerBound, upperBound) {
    return Math.min(upperBound, Math.max(num, lowerBound));
  },
  inRange(num, start, end) {
    if (end == undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      const startCopy = start;
      start = end;
      end = startCopy;
    }
    return num >= start && num < end;
  },
  words(string) {
    return string.split(" ");
  },
  pad(string, length) {
    // const stringLength = string.length;
    // for (let i = 0; i < length - stringLength; i++) {
    //   if (i % 2 === 0) string = string.padEnd(string.length + 1, "K");
    //   else string = string.padStart(string.length + 1, "K");
    // }
    if (string.length >= length) return string;
    string = string.padStart(Math.floor((length - string.length) / 2) + string.length, " ");
    string = string.padEnd(Math.ceil(length - string.length) + string.length, " ");
    return string;
  },
  has(obj, key) {
    const hasValue = obj[key];
    if (hasValue) return true;
    return false;
  },
  invert(obj) {
    let invertedObj = {};
    for (let key in obj) invertedObj[obj[key]] = key;
    return invertedObj;
  },
  findKey(obj, func) {
    for (let key in obj) {
      if (func(obj[key])) return key;
    }
    return undefined;
  },
  drop(arr, n) {
    if (n === undefined) n = 1;
    return arr.slice(n);
  },
  dropWhile(arr, predicate) {
    const dropNumber = arr.findIndex((el, index) => !predicate(el, index, arr));
    console.log(dropNumber);
    return this.drop(arr, dropNumber);
  },
  chunk(arr, size) {
    let arrayChunks = [];
    for (let i = 0; i < arr.length; i += size) {
      arrayChunks.push(arr.slice(i, i + size));
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
