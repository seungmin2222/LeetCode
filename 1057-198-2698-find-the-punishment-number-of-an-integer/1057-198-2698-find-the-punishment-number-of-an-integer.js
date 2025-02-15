/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
  const canPartition = (str, target, start, sum) => {
        if (start === str.length) {
            return sum === target;
        }
        
        for (let i = 1; i <= str.length - start; i++) {
            const num = parseInt(str.slice(start, start + i));
            if (canPartition(str, target, start + i, sum + num)) {
                return true;
            }
        }
        return false;
    };

    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        const square = i * i;
        if (canPartition(square.toString(), i, 0, 0)) {
            result += square;
        }
    }
    
    return result;
};