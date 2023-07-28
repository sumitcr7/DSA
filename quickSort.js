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

    console.log(arr)
    return swapIndex;
    
}

console.log(pivot([8,2,4,1,5,8,0]))
