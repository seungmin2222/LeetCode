/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    const seen = new Set();
    seen.add(word);

    const n = word.length;
    let i = 0;

    while (i < n) {
        let j = i;
        while (j < n && word[j] === word[i]) {
            j++;
        }

        const len = j - i;

        for (let cut = 1; cut < len; cut++) {
            const newWord = word.slice(0, i) + word.slice(i, j - cut) + word.slice(j);
            seen.add(newWord);
        }

        i = j;
    }

    return seen.size;
};