const can_partition = function(num) {

  if(!num.length) return false

  let sum = num.reduce((a,b)=>a+b,0)

  if(sum%2) return false

  let cache = {}

  return helper(num,0,sum/2,cache);
}
  function helper(num,currentIndex,sum,cache){

    if(num.length <= currentIndex) return false

    cache[currentIndex] = cache[currentIndex] || {}

    if(cache[currentIndex][sum] === undefined) {
      if(num[currentIndex] === sum) return true
      cache[currentIndex]={}
      cache[currentIndex]={[sum] : helper(num,currentIndex+1,sum,cache) || helper(num,currentIndex+1,sum-num[currentIndex],cache)}

      return cache[currentIndex][sum]

    }

    else{
      return cache[currentIndex][sum]
    }
  }

/*cahce={
  currentIndex:{sum:false}
}*/
console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`)
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`)
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`)
