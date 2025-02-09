/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxNum = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                const islandArea = checkIsland(i,j);
                
                if (maxNum < islandArea) {
                    maxNum = islandArea;
                }
            }
        }
    }

    function checkIsland (x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0) {
            return 0;
        }

        let area = 1;
        grid[x][y] = 0;

        area += checkIsland(x - 1, y);
        area += checkIsland(x + 1, y);
        area += checkIsland(x, y - 1);
        area += checkIsland(x, y + 1);

        return area;
    }

    return maxNum;
};  

