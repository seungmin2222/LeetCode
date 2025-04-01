/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const [point, brainpower] = questions[i];
        const nextIndex = i + brainpower + 1;

        const solve = point + (nextIndex < n ? dp[nextIndex] : 0);
        const skip = dp[i + 1];

        dp[i] = Math.max(solve, skip);
    }

    return dp[0];
};