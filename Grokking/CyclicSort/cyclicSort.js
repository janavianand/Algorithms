const cyclic_sort = function(nums) {
  for(let i=0;i<nums.length;i++){
    while(nums[i] !== i+1){
      let temp = nums[i]
      let temp2 = nums[nums[i]-1]
      nums[i] = temp2
      nums[temp-1] = temp
    }
  }
  return nums;
}


console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
