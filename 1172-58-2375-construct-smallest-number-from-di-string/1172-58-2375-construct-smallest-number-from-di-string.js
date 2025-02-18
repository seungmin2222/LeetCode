/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const n = pattern.length;
    const nums = Array.from({length: n + 1}, (_, i) => i + 1);
    
    const findConsecutiveD = (start) => {
        let count = 0;
        
        for (let i = start; i < pattern.length; i++) {
            if (pattern[i] === 'D') {
                count++;
            } else {
                break;
            }
        }

        return count;
    };
    
    let i = 0;

    while (i < pattern.length) {
        if (pattern[i] === 'D') {
            const dCount = findConsecutiveD(i);
            let left = i;
            let right = i + dCount;

            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }

            i += dCount;
        }

        i++;
    }
    
    return nums.join('');
};