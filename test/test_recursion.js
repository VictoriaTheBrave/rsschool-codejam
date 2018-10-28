const assert = require('assert');
Object.freeze(assert);
const recursion = require('../src/recursion.js');

describe('Convert tree to array', () => {
  it('1', () => {
    const solutions = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.deepEqual(solutions, [[100], [90, 120], [70,99,110,130]]);
  });

  it('2', () => {
    const solutions = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130,"left":{"value":125},"right":{"value":135}}}});
    assert.deepEqual(solutions, [[100], [90, 120], [70,99,110,130], [125,135]]);
  });

  it('3', () => {
    const solutions = recursion({"value":100});
    assert.deepEqual(solutions, [[100]]);
  });

  it('4', () => {
    const solutions = recursion({"value":100,"left":{"value":90,"left":{"value":70,"left":{"value":50},"right":{"value":80}},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130,"left":{"value":125},"right":{"value":135,"left":{"value":132,"left":{"value":131},"right":{"value":133}},"right":{"value":137,"left":{"value":136},"right":{"value":150,"left":{"value":140},"right":{"value":160}}}}}}});
    assert.deepEqual(solutions, [[100], [90, 120], [70,99,110,130], [50,80,125,135], [132,137], [131,133,136,150], [140,160]]);
  });
});