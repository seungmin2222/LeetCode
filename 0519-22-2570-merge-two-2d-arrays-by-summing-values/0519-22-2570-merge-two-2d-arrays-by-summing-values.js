/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const maxLength = Math.max(nums1.length, nums2.length);
    const obj = {}
    const arr = [];

    for (let i = 0; i < maxLength; i++) {
        if (nums1[i]) {
            if (obj[nums1[i][0]]) {
                obj[nums1[i][0]] += nums1[i][1];
            } else {
                obj[nums1[i][0]] = nums1[i][1];
            }
        }
        if (nums2[i]) {
            if (obj[nums2[i][0]]) {
                obj[nums2[i][0]] += nums2[i][1];
            } else {
                obj[nums2[i][0]] = nums2[i][1];
            }
        }
    }

    for (const i in obj) {
        arr.push([Number(i), obj[i]]);
    }

    return arr;
};