// Swap the alternate nodes in tree. ex. level 1 ie. root node does not change. level2 children of root node should be swapped  and so on.

class BinarySearchTree {
  constructor (val) {
    this.value = val
    this.left = null
    this.right = null
  }
  insert (val) {
    const direction = val < this.value ? 'left' : 'right'
    if (this[direction]) this[direction].insert(val)
    else this[direction] = new BinarySearchTree(val)
  }
}

let bst = new BinarySearchTree(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(13)
bst.insert(7)
bst.insert(17)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(9)
bst.insert(12)
bst.insert(14)
bst.insert(16)
bst.insert(19)

function bfs(tree){
  let result = [tree]
  let queue = [tree]
  while(queue.length){
    let current = queue.shift()
    if(current.left) {
      queue.push(current.left)
      result.push(current.left)
    }
    if(current.right){
      queue.push(current.right)
      result.push(current.right)
    }
  }
  return result
}

//let res = bfs(bst)
//console.log(res)

function swapTree(tree){
  let array = bfs(bst)
  let n = 1;
  array.shift()
  while(array.length){
    if(n===0|| n%2 == 0){
      for(let i = 0;i<Math.pow(2,n);i++){
        array.shift()
      }
      n += 1
    }else{
      for(let j = Math.pow(2,n)-1; j>=0 ; j-=2){
        let temp1,temp2;
        [temp1,temp2] = [array[j].value,array[0].value]
        array[0].value = temp1
        array[j].value = temp2
        array.splice(j,1)
        array.shift()
      }
      n += 1
     }
  }
  return bst
}

console.log(swapTree(bst))
