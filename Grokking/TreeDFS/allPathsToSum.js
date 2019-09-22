class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_paths = function(root, sum) {
  let result = []
  dfs(root,sum,[],result)
  return result;
};

function dfs(root,sum,arrpath,result){
  if(root === null || (root.value !== sum && root.left===null && root.right===null)){
    return
  }
  arrpath.push(root.value)
  if(root.value === sum && root.left===null && root.right===null){
    result.push([...arrpath])
  }else{
    dfs(root.left,sum-root.value,arrpath,result)
    dfs(root.right,sum-root.value,arrpath,result)
  }
  arrpath.pop()
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
