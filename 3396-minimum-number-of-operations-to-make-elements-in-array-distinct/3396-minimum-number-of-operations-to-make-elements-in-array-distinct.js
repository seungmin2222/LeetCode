/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0;

    while (nums.length > 0) {
        const unique = new Set(nums);

        if (unique.size === nums.length) {
            return count;
        }

        nums.splice(0, 3);
        count++;
    }

    return count;
};