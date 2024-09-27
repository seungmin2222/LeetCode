/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  const arr = [];
    for (let i = 0; i < intervals.length; i++) {
      if (arr.length === 0 || arr[arr.length - 1][1] < intervals[i][0]) {
        arr.push(intervals[i]);
      } else {
        arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], intervals[i][1]);
      }
    }
  return arr;
};