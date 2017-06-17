const { EventEmitter } = require('events');

const events = new EventEmitter();
let count = 0;

module.exports = {
  increment() {
    count++;
    events.emit('incremented', { count });
  },
  onIncremented(fn) {
    events.on('incremented', fn);
  }
};