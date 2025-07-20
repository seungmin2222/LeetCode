/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {
        const lower = ch.toLowerCase();
        const code = ch.charCodeAt(0);

        const isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
        const isDigit = code >= 48 && code <= 57;
        if (!isLetter && !isDigit) return false;

        if (isLetter) {
            if (vowels.includes(lower)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
};