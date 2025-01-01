/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
     let maxScore = 0;

    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i);
        const right = s.slice(i);

        const leftZeros = left.split('0').length - 1;
        const rightOnes = right.split('1').length - 1;

        const currentScore = leftZeros + rightOnes;
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
};