/* Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

The successor of a node p is the node with the smallest key greater than p.val.

Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null. */


var inorderSuccessor = function(root, p) {

    let queue = []
    inorder(root,queue)
    // while(queue.length){
    //     let compare = queue.shift()
    //     if(compare === p){
    //         return queue.shift()
    //     }
    // }
    let index = queue.indexOf(p)
    return index >= 0 ? queue[index+1] : null
    //return null
};


function inorder(tree,queue){
    if(tree.left) {
        inorder(tree.left,queue)
    }
    queue.push(tree)
    if(tree.right){
        inorder(tree.right,queue)
    }
}
