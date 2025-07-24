/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let total = 0;

    const first = x >= y ? ['a', 'b', x] : ['b', 'a', y];
    const second = x >= y ? ['b', 'a', y] : ['a', 'b', x];

    const removePattern = (str, p1, p2, score) => {
        const stack = [];
        let points = 0;
        for (let ch of str) {
            if (stack.length && stack[stack.length - 1] === p1 && ch === p2) {
                stack.pop();
                points += score;
            } else {
                stack.push(ch);
            }
        }
        return [stack.join(''), points];
    };

    let [temp, points1] = removePattern(s, first[0], first[1], first[2]);
    total += points1;

    let [_, points2] = removePattern(temp, second[0], second[1], second[2]);
    total += points2;

    return total;
};