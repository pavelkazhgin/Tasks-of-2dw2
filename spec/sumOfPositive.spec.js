const sumOfPositive = require('../sumOfPositive.js');

describe('1stTask', () => {

  test('Getting sum of positive numbers of array', ()=> {
    expect(sumOfPositive([1, -2, 3, -4, 5])).toBe(9);
    expect(sumOfPositive([])).toBe(0);
  })
})
