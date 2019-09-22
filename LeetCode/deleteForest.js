function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var delNodes = function(root, to_delete) {

  let hash = {}

  for(let i=0;i<to_delete.length;i++){
      hash[to_delete[i]] = true
  }

  let result = [[root]]

  if(root === null) return result

  dfs(root,hash,result)
  return result
};

function dfs(root,hash,result){
  if(root === null) return
  if(hash[root.val]){
      if(root.left){
          let tree1 = {val:root.left.val,left:null,right:null}
          if(root.left.left) tree1.left = root.left.left
          if(root.left.right) tree1.right = root.left.right
          result.push([tree1])
          dfs(tree1,hash,result)
      }
      if(root.right){
          let tree2 = {val:root.right.val,left:null,right:null}
          if(root.right.left) tree2.left = root.right.left
          if(root.right.right) tree2.right = root.right.right
          result.push([tree2])
          dfs(tree2,hash,result)
      }
      root.val = null;
      root.left = null;
      root.right = null;
  }else{
      dfs(root.left,hash,result)
      dfs(root.right,hash,result)
  }
}

tree = {
val: 1,
right:
 {
   val: 3,
   right: { val: 7, right: null, left: null },
   left: { val: 6, right: null, left: null } },
left:
 {
   val: 2,
   right: { val: 5, right: null, left: null },
   left: { val: 4, right: null, left: null } } }
console.log(delNodes(tree,[3,5]))
