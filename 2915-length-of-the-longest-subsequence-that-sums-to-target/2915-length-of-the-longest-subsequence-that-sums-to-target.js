/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(nums, target) {
    const dp = new Map();
    dp.set(0, 0);

    for (let num of nums) {
        const currentDp = new Map(dp);

        for (let [sum, length] of dp.entries()) {
            const newSum = sum + num;
            const newLength = length + 1;

            if (newSum === target) {
                currentDp.set(newSum, Math.max(currentDp.get(newSum) || 0, newLength));
            } else if (newSum < target) {
                currentDp.set(newSum, Math.max(currentDp.get(newSum) || 0, newLength));
            }
        }

        dp.clear();
        for (const [key, value] of currentDp.entries()) {
            dp.set(key, value);
        }
    }

    return dp.has(target) ? dp.get(target) : -1;

};