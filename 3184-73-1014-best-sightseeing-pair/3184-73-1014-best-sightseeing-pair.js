/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0;
    let maxI = values[0];

    for (let j = 1; j < values.length; j++) {
        maxScore = Math.max(maxScore, maxI + values[j] - j);

        maxI = Math.max(maxI, values[j] + j);
    }

    return maxScore;
};