class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_minimum_depth = function(root) {

  let level = 0;
  let queue = [root];
  let n = queue.length;
  while(queue.length){
    let node = queue.shift()
    if(!node.left && !node.right) return level+1
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    if(n === 1){
      level += 1
      n = queue.length;
    }else{
      n -= 1
    }
  }
  return -1;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
