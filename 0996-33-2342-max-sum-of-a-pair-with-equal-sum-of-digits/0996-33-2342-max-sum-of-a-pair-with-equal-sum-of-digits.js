/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    function sumOfDigits(num) {
        let sum = 0;
        
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    let map = new Map();
    let maxSum = -1;

    for (const num of nums) {
        let digitSum = sumOfDigits(num);
        
        if (map.has(digitSum)) {
            maxSum = Math.max(maxSum, map.get(digitSum) + num);
        }
        
        map.set(digitSum, Math.max(map.get(digitSum) || 0, num));
    }

    return maxSum;
};