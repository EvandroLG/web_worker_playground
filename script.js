'use strict';

const doc = document;
const getById = (value) => doc.getElementById(value);
const on = (element, event, callback) => element.addEventListener(event, callback, false);
const off = (element, event, callback) => element.removeEventListener(event, callback, false);

on(doc, 'DOMContentLoaded', () => {
  const btStartStop = getById('bt-start-stop');

  const onMessage = (e) => console.log(e.data);

  const onStop = () => {
    off(btStartStop, 'click', onStop);
    on(btStartStop, 'click', onStart);

    btStartStop.innerText = 'Start';
  };

  const onStart = () => {
    off(btStartStop, 'click', onStart);
    on(btStartStop, 'click', onStop);

    btStartStop.innerText = 'Stop';

    const worker = new Worker('./worker.js');
    on(worker, 'message', onMessage);
  };

  on(btStartStop, 'click', onStart);
});
