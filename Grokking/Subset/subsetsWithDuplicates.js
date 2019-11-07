const find_subsets = function(nums) {
  let subsets = [];
  if(!nums.length){
      return subsets
  }
  nums.sort((a,b)=>a-b)
  subsets.push([],[nums[0]])
  for(let i=1;i<nums.length;i++){
    if(nums[i-1] === nums[i]){
      let temp = [...subsets[subsets.length-1]]
      temp.push(nums[i])
      subsets.push(temp)
    }else{
      helper(subsets,nums[i])
    }
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


console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`)
