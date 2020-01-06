/*

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

Link - https://leetcode.com/problems/path-sum-iii/

Reference - https://leetcode.com/problems/path-sum-iii/discuss/141424/Python-step-by-step-walk-through.-Easy-to-understand.-Two-solutions-comparison.-%3A-

*/

//______________________________________
//Method 1 -  without Memoization

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let path = 0

    function dfs(root,target){
        if(!root){
            return
        }
        test(root,target)
        dfs(root.left,target)
        dfs(root.right,target)
    }

    function test(root,target){
        if(!root){
            return
        }
        if(root.val===target){
            path+=1
        }
        test(root.left,target-root.val)
        test(root.right,target-root.val)

    }

    dfs(root,sum)
    return path
};

//______________________________________

//Method 2 with Memoization (difficult)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if(!root){
      return 0
  }
  let path = 0
  let cache = new Map()
  cache.set(0,1)

  function dfs(root,target,temp,cache){
      if(!root){
         return
      }
      temp += root.val
      let oldPath = temp-target
      path += cache.get(oldPath) || 0
      cache.set(temp,cache.get(temp)+1 || 1)
      dfs(root.left,target,temp,cache)
      dfs(root.right,target,temp,cache)

      cache.set(temp,cache.get(temp)-1)
  }
 dfs(root,sum,0,cache)
 return path
};
