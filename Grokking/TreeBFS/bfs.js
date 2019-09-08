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

  let n = 0

  while(queue.length){

    if(n===0){
      let temp = []
      for(let i=0;i<queue.length;i++){
        temp.push(queue[i].value)
      }
      result.push(temp);
      n = queue.length-1;
    }else{
      n -= 1;
    }

    let node = queue.shift();
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);

  }

  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
