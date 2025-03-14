/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let totalNumbers = n * n;
    let seen = new Set();
    let repeated = -1;
    let missing = -1;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let num = grid[i][j];
            if (seen.has(num)) {
                repeated = num;
            } else {
                seen.add(num);
            }
        }
    }
    
    for (let i = 1; i <= totalNumbers; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }
    }
    
    return [repeated, missing];
};