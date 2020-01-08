/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

Link - https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let queue = [root]
    let result = []
    let level = 1
    let temp = []

    while(queue.length){
        let node = queue.shift()
        temp.push(node.val)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        if(level === 1){
            result.push(temp)
            temp = []
            level = queue.length
        }else{
            level -= 1
        }
    }

    return result
};
