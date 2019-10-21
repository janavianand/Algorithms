const can_partition = function(num) {

  let sum = num.reduce((a,b)=>a+b,0)
  if(num.length === 0 || sum%2) return false
  return helper(num,0,sum/2);
};

function helper(num,currentIndex,sum){
  if(currentIndex >= num.length) return false

  if(num[currentIndex] === sum) return true

  return helper(num,currentIndex+1,sum) || helper(num,currentIndex+1,sum-num[currentIndex])

}

console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`)
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`)
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`)
