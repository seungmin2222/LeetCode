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
var deepestLeavesSum = function(root) {
    if (!root) return 0;

    let queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        sum = 0;
      
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            sum += currentNode.val;

            if (currentNode.left) queue.push(currentNode.left);

            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    return sum;  
};