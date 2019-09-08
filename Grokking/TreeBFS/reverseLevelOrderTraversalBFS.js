class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const traverse = function(root) {
  let result = [];

  let queue = [root];
  let n = queue.length
  let temp = []
  while(queue.length){
    let node = queue.shift()
    temp.push(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    if(n==1){
      result.unshift(temp)
      temp = []
      n = queue.length
    }else{
      n-=1
    }
  }

  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)
