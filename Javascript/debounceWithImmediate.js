function debounce(func, delay, immmediate) {
  let timer;

  return function (...args) {
    const callNow = immmediate && !timer;

     if(callNow) func.apply(this, args);

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if(!immmediate) func.apply(this, args);
    }, delay);

   
  };
}

function logSometthing(inp) {
  console.log('inp', inp);
}

const debouncedFunction = debounce(logSometthing, 300, true);

debouncedFunction('123');
debouncedFunction('1234');
debouncedFunction('1235s');
debouncedFunction('1235s');
debouncedFunction('1235s');
debouncedFunction('1235s');
debouncedFunction('1235s');
setTimeout(() => debouncedFunction('Final Call'), 400); // Executes after delay
