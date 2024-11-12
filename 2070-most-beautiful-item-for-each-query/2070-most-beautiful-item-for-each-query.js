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

  const queryWithIndex = queries.map((value, index) => [value, index]);
  queryWithIndex.sort((a, b) => a[0] - b[0]);

  const result = new Array(queries.length).fill(0);
  let j = 0;

  for (let [query, originalIndex] of queryWithIndex) {
    while (j < items.length && items[j][0] <= query) {
      j++;
    }
    if (j > 0) result[originalIndex] = items[j - 1][1];
  }

  return result;
};
