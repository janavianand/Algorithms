const find_duplicate = function(nums) {
  for(let i=0;i<nums.length;i++){
    while(nums[i]!== i+1){
      let temp = nums[i]
      let temp1 = nums[nums[i]-1]
      if(temp === temp1){
        return temp
      }
      nums[i] = temp1
      nums[temp-1] = temp
    }
  }
  return -1;
};


console.log(`${find_duplicate([1, 4, 4, 3, 2])}`)
console.log(`${find_duplicate([2, 1, 3, 3, 5, 4])}`)
console.log(`${find_duplicate([2, 4, 1, 4, 4])}`)
