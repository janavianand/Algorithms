const find_subsets = function(nums) {
  let subsets = [];
  if(!nums.length){
    return subset
  }
  subsets.push([]);
  for(let i=0;i<nums.length;i++){
    helper(subsets,nums[i])
  }
  console.log(subsets)
  return subsets;
};

function helper(subset,num){
  let sublength = subset.length
  for(let i=0;i<sublength;i++){
    let temp = [...subset[i]]
    temp.push(num)
    subset.push(temp)
  }
}

console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)
