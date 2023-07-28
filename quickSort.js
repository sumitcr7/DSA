function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

function  pivot(arr, start=0, end = arr.length-1) {
    

    const pivot = arr[start];
    let swapIndex = start;

    for(let i=start+1; i<arr.length;i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
    
}



function quickSort(arr, start=0, end= arr.length -1 ) {
    if(start<end){

    const pivotIndex = pivot(arr, start, end);

    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex+1, end);
    }

    return arr;
    
    
    
}

console.log(quickSort([3, 0,9,7,5,6,3,2,1]));
