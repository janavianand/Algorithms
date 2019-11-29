function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  // if(wholeArray.length === 0 ){

  // }else{
    let midpoint = Math.floor(wholeArray.length/2);
    let firstHalf = wholeArray.slice(0,midpoint);
    let secondHalf = wholeArray.slice(midpoint);
    return [firstHalf, secondHalf];
  //}
}

function merge(array){
  let firstHalf = array[0]
  let secondHalf = array[1]
  let result = []

  while(firstHalf.length>0 || secondHalf.length>0){
    let currA = firstHalf.shift();
    let currB = secondHalf.shift()
    if(currA<currB){
      result.push(currA)
      secondHalf.unshift(currB)
    }else if(currA>currB){
      result.push(currB)
      firstHalf.unshift(currA)
    }else {
        if(currB){
         result.push(currB);
        }else{
          result.push(currA)
        }
      }
    }
    return result
  }


function mergeSort(array){
  if(array.length < 2){
    return array
  }else{
    array = split(array);
    return merge([mergeSort(array[0]),mergeSort(array[1])])
  }
}
