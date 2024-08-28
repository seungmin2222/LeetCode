/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  let cloneImageArr = [...image];
  const stack = [];
  const originalColor = image[sr][sc];

  if (originalColor === color) return image;

  stack.push([sr, sc]);

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) continue;
    if (cloneImageArr[r][c] !== originalColor) continue;

    cloneImageArr[r][c] = color;
    
    stack.push([r - 1, c]);
    stack.push([r + 1, c]);
    stack.push([r, c - 1]);
    stack.push([r, c + 1]);
  }

  return cloneImageArr;
};
