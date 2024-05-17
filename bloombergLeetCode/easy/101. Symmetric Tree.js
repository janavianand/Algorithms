/*
https://leetcode.com/problems/symmetric-tree/

101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

But the following [1,2,2,null,3,null,3] is not:
*/

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true
  return isMirror(root,root)
};

const isMirror = function(node1,node2){
  if(node1 === null && node2 === null){
      return true
  }
  if(node1 === null || node2 === null){
      return false
  }
  return node1.val === node2.val && isMirror(node1.left,node2.right) && isMirror(node1.right,node2.left)
}
