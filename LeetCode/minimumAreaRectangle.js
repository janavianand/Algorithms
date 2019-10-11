/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  // Need 4 coordinates or more to proceed with the check
  if(points.length < 4) return 0

  points.sort((a,b)=>a[0]-b[0]);

  let area = Infinity

  for(let i=0;i<points.length-2;i++){

      let pair = [points[i][1]]
    //collect all the y coordinates with same x coordinate
      while(i<points.length-1 && points[i][0] === points[i+1][0]){
          pair.push(points[i+1][1])
          i += 1
      }
      // if only one pair then dont proceed to the check. continue the for loop
      if(pair.length === 1) continue

      let hash = []

      for(let k =i+1; k<points.length;k++){
          // if only one pair then continue the for loop. dont proceed to the check
          if(k<points.length-1 && points[k][0] !== points[k+1][0] && points[k-1][0] !== points[k][0]){
              hash = []
              continue
          }
          // if the y coordinate exists in the pair, add to hash
          if(pair.includes(points[k][1])){
              hash.push(points[k][1])
          }

          if(k === points.length-1 || points[k][0] !== points[k+1][0]){
              //if the next pair has different x coordinate or it reached the end of the loop, then its time to calculate teh area
              //calculate area only if we have a pair or more

              if(hash.length > 1){
                //find the pair that has minimum difference. we need only minimum area
                  hash.sort((a,b)=>a-b)
                  let match = []
                  let diff = Infinity
                  for(let i=1;i<hash.length;i++){
                      if(hash[i]-hash[i-1] < diff){
                          diff = hash[i]-hash[i-1]
                          match = [hash[i],hash[i-1]]
                      }
                  }

                  let temp = Math.abs(match[0]-match[1]) * (points[k][0]-points[i][0])
                  area = area > temp ? temp : area
              }
              // clear the hash to move on to the next fresh pair
              hash = []
          }

      }
  }
  return area === Infinity ? 0 : area
};
