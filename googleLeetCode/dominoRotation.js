var minDominoRotations = function(A, B) {
  if(A.length < 2) return 0

  let rotations = rotate(A[0],A,B)

  if(rotations !== -1 || A[0] === B[0]) return rotations

  else return rotate(B[0],B,A)
};

function rotate(value,A,B){
  let acount = 0
  let bcount =0
  for(let i=0;i<A.length;i++){
      if(A[i] !== value && B[i]!== value){
          return -1
      }else if(A[i] !== value){
          acount += 1
      }else if(B[i] !== value){
          bcount += 1
      }
  }
  return Math.min(acount,bcount)
}
