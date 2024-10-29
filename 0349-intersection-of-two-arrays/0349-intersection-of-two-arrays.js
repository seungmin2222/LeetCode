/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const uniqueArr1 = [];
    const uniqueArr2 = [];
    const unique = [];
  
    nums1.forEach((element) => {
        if (!uniqueArr1.includes(element)) {
            uniqueArr1.push(element);
        }
    });
  
    nums2.forEach((element) => {
        if (!uniqueArr2.includes(element)) {
            uniqueArr2.push(element);
        }
    });
  
    
    uniqueArr2.forEach((element) => {
        if (uniqueArr1.includes(element)) {
            unique.push(element);
        }
    });
  
    return unique;  
};