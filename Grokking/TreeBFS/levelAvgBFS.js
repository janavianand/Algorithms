class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_level_averages = function(root) {
  let result = [];

  let queue = [root]
  let sum = 0
  let levelLength = queue.length
  let n = queue.length

  while(queue.length){
    let node = queue.shift()
    sum += node.value
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    if(n === 1){
      let average = sum/levelLength
      result.push(average)
      levelLength = queue.length
      n = queue.length
      sum = 0
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
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
