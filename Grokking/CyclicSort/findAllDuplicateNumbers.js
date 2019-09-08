const find_all_duplicates = function(nums) {
  duplicateNumbers = [];

  for(let i=0;i<nums.length;i++){
    while(nums[i] !== nums[nums[i]-1]){
      let temp = nums[i]
      let temp1 = nums[nums[i]-1]
      nums[i] = temp1
      nums[temp-1] = temp
    }
  }
  for(let i=0;i<nums.length;i++){
    if(nums[i] !== i+1){
      duplicateNumbers.push(nums[i])
    }
  }
  return duplicateNumbers;
};


console.log(`${find_all_duplicates([3, 4, 4, 5, 5])}`)
console.log(`${find_all_duplicates([5, 4, 7, 2, 3, 5, 3])}`)
