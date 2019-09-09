class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_successor = function(root, key) {

  let queue = [root];

  while(queue.length){
    let node = queue.shift()

    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)

    if(node.value === key){
      let result = queue.shift()
      return result
    }
  }
  return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
  console.log(result.value)
result = find_successor(root, 9)
if (result != null)
  console.log(result.value)
