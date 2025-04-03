function throttle(func, delay) {
  let flag = true;

  return function (...args) {
    if (!flag) return;

    flag = false;
    func.apply(this, args);

    setTimeout(() => {
      flag = true;
    }, delay);
  };
}


function logSomething(inp) {
  console.log('inp:', inp);
}

const throttledFunction = throttle(logSomething, 1000);


throttledFunction('A');  // Executes immediately
throttledFunction('B');  // Ignored
throttledFunction('C');  // Ignored
setTimeout(() => throttledFunction('D'), 1200); // Executes after delay
