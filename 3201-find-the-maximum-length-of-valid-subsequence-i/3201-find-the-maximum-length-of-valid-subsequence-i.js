/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
   let maxLength = 0;
    
    let evenCount = 0;
    for (let num of nums) {
        if (num % 2 === 0) {
            evenCount++;
        }
    }
    maxLength = Math.max(maxLength, evenCount);
    
    let oddCount = 0;
    for (let num of nums) {
        if (num % 2 === 1) {
            oddCount++;
        }
    }
    maxLength = Math.max(maxLength, oddCount);
    
    let alternatingEvenFirst = 0;
    let expectEven = true;
    for (let num of nums) {
        if ((num % 2 === 0) === expectEven) {
            alternatingEvenFirst++;
            expectEven = !expectEven;
        }
    }
    maxLength = Math.max(maxLength, alternatingEvenFirst);
    
    let alternatingOddFirst = 0;
    let expectOdd = true;
    for (let num of nums) {
        if ((num % 2 === 1) === expectOdd) {
            alternatingOddFirst++;
            expectOdd = !expectOdd;
        }
    }
    maxLength = Math.max(maxLength, alternatingOddFirst);
    
    return maxLength;
};