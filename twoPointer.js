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

console.log(maxSumBrute([2, 3, 1, 5, 2, 4, 5, 3, 1, 9], 3));

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

console.log(maxSumRef([2, 3, 1, 5, 2, 4, 5, 3, 1, 9], 3));
