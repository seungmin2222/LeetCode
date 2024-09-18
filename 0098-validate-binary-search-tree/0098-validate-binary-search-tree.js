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
 * @return {boolean}
 */
var isValidBST = function(root) {
  function isBSTUtil(node, min, max) {
    if (node === null) {
      return true;
    }

    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
    }

    return isBSTUtil(node.left, min, node.val) && isBSTUtil(node.right, node.val, max);
  }

  return isBSTUtil(root, null, null);
};