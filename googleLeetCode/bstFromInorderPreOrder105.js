/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return
 */
var buildTree = function(preorder, inorder) {
    return create(preorder,inorder,0,inorder.length-1,0,preorder.length-1)
};

function create(pre,ino,instart,inend,prestart,preend){
    if(prestart > preend || instart > inend){
        return null
    }

    let root_val = pre[prestart]

    let root = new TreeNode(root_val)

    let index = ino.indexOf(root_val)

    let leftLimit = index - instart
    let rightLimit = inend - index

    root.left = create(pre,ino,instart,index-1,prestart+1,prestart+leftLimit)
    root.right = create(pre,ino,index+1,inend,prestart+leftLimit+1,prestart+leftLimit+rightLimit)

    return root

}
