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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
    const dfs = (node) => {
        if (!node) return [null, -1];

        const [leftLCA, leftDepth] = dfs(node.left);
        const [rightLCA, rightDepth] = dfs(node.right);

        const currentDepth = Math.max(leftDepth, rightDepth) + 1;

        if (leftDepth === rightDepth) {
            return [node, currentDepth];
        }
        else if (leftDepth > rightDepth) {
            return [leftLCA, currentDepth];
        }
        else {
            return [rightLCA, currentDepth];
        }
    };

    return dfs(root)[0];
};