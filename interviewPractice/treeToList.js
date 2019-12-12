function flattenTree(tree){

  if(!tree) return -1

  let stack = [tree]

  while(stack.length){
    let node = stack.pop()
    if(node.right){
      stack.push(node.right)
    }
    if(node.left){
      stack.push(node.left)
    }
    node.right = stack[stack.length-1] || null
    node.left = null
  }
}



class Node{
  constructor(value){
    this.value = value;
    this.left= null;
    this.right = null
  }
}
