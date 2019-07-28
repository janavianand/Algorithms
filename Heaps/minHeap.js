//MinHeap
class MinHeap{
  constructor(value){
    this.data = [value]
  }
  insert(value){
    this.data.push(value)
    this.siftUp(this.data.length-1)
  }
  siftUp(index){
    let parentIndex = Math.floor((index-1)/2)
    if(this.data[index]<this.data[parentIndex]){
      [this.data[index],this.data[parentIndex]] = [this.data[parentIndex],this.data[index]]
      this.siftUp(parentIndex)
    }
  }
  remove(){
    [this.data[0],this.data[this.data.length-1]] = [this.data[this.data.length-1],this.data[0]]
    this.data.pop()
    this.siftDown(0)
  }
  siftDown(index){
    let child1Index = (2*index)+1;
    let child2Index = (2*index)+2;
    if(this.data[child1Index] < this.data[child2Index]){
      [this.data[index],this.data[child1Index]] = [this.data[child1Index],this.data[index]]
      if(this.data[(2*child1Index)+1] || this.data[(2*child1Index)+2]){
        this.siftDown(child1Index)
      }
    }else if(this.data[child1Index] > this.data[child2Index]){
      [this.data[index],this.data[child2Index]] = [this.data[child2Index],this.data[index]]
      if(this.data[(2*child2Index)+1] || this.data[(2*child2Index)+2]){
        this.siftDown(child2Index)
      }
    }
  }
}

let heap = new MinHeap(5)
heap.insert(7)
heap.insert(2)
heap.insert(1)
console.log(heap)
heap.remove()
console.log(heap)
