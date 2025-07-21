/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const arr = [];
  
  function sumRootValue (root, sum) {
    if (root === null) {
      return;
    }
    
    sum += root.val;
    
    if (!root.left && !root.right) {
      arr.push(sum);
      return;
    }
    
    sumRootValue(root.left, sum);
    sumRootValue(root.right, sum);
  }
  
  sumRootValue(root, 0);
  
  return arr.includes(targetSum);
};