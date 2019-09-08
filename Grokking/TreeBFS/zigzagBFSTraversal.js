class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const traverse = function(root) {
  let result = [];
  let queue = [root]
  let temp = []
  let flag = true
  let n = queue.length

  while(queue.length){
    let node = queue.shift()

    if(flag){
      temp.push(node.value)
    }else{
      temp.unshift(node.value)
    }

    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)

    if(n==1){
      result.push(temp)
      temp = []
      n = queue.length
      flag = !flag
    }else{
      n -= 1
    }

  }

  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)
