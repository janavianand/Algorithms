

/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]




Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.


Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.

Link - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

solution - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return root
    }

    let parent = new Map()
    let queue = [root]
    parent.set(root,null)

    while(queue.length && (!parent.has(p) || !parent.has(q))){
        let node = queue.shift()

        if(node.left){
            parent.set(node.left,node)
            queue.push(node.left)
        }
        if(node.right){
            parent.set(node.right,node)
            queue.push(node.right)
        }
    }

    let pParent = new Set()

    while(parent.has(p)){
        pParent.add(p)
        p = parent.get(p)
    }

    while(!pParent.has(q)){
        q = parent.get(q)
    }
    return q
};
