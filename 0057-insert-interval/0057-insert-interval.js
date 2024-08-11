/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let result = [];
  let i = 0;
  let n = intervals.length;

  for (i = 0; i < n && intervals[i][1] < newInterval[0]; i++) {
      result.push(intervals[i]);
  }

  for (; i < n && intervals[i][0] <= newInterval[1]; i++) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
  }

  result.push(newInterval);

  for (; i < n; i++) {
      result.push(intervals[i]);
  }

  return result;
};