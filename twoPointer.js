// write a function to calculate maximum sum of n consecutive number in an array

function maxSum(arr, num) {
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

console.log(maxSum([2, 3, 1], 3));
