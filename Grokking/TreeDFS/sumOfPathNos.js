class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_sum_of_path_numbers = function(root) {
  let result = 0;
  result = dfs(root,result,0)
  return result
};
function dfs(root,result,temp){
  if(root === null) {
    return result
  }
  temp = (temp*10) + root.value
  if(root.left === null && root.right === null) {
    result += temp
    return result
  }else{
    result += dfs(root.left,result,temp)+dfs(root.right,result,temp)
  }
  return result
}


var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
