'use strict';

const fib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const getNext = (n) => {
  self.postMessage({
    idx: n,
    num: fib(n),
  });

  getNext(n + 1);
};

self.onmessage = () => {
  getNext(0);
};
