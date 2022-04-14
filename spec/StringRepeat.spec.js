const repeatString = require ('../StringRepeat');

describe ('4thTask', ()=>{
  test('Return multiplied string', ()=>{
    expect(repeatString(4, 'I')).toBe('IIII');
    expect(repeatString(5, "Hello")).toBe("HelloHelloHelloHelloHello");
    
  })
})
