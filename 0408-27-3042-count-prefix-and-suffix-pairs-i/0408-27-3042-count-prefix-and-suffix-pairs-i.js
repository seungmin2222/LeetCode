var countPrefixSuffixPairs = function(words) {
    const isPrefixAndSuffix = (str1, str2) => {
        return str2.startsWith(str1) && str2.endsWith(str1);
    };

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i < j) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }
    }

    return count;
};