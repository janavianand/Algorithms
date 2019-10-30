const search_min_diff_element = function(arr, key) {
  return helper(arr,key)
};

function helper(arr,key){
  let diff = Infinity
  let start = 0
  let end = arr.length-1

  while(start <= end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid] === key){
      return arr[mid]
    }else if(arr[mid]>key){
      end = mid-1
    }else{
      start = mid+1
    }
  }

  return (arr[start] - key) < (key - arr[end]) ? arr[start] : arr[end]
}
