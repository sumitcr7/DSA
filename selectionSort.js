function selectionSort(arr) {

    function swap(arr, i, j) {
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };


    for (let i = 0; i < arr.length; i++) {
        let min=i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[min]> arr[j]){
                min=j;
            }
        }
        if(min !== i) swap(arr, i, min );
        
    }

    return arr;
}


console.log(selectionSort([5,2,1,3]));
