/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let count = 0;
    let productMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];

            if (productMap.has(product)) {
                count += productMap.get(product);
            }

            productMap.set(product, (productMap.get(product) || 0) + 1);
        }
    }
    
    return count * 8;
};