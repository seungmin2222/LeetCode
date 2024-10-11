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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];
    
    const dfs = (node, currentPath, sum) => {
        if (!node) return;
        
        currentPath.push(node.val);
        sum += node.val;
      
        if (!node.left && !node.right && sum === targetSum) {
          result.push([...currentPath]);
        } else {
          dfs(node.left, currentPath, sum);
          dfs(node.right, currentPath, sum); 
        }
      
        currentPath.pop();
    };
    
    dfs(root, [], 0);
    return result;
};
