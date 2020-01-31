/*

Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.
Two trees are duplicate if they have the same structure with same node values.
Example 1:
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:
      2
     /
    4
and
    4
Therefore, you need to return above trees' root in the form of a list.
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let hash = {}
    let result = []
    function dfs(root){
        if(!root){
            return '#'
        }
        let id = root.val.toString()+dfs(root.left)+dfs(root.right)
        hash[id] = hash[id]+1 || 1
        hash[id] === 2 ? result.push(root) : null
        return id
    }
    dfs(root)
    return result
};
