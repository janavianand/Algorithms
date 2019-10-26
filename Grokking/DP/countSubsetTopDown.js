const countSubsets = function(num, sum) {

  return helper(num,sum,0,0,{})
};

function helper(num,sum,currentIndex,count,cache){

  if(num.length <= currentIndex) return count

  if(num[currentIndex] === sum) return count+1

  cache[currentIndex] = cache[currentIndex] || {}

  if(cache[currentIndex][sum] === undefined){
    cache[currentIndex][sum] = helper(num,sum-num[currentIndex],currentIndex+1,count,cache) + helper(num,sum,currentIndex+1,count,cache)
  }
  return cache[currentIndex][sum]
}

console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);
