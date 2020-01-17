
/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
Link-https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
*/

//Note - Pay Attention to level track

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
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    let flag = true
    let ltrack = 0
    let queue = [root]
    let result = []
    let temp=[]
    while(queue.length){
        let node = queue.shift()
        flag ? temp.push(node.val) : temp.unshift(node.val)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        if(ltrack === 0){
            result.push([...temp])
            temp = []
            ltrack = queue.length-1
            flag=!flag
        }else{
            ltrack -= 1
        }
    }
    return result
};


