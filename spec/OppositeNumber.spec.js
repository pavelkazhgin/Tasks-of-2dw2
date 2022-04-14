const oppNumber = require('../OppositeNumber');

describe("2ndTask", ()=>{
  test('Return the opposite number', ()=>{
    expect(oppNumber(-1)).toBe(1);
    expect(oppNumber(2.34)).toBe(-2.34);
    expect(oppNumber(0)).toBe(0);
    expect(oppNumber(-0.000000058)).toBe(0.000000058);
  })
})
