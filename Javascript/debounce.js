function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function logSometthing(inp) {
  console.log('inp', inp);
}

const debouncedFunction = debounce(logSometthing, 300);

debouncedFunction('123');
debouncedFunction('1234');
debouncedFunction('1235s');
