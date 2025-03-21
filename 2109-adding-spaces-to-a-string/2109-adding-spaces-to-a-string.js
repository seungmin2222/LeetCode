/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let result = '';
  let prev = 0;

  for (let i = 0; i < spaces.length; i++) {
    result += s.slice(prev, spaces[i]) + ' ';
    prev = spaces[i];
  }
  
  result += s.slice(prev);

  return result;
};