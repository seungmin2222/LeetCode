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
var maxDepth = function(root, num) {
  let maxNum = 0;

  function depth(node, num) {
    if (!node) return 0;
    
    num++
    
    let leftDepth = depth(node.left, num);
    let rightDepth = depth(node.right, num);
    
    if (maxNum < num) {
      maxNum = num;
    }
  }
  depth(root, 0);
  
  return maxNum;
};
