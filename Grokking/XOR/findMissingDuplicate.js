function find_single_number(arr) {
  let x1 = 0
  for(let i=0;i<arr.length;i++){
    x1 = x1 ^ arr[i]
  }
  return x1;
}

console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));
