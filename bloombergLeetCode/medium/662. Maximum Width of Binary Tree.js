
/*
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.
The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.
Example 1:
Input:
           1
         /   \
        3     2
       / \     \
      5   3     9
Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:
Input:
          1
         /
        3
       / \
      5   3
Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:
Input:
          1
         / \
        3   2
       /
      5
Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:
Input:
          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
Note: Answer will in the range of 32-bit signed integer.
Link - https://leetcode.com/problems/maximum-width-of-binary-tree/
*/
/*
Algo
Record the depth and position. We need to know the left most position and right most position in the same level
so update the left position when we move to next level.
left-right+1 will give the answer and update the answer only if its greater than the current answer.
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
var widthOfBinaryTree = function(root) {
    if(!root){
        return 0
    }
    let queue = [new NodeInfo(root,0,0)]
    let result = 0
    let left = 0
    let leveltrack = 0
    while(queue.length){
        let {node,depth,pos} = queue.shift()
        if(node.left){
            queue.push(new NodeInfo(node.left,depth+1,pos*2))
        }
        if(node.right){
            queue.push(new NodeInfo(node.right,depth+1,pos*2+1))
        }
        if(leveltrack !== depth){
            leveltrack = depth
            left = pos
            // The left most of left is always going to be 0
            // But left most of right wont be.
            // Hence we update the left with position when ever the depth and leveltracker is not the same
        }
        // To avoid overflow, a basic check
        if(!additionDoesOverflow(pos-left, 1)){
            result = Math.max(result,Math.abs(pos-left)+1)
        }
    }
    return result
};
class NodeInfo{
    constructor(node,depth,pos){
        this.node = node
        this.depth = depth
        this.pos = pos
    }
}
function additionDoesOverflow(a, b) {
  let c = a + b;
  return a !== c-b || b !== c-a;
}
