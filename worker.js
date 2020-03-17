'use strict';

const fib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

self.postMessage('hello from web worker!');
self.onmessage = (e) => console.log(e.data);
