/*

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false

Link - https://leetcode.com/problems/same-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q){
        return true
    }

    if(!p || !q){
        return false
    }

    let queue = [p,q]

    while(queue.length){
        let node1 = queue.shift()
        let node2 = queue.shift()

        if(node1.val !== node2.val){
            return false
        }

        if(node1.left || node2.left){
            if(node1.left && node2.left){
                queue.push(node1.left,node2.left)
            }else{
                return false
            }
        }
        if(node1.right || node2.right){
            if(node1.right && node2.right){
                queue.push(node1.right,node2.right)
            }else{
                return false
            }
        }
    }
    return true
};
