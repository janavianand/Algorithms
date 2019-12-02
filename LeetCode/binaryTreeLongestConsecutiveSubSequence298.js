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
var longestConsecutive = function(root) {
    return dfs(root,null,0)
};

function dfs(root,prev,count){

    if(!root) return count

    if(prev!==null && root.val-prev === 1) {
        count +=1
    }else{
        count = 1
    }

    return Math.max(count,Math.max(dfs(root.left,root.val,count),dfs(root.right,root.val,count)))
}
