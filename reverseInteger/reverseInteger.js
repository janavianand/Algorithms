// Integer reverse function. Reverse the given integer. Max limit for the integer is -2^32 < x < 2^32

function reverse(x) {
  let rev = 0
  let flag = false
  if(x<0){
      flag = true;
      x = Math.abs(x)
  }
  while(x !=0){
      let temp = x % 10
      x = Math.floor(x/10)
      rev = rev * 10 + temp
  }
  if(flag && -rev > -(Math.pow(2,31))){
      return -rev
  }else if(!flag && rev < (Math.pow(2,31)-1)){
      return rev
  }else{
      return 0
  }
}
