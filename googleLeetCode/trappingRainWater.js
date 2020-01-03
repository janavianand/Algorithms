var trap = function(height) {

    if(height.length < 3) return 0

    let start = 0
    let end = height.length-1

    let maxleft = -1
    let maxright = -1

    let trappedwater = 0

    while(start<end){

        maxleft = height[start]>maxleft ? height[start] : maxleft
        maxright = height[end]>maxright ? height[end] : maxright

        if(maxright < maxleft){
            trappedwater += maxright - height[end]
            end -= 1
        }else{
            trappedwater += maxleft - height[start]
            start += 1
        }
    }
   return trappedwater
};
