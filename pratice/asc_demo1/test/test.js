import assert from 'assert';
import {add} from '../build/release.js'
performance.mark('start');
assert.strictEqual(add(1, 2), 3);
performance.mark('end');
performance.measure('time', 'start', 'end');
console.log(performance.getEntriesByName('time'));
console.log(performance.getEntriesByName('time')[0].duration);


// 针对 js 代码的性能检测
function add1(a, b) {
  let res = 0;
  for (let i = 0; i < 1000000; i++) {
    res += a;
  }
  return a + b;
}

performance.mark('js_start');
console.log(add1(1, 2));
performance.mark('js_end');
performance.measure('js_time', 'js_start', 'js_end');
console.log(performance.getEntriesByName('js_time'));