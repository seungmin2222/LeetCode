/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let words = ''
  let count = 0;
  let nowWord = '';
  
  for (let i = 0; i < word.length; i++) {
    if (nowWord === word[i]) {
      count++;
    } else {
      if (nowWord !== '') {
        words += count + nowWord;
      }
      nowWord = word[i];
      count = 1;
    }

    if (count === 9) { 
      words += count + nowWord;
      count = 0;
      nowWord = '';
    }
  }

  if (count > 0) {
    words += count + nowWord;
  }
  
  return words;
}; 