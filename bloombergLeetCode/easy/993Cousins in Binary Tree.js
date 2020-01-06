/*

n a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.



Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false


Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.

Link - https://leetcode.com/problems/cousins-in-binary-tree/

*/

/*
Algo

We can use a depth-first search to annotate each node. For each node with parent par and depth d, we will record results in hashmaps: parent[node.val] = par and depth[node.val] = d.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if(!root){
        return false
    }

    let parent = {}
    let depth = {}

    dfs(root,null,parent,depth)
    return parent[x] !== parent[y] && depth[x] === depth[y]

};

function dfs(root,par,parent,depth){
    if(!root){
        return
    }

    parent[root.val] = par
    depth[root.val] = depth[par] + 1 || 1

    dfs(root.left,root.val,parent,depth)
    dfs(root.right,root.val,parent,depth)
}
