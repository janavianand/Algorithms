class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



const find_path = function(root, sequence) {

  if(root === null || root.value !== sequence[0] || !sequence.length) return false

  if(root.value === sequence[0] && root.left === null && root.right === null && sequence.length === 1) return true

  if(root.value === sequence[0]){
    sequence.shift();
    return find_path(root.left,sequence) || find_path(root.right,sequence)
  }
};


var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
