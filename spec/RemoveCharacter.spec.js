const del = require('../RemoveCharacter');

describe ('3rdTask', ()=>{
  test('To removed first and last symbols of string', ()=>{
    expect(del('Hello word!')).toBe("ello word");
    expect(del('He')).toBe("");
    expect(del(' Hello word! ')).toBe("Hello word!");
  })
})
