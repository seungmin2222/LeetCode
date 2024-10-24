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
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) return 0;
  
  let min = Infinity;
  
  function dfs(root, val) {
      if (root === null) return;

      if (root.left === null && root.right === null) {
        if (min > val) {
            min = val;
        }
      }

      if (root.left) {
        dfs(root.left, val + 1);
      }

      if (root.right) {
        dfs(root.right, val + 1);
      }
    }
  
  dfs(root, 1);
  
  return min;
};
