/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sortedS = s.split('').sort();
  let sortedT = t.split('').sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return sortedT[i];
    }
  }

  return sortedT[sortedT.length - 1];
};