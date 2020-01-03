/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {

    let sum = 0
    function dfs(node){
        if(!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)

        sum += Math.abs(left-right)
        return node.val + left + right
    }

    dfs(root)

    return sum
};

