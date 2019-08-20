//Selection Sort
function selectionSort(array) {
	for(let i=0;i<array.length-1;i++){
		let temp = 0;
		let flag = false
		for(let j=i+1;j<array.length;j++){
			if(array[i]>array[j]){
				if(flag){     //check if temp already has a value and update only if the temp value is lesser than array[j] value
					if(array[temp] > array[j]){
						temp = j
					}
				}else{      // if temp has no value then store array[j] and set the flag
					temp = j
					flag = true
				}
			}
    }
    //update the value only if the flag is set
		if(flag){
			[array[i],array[temp]] = swap(array[i],array[temp])
		}
	}
	return array
}
//Helper Function
function swap(a,b){
	return [b,a]
}
