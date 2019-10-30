const search_next_letter = function(letters, key) {
  if(letters[letters.length-1] < key){
    return letters[0];
  }
  return helper(letters,key,0,letters.length-1)
};

function helper(arr,key,start,end){
  if(start === end){
    return arr[start+1]
  }
  let mid = Math.floor((start+end)/2)
  if(arr[mid] === key){
    return arr[mid+1]
  }else if(arr[mid] > key){
    return helper(arr,key,start,mid-1)
  }else{
    return helper(arr,key,mid+1,end)
  }
}

console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
