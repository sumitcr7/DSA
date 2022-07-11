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

console.log(same_brute([1, 2, 3], [1, 4, 9]));
console.log(same_brute([1, 2, 4], [1, 4, 9]));
