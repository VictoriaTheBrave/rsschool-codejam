const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('../src/sumOfOther.js');

describe('Find some of the others in array', () => {
  it('1', () => {
    const solutions = sumOfOther([1, 2, 3]);
    assert.deepEqual(solutions, [5, 4, 3]);
  });

  it('2', () => {
    const solutions = sumOfOther([]);
    assert.deepEqual(solutions, []);
  });

  it('3', () => {
    const solutions = sumOfOther([-8, -6, -2, -25]);
    assert.deepEqual(solutions, [-33, -35, -39, -16]);
  });

  it('4', () => {
    const solutions = sumOfOther([-8, 6, 2, -25, 0]);
    assert.deepEqual(solutions, [-17, -31, -27, 0, -25]);
  });

  it('5', () => {
    const solutions = sumOfOther([516, 5824, -652, 784, 0, -6521, 75]);
    assert.deepEqual(solutions, [-490, -5798, 678, -758, 26, 6547, -49]);
  });
  
});