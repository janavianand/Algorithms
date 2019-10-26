const findTargetSubsets = function(num, s) {
  if(!num.length) return 0
  return helper(num,s,0,0,{},0);
};

function helper(num,s,count,currentIndex,cache,temp){
  if(currentIndex >= num.length) return temp === s ? count+1 : count

  cache[currentIndex] = cache[currentIndex] || {}

  if(cache[currentIndex][temp] === undefined){
    cache[currentIndex][temp] = helper(num,s,count,currentIndex+1,cache,temp+num[currentIndex]) + helper(num,s,count,currentIndex+1,cache,temp-num[currentIndex])
  }

  return cache[currentIndex][temp]
}


console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);
