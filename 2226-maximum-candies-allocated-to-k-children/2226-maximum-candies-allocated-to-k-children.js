/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let left = 0;
    let right = Math.max(...candies);
    
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        let count = 0;
        
        for (let candy of candies) {
            count += Math.floor(candy / mid);
        }
        
        if (count >= k) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};
