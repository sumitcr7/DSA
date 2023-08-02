const getDigit = (num, pow)=>{
  return Math.floor(Math.abs(num)/ Math.pow(10, pow))%10;
};

console.log(getDigit(1234,3));

const countDigit = (num)=>{

    return Math.floor(Math.log10(Math.abs(num))) + 1
    
}


console.log(countDigit(2213))
