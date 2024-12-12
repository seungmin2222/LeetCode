/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let countSay = "1";

  function Say(miniSay) {
    let word = "";
    let count = 1;
    
    for (let i = 1; i < miniSay.length; i++) {
      if (miniSay[i - 1] === miniSay[i]) {
        count++;
      } else {
        word += count + miniSay[i - 1];
        count = 1;
      }
    }
    
    word += count + miniSay[miniSay.length - 1];
    
    return word;
  }

  for (let i = 1; i < n; i++) {
    countSay = Say(countSay);
  }

  return countSay;
};
