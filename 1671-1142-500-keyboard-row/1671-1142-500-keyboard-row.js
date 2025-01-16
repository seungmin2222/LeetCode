/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
     const rows = [
    new Set('qwertyuiop'.split('')),
    new Set('asdfghjkl'.split('')),
    new Set('zxcvbnm'.split(''))
  ];

  return words.filter(word => {
    const lowerCaseWord = word.toLowerCase();
    return rows.some(row => 
      lowerCaseWord.split('').every(char => row.has(char))
    );
  });
};