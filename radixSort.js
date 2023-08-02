const getDigit = (num, pow)=>{
  return Math.floor(Math.abs(num)/ Math.pow(10, pow))%10;
};

console.log(getDigit(1234,3));


const countDigit = (num)=>{
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log(countDigit(2213));


const mostDigits = (arr)=>{
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, countDigit(arr[i]))
    }
    return max;
};

console.log(mostDigits([1,4,23,12,34,5,12243]))
