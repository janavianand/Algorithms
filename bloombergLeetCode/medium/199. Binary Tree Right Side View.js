
/*


Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---


  Link - https://leetcode.com/problems/binary-tree-right-side-view/

*/

/*

Algo

1. Push the right most node in BFS. so keep track of the nodes in each level. when we reach the end of the level, ie level === 0, then push the value.

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root){
        return []
    }
    let result = []
    let queue = [root]
    let ltrack = 0

    while(queue.length){
        let node = queue.shift()
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        if(ltrack === 0){
            result.push(node.val)
            ltrack = queue.length-1
        }else{
            ltrack -= 1
        }
    }
    return result
};
