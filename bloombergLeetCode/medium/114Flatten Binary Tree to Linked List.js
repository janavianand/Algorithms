/*

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

Link - https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

Algo

- if you find a root.left, then store the root.right in a queue and assign root.left to root.right
- if there is no root.right(Means reached end) and there are elements in the queue, then append the elements to the right
- Now call dfs on root.right to flatten the root

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let queue = []

    function dfs(root){
        if(!root){
            return
        }
        if(root.left){
            if(root.right) {
                queue.push(root.right)
            }
            root.right = root.left
            root.left = null
        }
        if(!root.right && queue.length){
            root.right = queue.pop()
        }
        dfs(root.right)
    }
    dfs(root)
};
