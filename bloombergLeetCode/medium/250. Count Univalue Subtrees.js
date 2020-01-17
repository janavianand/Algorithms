
/*
Given a binary tree, count the number of uni-value subtrees.
A Uni-value subtree means all nodes of the subtree have the same value.
Example :
Input:  root = [5,1,5,5,5,null,5]
              5
             / \
            1   5
           / \   \
          5   5   5
Output: 4
Link - https://leetcode.com/problems/count-univalue-subtrees/
*/
/*
Algo
1. We need to increment the count,
      1. when we increment a node with no children
      2. when it is unival tree.
2. to find it is a unival tree. have a boolean. Recursively check the nodes with the boolean and increment at the end only when the boolean is true
3 . return the boolean
4. IMPORTANT - make sure to call recursively first and AND the result with the current boolean. like this - dfs(root.right) && univalBool && root.right.val === root.val.
if the order is changed and boolean is false, it will not call the function recursively
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
var countUnivalSubtrees = function(root) {
    if(!root){
        return 0
    }
    let count = 0
    function dfs(root){
        if(!root.left && !root.right){
            count += 1
            return true
        }
        let univalBool = true
        if(root.left){
            univalBool = dfs(root.left) && univalBool && root.left.val === root.val
        }
        if(root.right){
            univalBool = dfs(root.right) && univalBool && root.right.val === root.val
        }
        if(!univalBool){
            return false
        }
        count += 1
        return true
    }
    dfs(root)
    return count
};


