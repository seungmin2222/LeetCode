/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  skill.sort((a,b) => a - b);

  let right = skill.length - 1;
  let left = 0;
  let totalSum = 0;

  const targetSum = skill[left] + skill[right];
  
  while (left < right) {
    const teamSum = skill[left] + skill[right];
    
    if (teamSum !== targetSum) return -1;

    totalSum += skill[left] * skill[right];
    left++;
    right--;
  }

  return totalSum;
};