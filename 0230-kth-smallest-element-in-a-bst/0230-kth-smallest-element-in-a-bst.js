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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const arr = [];
  
  function kth(node) {
    if (node) {
        kth(node.left);
        arr.push(node.val);
        kth(node.right);
    }
  }
  
  kth(root);
  
  return arr[k - 1];
};
