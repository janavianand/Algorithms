
/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Link - https://leetcode.com/problems/kth-largest-element-in-an-array/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(!nums.length || nums.length < k){
        return []
    }
    let minH = new minHeap()
    for(let i=0;i<k;i++){
        minH.pushMin(nums[i])
    }
    for(let i=k;i<nums.length;i++){
        if(nums[i] > minH.heap[0]){
            minH.popMin()
            minH.pushMin(nums[i])
        }
    }
    return minH.popMin()
};
class minHeap{
    constructor(){
        this.heap = []
    }
    pushMin(value){
        this.heap.push(value)
        if(this.heap.length > 1){
            this.swiftUp(this.heap.length-1)
        }
    }
    popMin(){
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
        let max = this.heap.pop();
        this.swiftDown(0)
        return max
    }
    swiftUp(index){
        let parentIndex = Math.floor(Math.abs(index-1)/2)
        if(this.heap[parentIndex] > this.heap[index]){
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            this.swiftUp(parentIndex)
        }
    }
    swiftDown(index){
        let child1 = 2*index+1
        let child2 = 2*index+2
        if(this.heap[child1] && this.heap[index] > this.heap[child1]){
            [this.heap[index],this.heap[child1]]=[this.heap[child1],this.heap[index]]
            this.swiftDown(child1)
        }
        if(this.heap[child2] && this.heap[index] > this.heap[child2]){
            [this.heap[index],this.heap[child2]]=[this.heap[child2],this.heap[index]]
            this.swiftDown(child2)
        }
    }
}
