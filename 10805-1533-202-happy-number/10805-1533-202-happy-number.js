/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();
    let num = n;

    while (num !== 1) {
        let sum = 0;
        let digits = num.toString().split('');
        for (let digit of digits) {
            sum += Number(digit) ** 2;
        }
        num = sum;

        if (seen.has(num)) {
            return false;
        }
        seen.add(num);
    }

    return true;
};
