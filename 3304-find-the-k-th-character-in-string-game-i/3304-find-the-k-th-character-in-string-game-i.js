/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = 'a';

    while (word.length < k) {
        word = stringGame(word);
    }

    return word[k - 1];
};

function stringGame(s) {
    let next = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const nextChar = String.fromCharCode(
            char.charCodeAt(0) === 122 ? 97 : char.charCodeAt(0) + 1
        );

        next += nextChar;
    }
    
    return s + next;
}