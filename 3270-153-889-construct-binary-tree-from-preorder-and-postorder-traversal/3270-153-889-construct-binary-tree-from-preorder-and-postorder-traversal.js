/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    if (preorder.length === 0) return null;
    
    const root = new TreeNode(preorder[0]);
    
    if (preorder.length === 1) return root;
    
    const leftRootVal = preorder[1];
    const index = postorder.indexOf(leftRootVal);
    
    const leftSize = index + 1;
    
    root.left = constructFromPrePost(
        preorder.slice(1, leftSize + 1),
        postorder.slice(0, leftSize)
    );
    
    root.right = constructFromPrePost(
        preorder.slice(leftSize + 1),
        postorder.slice(leftSize, -1)
    );
    
    return root;
};