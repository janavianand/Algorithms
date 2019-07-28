//Given an array, count the number of strictly increasing sub-arrays in it.


function IncreasingSubArray(array){
  let count = 0;
  for(let i=0;i<array.length-1;i++){
    let increase = 0
    let start = i
    for(let j=i+1;j<array.length;j++){
      if((array[i]<array[j]) && (array[j-1]<array[j])){
        count = 1+increase+count
        increase += 1
        if(i===start && j===array.length-1){
          return count
        }
      }else{
        i = j-1
        j = array.length
      }
    }
  }
  return count
}

console.log(IncreasingSubArray([1,2,4,4,5]))
console.log(IncreasingSubArray([1,3,2]))
console.log(IncreasingSubArray([5,4,3,2,1]))
console.log(IncreasingSubArray([1,2,4,5]))
console.log(IncreasingSubArray([1,2,4,5,3,2]))
