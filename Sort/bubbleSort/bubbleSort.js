//Sort the given array using bubble sort

function bubbleSort(array){
  let flag = true;
  let n = array.length;

  while(flag){
    flag = false
    for(let i=0;i<n;i++){
      if(array[i] > array[i+1]){
        [array[i],array[i+1]] = swap([array[i],array[i+1]])
        flag = true;
      }
    }
    n -= 1
  }
  return array
}

//Helper Function
function swap([a,b]){
  return [b,a]
}
