/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const sqrt = [];
  const answer = [];
  
  for (let i = 0; i < points.length; i++) {
    const num = points[i][0] ** 2 + points[i][1] ** 2
    sqrt.push([points[i], [num]]);
  }
  
  sqrt.sort((a, b) => {
    return b[1][0] - a[1][0];
  });
  
  for (let i = 0; i < k; i++) {
    const minArr = sqrt.pop();
    answer.push(minArr[0]);
  }
  
  return answer;
};