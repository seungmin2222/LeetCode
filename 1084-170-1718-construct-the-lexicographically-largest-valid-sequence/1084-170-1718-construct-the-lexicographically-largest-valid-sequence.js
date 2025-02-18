/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    const length = n * 2 - 1; 
    const result = new Array(length).fill(0); 
    const used = new Set();  
    
    function backtrack(pos) {
        if (pos === length) {
            return true;
        }
        
        if (result[pos] !== 0) {
            return backtrack(pos + 1);
        }
        
        for (let num = n; num >= 1; num--) {
            if (used.has(num)) {
                continue;
            }
            
            if (num === 1) {
                result[pos] = 1;
                used.add(1);
                
                if (backtrack(pos + 1)) {
                    return true;
                }
                
                result[pos] = 0;
                used.delete(1);
            }
            else if (pos + num < length && result[pos + num] === 0) {
                result[pos] = num;
                result[pos + num] = num;
                used.add(num);
                
                if (backtrack(pos + 1)) {
                    return true;
                }
                
                result[pos] = 0;
                result[pos + num] = 0;
                used.delete(num);
            }
        }
        
        return false;
    }
    
    backtrack(0);
    return result;
};