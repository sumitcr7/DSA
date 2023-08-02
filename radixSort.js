const getDigit = (num, pow)=>{
  return Math.floor(Math.abs(num)/ Math.pow(10, pow))%10;
};

console.log(getDigit(1234,3));
