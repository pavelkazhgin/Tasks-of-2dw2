// Write a function called repeatStr which repeats 
// the given string string exactly n times.
// For Exapmle:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatString (number, str) {
  return str.repeat(number);
}

module.exports = repeatString;
