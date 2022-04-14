// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function OppNumber(number) {
  if (Math.ceil(number) > 0) {
    return -number;
  } 
  if (Math.floor(number) < 0) {
    return Math.abs(number);
  } else {
    return number ;
  }
}

module.exports = OppNumber;
