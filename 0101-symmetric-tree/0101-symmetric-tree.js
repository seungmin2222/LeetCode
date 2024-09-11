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
var isSymmetric = function(root) {
  function isMirror(tree1, tree2) {
      if (!tree1 && !tree2) {
          return true;
      }
      if (!tree1 || !tree2) {
          return false;
      }
      return (tree1.val === tree2.val)
          && isMirror(tree1.right, tree2.left)
          && isMirror(tree1.left, tree2.right);
  }

  if (!root) {
      return true;
  }

  return isMirror(root.left, root.right);
};