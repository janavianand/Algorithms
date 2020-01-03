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
    let result = root ? 1 : 0

    result = helper(root,result)
    return result
};
function helper(root,result){
    if(!root){
        return result
    }
    let inc = findLongest(root,1)
    let dec = findLongest(root,-1)
    result = Math.max(result,inc+dec-1)
    result = helper(root.left,result)
    result = helper(root.right,result)
    return result
}
function findLongest(root,dir){
    if(!root){
        return 0
    }

    let left = root.left && (root.left.val + dir === root.val) ? findLongest(root.left,dir) : 0
    let right = root.right && (root.right.val + dir === root.val) ? findLongest(root.right,dir) : 0

    return Math.max(left,right)+1
}
