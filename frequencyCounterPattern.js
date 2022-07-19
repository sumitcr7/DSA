// check if the second array has corresponding square value from first array and also freq should match
function same_brute(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let val of arr1) {
    const sq = val ** 2;
    const hasSq = arr2.indexOf(sq);
    if (hasSq < 0) {
      return false;
    }
    arr2.splice(hasSq, 1);
  }

  return true;
}

// same_brute([1, 2, 3], [1, 4, 9]);
// same_brute([1, 2, 4], [1, 4, 9]);

// above problem has the time complexity of O(n^2)
// same problem with O(n) complexity

function same_refactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (let val in freq1) {
    const sq = val ** 2;
    // below in operator checks if the given key is present in the object or not and return boolean
    if (!(sq in freq2)) {
      return false;
    }
    if (freq1[val] !== freq2[sq]) {
      return false;
    }
  }

  return true;
}

// console.log(same_refactored([1, 1, 2, 4], [1, 2, 3, 4]));
// console.log(same_refactored([1, 1, 2, 4], [1, 4, 1, 16]));
// console.log(same_refactored([1, 1, 2, 4], [1, 4, 1, 16, 2]));

function sameFreq(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;
  let charCount = {};
  for (let i of num1) {
    charCount[i] = (charCount[i] || 0) + 1;
  }
  for (let i of num2) {
    if (!charCount[i]) {
      return false;
    }
    charCount[i]--;
  }
  return true;
}

// console.log(sameFreq(182, 281));
// console.log(sameFreq(182, 212));

function areThereDuplicates(...arr) {
  const lookup = {};
  for (let i in arr) {
    const char = arr[i];
    if (lookup[char]) {
      return true;
    }
    lookup[char] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 2));
