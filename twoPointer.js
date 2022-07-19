// write a function to calculate maximum sum of n consecutive number in an array

function maxSumBrute(arr, num) {
  if (arr.length < num) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + num; j++) {
      sum += arr[j];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// console.log(maxSumBrute([2, 3, 1, 5, 2, 4, 5, 3, 1, 9], 3));

function maxSumRef(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSumRef([2, 3, 1, 5, 2, 4, 5, 3, 1, 9], 3));

// check if the given a sorted array and a target, check whether pair of number is equal to target

function averagePair(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let avg = (arr[i] + arr[j]) / 2;
    if (avg === target) return true;
    if (avg > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));

// given two strings check if the first is subsequence of the next string

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
}

console.log(isSubsequence("avv", "avv"));
