const addUptoFast = (n) => {
  return (n * (n + 1)) / 2;
};

const addUptoSlow = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUptoFast(6));
console.log(addUptoSlow(6));
