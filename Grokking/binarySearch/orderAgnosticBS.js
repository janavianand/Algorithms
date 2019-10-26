const binary_search = function(arr, key) {
  if(!arr.length) return -1
  return arr[0]< arr[arr.length-1] ? bs(arr,key,0,arr.length-1) : bs(arr,key,arr.length-1,0);
};

function bs(arr,key,start,end){
  if(start === end-1 || start === end+1){
    if(arr[end] === key) return end
    else if(arr[start] === key) return start
    else return -1
  }
  let mid = Math.floor((start+end)/2)

  if(arr[mid] === key) return mid

  if(arr[mid] > key) return bs(arr,key,start,mid)

  else return bs(arr,key,mid,end)

}

console.log(binary_search([4, 6, 10], 10))
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10, 6, 4], 4))

/* Above solution is my solution. The given solution makes use of a flag for ascending or descending .*/
