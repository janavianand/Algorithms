//Write a function that takes in an array and targetSum. The function should return an flattened and sorted array of numbers that when added in pairs returns the targetSum. If the input array is empty or no two numbers sums to targetSum then return empty array []

//--------------------------------------------------------------------
//Method 1

//Helper Function

function addCheck(a,b,check){
  if(check === (a+b)) {
    return [a,b]}
  else return []
}

//TwoSum

// function twoSum(array, targetSum) {
//   if(array.length === 0) return []
// 	let result = [];
// 	for(let i=0;i<array.length-1;i++){
// 		for(let j=i+1;j<array.length;j++){
//       result = result.concat(addCheck(array[i],array[j],targetSum))
// 		}
//   }
//   return result.sort((a,b)=>{return a-b})
// }

//time = O[n^2]


//--------------------------------------------------------------------

//--------------------------------------------------------------------
// Method 2

function twoSum(array,target){
  let map = {}
  let result = []
  for(let i=0;i<array.length;i++){
    if(map[array[i]]){
      result = result.concat([map[array[i]],array[i]])
    }else{
      let key = target-array[i]
      map[key] = array[i]
    }
  }return result.sort((a,b)=>{return a-b})
}

//time = O[n]

//--------------------------------------------------------------------
