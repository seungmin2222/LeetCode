/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const answer = new Array(n).fill(0);
    
    let count = 0;
    let steps = 0;
    
    for (let i = 0; i < n; i++) {
        answer[i] += steps;
        count += boxes[i] === '1' ? 1 : 0;
        steps += count;
    }
    
    count = 0;
    steps = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        answer[i] += steps;
        count += boxes[i] === '1' ? 1 : 0;
        steps += count;
    }
    
    return answer;
};