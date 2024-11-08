/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
  for (let x = 0; x <= num; x++) {
    const reversedX = parseInt(x.toString().split('').reverse().join(''), 10);

    if (x + reversedX === num) {
      return true;
    }
  }

  return false;
};

