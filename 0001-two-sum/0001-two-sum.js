const twoSum = function(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in obj) {
      return [obj[diff], i];
    }
    obj[nums[i]] = i;
  }
};
