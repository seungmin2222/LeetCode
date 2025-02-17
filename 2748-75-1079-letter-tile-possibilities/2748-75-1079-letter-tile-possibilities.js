/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const freqMap = new Map();
    
    for (const char of tiles) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    function backtrack(map) {
        let sum = 0;
        
        for (const [char, count] of map) {
            if (count === 0) continue;
            
            sum++;
            
            map.set(char, count - 1);
            sum += backtrack(map);
            map.set(char, count);
        }
        
        return sum;
    }
    
    return backtrack(freqMap);
};