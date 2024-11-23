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
var countNodes = function(root) {
  if (!root) return 0;

  const getHeight = (node) => {
    let height = 0;
    while (node) {
      height++;
      node = node.left;
    }
    return height;
  };

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (leftHeight === rightHeight) {
    return (1 << leftHeight) + countNodes(root.right);
  } else {
    return (1 << rightHeight) + countNodes(root.left);
  }
};