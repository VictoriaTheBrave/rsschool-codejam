const assert = require('assert');
Object.freeze(assert);
const make = require('../src/make.js');
function sum(a, b) {
  return a + b;
}

function distract(a, b) {
  return a - b;
}

function sumAge(a, b) {
  if(typeof a === "object"){
    return a.age + b.age;
  }
  return a + b.age;
}

describe('Return result of make function', () => {
  it('1', () => {
    const solutions = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(solutions, 777);
  });

  it('2', () => {
    assert.deepEqual(make(sum), {TypeError: "Can't call function make with empty array as argument"});
  });

  it('3', () => {
    const solutions = make(15)(sum);
    assert.deepEqual(solutions, 15);
  });

  it('4', () => {
    assert.deepEqual(make(sum), {TypeError: "Can't call function make with empty array as argument"});
  });

  it('5', () => {
    const solutions = make(15)()(sum);
    assert.deepEqual(solutions, 15);
  });

  it('6', () => {
    const solutions = make(150)(60, 75, -5)(distract);
    assert.deepEqual(solutions, 20);
  });

  it('7', () => {
    const solutions = make({age: 25, name: 'Alice'})({age: 65, name: 'Piter'}, {name: 'Charley', age: 35})(sumAge);
    assert.deepEqual(solutions, 125);
  });

  it('8', () => {
    const solutions = make(870, 15, 68)(60, -53, -95)(distract);
    assert.deepEqual(solutions, 875);
  });
});