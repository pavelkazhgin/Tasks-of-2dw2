//It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function remove(str) {
  let arr = str.split('');
  arr.splice(0, 1);
  arr.splice(-1, 1);
  return arr.join('');
}

module.exports = remove;
