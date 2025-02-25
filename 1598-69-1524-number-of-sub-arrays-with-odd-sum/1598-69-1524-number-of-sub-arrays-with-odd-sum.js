/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let count = 0;
    let prefixSum = 0;
    
    let even = 1;
    let odd = 0;
    
    const MOD = 1000000007;
    
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        prefixSum += arr[i];
        
        if (prefixSum & 1) {
            count = (count + even) % MOD;
            odd = (odd + 1) % MOD;
        } else {
            count = (count + odd) % MOD;
            even = (even + 1) % MOD;
        }
    }
    
    return count;
};