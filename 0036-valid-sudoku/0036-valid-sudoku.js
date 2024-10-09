/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const num = board[row][col];
            if (num === '.') continue;

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            if (rows[row].has(num) || cols[col].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            rows[row].add(num);
            cols[col].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;

};