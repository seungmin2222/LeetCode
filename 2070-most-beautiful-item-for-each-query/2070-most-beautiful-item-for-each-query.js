/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
  items.sort((a, b) => a[0] - b[0]);

  let maxBeauty = 0;
  
  for (let i = 0; i < items.length; i++) {
    maxBeauty = Math.max(maxBeauty, items[i][1]);
    items[i][1] = maxBeauty;
  }

  const result = new Array(queries.length);

  for (let i = 0; i < queries.length; i++) {
    let left = 0, right = items.length - 1;
    let maxNum = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (items[mid][0] <= queries[i]) {
        maxNum = items[mid][1]; 
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    result[i] = maxNum;
  }

  return result;
};
