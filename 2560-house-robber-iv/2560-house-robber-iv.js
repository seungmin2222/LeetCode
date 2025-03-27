/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let left = Math.min(...nums);
    let right = Math.max(...nums);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        let count = 0;
        let i = 0;

        while (i < nums.length) {
            if (nums[i] <= mid) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }

        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;

};