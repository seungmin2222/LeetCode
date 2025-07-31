/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    const allResults = new Set();
    let currentORs = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        const newORs = new Set();
        
        newORs.add(arr[i]);
        
        for (const prevOR of currentORs) {
            newORs.add(prevOR | arr[i]);
        }
        
        for (const orValue of newORs) {
            allResults.add(orValue);
        }
        
        currentORs = newORs;
    }
    
    return allResults.size;
};