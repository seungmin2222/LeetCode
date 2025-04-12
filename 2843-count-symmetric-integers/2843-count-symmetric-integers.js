/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;

    for (let i = low; i <= high; i++) {
        const s = i.toString();

        if (s.length % 2 === 0) {
            const mid = s.length / 2;
            const left = s.slice(0, mid);
            const right = s.slice(mid);

            const sum = str => [...str].reduce((acc, cur) => acc + Number(cur), 0);

            if (sum(left) === sum(right)) {
                count++;
            }
        }
    }

    return count;
};