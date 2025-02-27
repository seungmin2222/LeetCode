/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length;
    
    const indexMap = new Map();
    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }
    
    const dp = Array(n).fill().map(() => Array(n).fill(0));
    
    let maxLength = 0;
    
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j; i++) {
            const next = arr[i] + arr[j];
            
            if (indexMap.has(next)) {
                const k = indexMap.get(next);

                dp[j][k] = dp[i][j] > 0 ? dp[i][j] + 1 : 3;
                maxLength = Math.max(maxLength, dp[j][k]);
            }
        }
    }
    
    return maxLength;
};
