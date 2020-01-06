/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

Link - https://leetcode.com/problems/diameter-of-binary-tree/
*/

/*Algo

Let's calculate the depth of a node in the usual way: max(depth of node.left, depth of node.right) + 1. While we do, a path "through" this node uses 1 + (depth of node.left) + (depth of node.right) nodes. Let's search each node and remember the highest number of nodes used in some path. The desired length is 1 minus this number.


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
var diameterOfBinaryTree = function(root) {
    let ans = 1

    function dfs(root){
        if(!root){
            return 0
        }

        let left = dfs(root.left)
        let right = dfs(root.right)

        //update the final depth which will left + right + (current root)1
        ans = Math.max(ans,left+right+1)

        //return the max current depth and include the root
        return Math.max(left,right)+1
    }
    dfs(root)
    return ans-1
};

