function quickSort(array) {
  // Write your code here.
	helper(array,0,array.length-1)
	return array
}

function helper(arr,left,right){
	if(left >= right){
		return
	}

	let pivot = left
	let start = left + 1
	let end = right

	while(start <= end){
		if(arr[start] > arr[pivot] && arr[end]<arr[pivot]){
			swap(arr,start,end)
		}

		if(arr[start] <= arr[pivot]){
			start += 1
		}

		if(arr[end] >= arr[pivot]){
			end -= 1
		}
	}
	swap(arr,pivot,end)
	// console.log(arr)
	let leftLenGreater = end-1-left > right-end+1

	if(leftLenGreater){
		helper(arr,end+1,right)
		helper(arr,left,end-1)
	}else{
		helper(arr,left,end-1)
		helper(arr,end+1,right)
	}
}

function swap(arr,pivot,i){
	[arr[pivot],arr[i]] = [arr[i],arr[pivot]]
}
