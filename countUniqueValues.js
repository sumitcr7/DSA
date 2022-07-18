// Count unique values in sorted array

function countUniqueValues(arr) {
  let count = 0;

  let i = 0;
  let j = 1;
  while (j <= arr.length) {
    const first = arr[i];
    const second = arr[j];
    if (first !== second) {
      count++;
      i = j;
      j++;
    } else {
      j++;
    }
  }

  return count;
}

console.log(countUniqueValues([1, 2, 3, 3, 3]));
console.log(countUniqueValues([]));

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues2([1, 2, 3, 3, 3]));
console.log(countUniqueValues2([]));
