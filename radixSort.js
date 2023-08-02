const getDigit = (num, pow)=>{
  return Math.floor(Math.abs(num)/ Math.pow(10, pow))%10;
};

const countDigit = (num)=>{
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (arr)=>{
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, countDigit(arr[i]))
    }
    return max;
};

const radixSort = (nums)=> {
    const maxDigit  = mostDigits(nums);
    console.log(maxDigit);
    for(let k=0; k <= maxDigit; k++){
        const bucket = Array.from({length:10}, ()=> []);
        for (let i = 0; i < nums.length; i++) {
            const digit =  getDigit(nums[i], k);
            bucket[digit].push(nums[i]);
        }
        nums = [].concat(...bucket);
    }

    return nums;
}

console.log(radixSort([211,2,23,123,123,12313]))
