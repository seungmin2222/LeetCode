/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
    const m = grid.length;
    const n = grid[0].length;
    let allValues = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            allValues.push(grid[i][j]);
        }
    }

    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);

    for (let value of allValues) {
        if ((value - minValue) % x !== 0) {
            return -1;
        }
    }

    allValues.sort((a, b) => a - b);
    const median = allValues[Math.floor(allValues.length / 2)];

    let operations = 0;
    for (let value of allValues) {
        operations += Math.abs(value - median) / x;
    }

    return operations;
};