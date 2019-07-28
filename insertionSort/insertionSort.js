//Insertion Sort
function insertionSort(array) {
	for(let i=1;i<array.length;i++){
		for(let j=i;j>0;j--)
		if(array[j-1] > array[j]){
			[array[j-1],array[j]] = swap(array[j-1],array[j])
		}
	}
	return array
}
//Helper Function
function swap(a,b){
	return [b,a]
}
