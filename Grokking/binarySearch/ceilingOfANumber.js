const search_ceiling_of_a_number = function(arr, key) {

  if(!arr.length || key > arr[arr.length-1]) return -1

  let start = 0
  let end = arr.length-1

  while(start <= end){

    let mid = Math.floor((start+end)/2)

    if(arr[mid] === key){
      return mid
    }else if(arr[mid] > key){
      end = mid-1
    }else {
      start = mid+1
    }

  }

  return start;
};


console.log(search_ceiling_of_a_number([4, 6, 10], 10))
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
console.log(search_ceiling_of_a_number([4, 6, 10], 17))
console.log(search_ceiling_of_a_number([4, 6, 10], -1))
