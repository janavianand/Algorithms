const find_range = function(arr, key) {
  result = [- 1, -1];
  result[0] = bs(arr,key,false)
  if(result[0] === -1){
    return result
  }else{
    result[1] = bs(arr,key,true)
  }
  return result;
};

function bs(arr,key,flag){
  let index = -1
  let start = 0;
  let end = arr.length-1

  while(start<=end){
    let mid = Math.floor((start+end)/2)

    if(arr[mid] === key){
      index = mid
      if(flag){
        start = mid + 1
      }else{
        end = mid-1
      }
    }else if(arr[mid] > key){
      end = mid-1
    }else{
      start = mid+1
    }
  }
  return index
}


console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))
