/*

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

Link - https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/
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
var maxDepth = function(root) {
    if(!root){
        return 0
    }
    let depth = 1
    let queue = [root]
    let level = 1

    while(queue.length){
        if(!level){
            depth += 1
            level = queue.length
        }
        let node = queue.shift()
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        level -= 1
    }

    return depth

};
