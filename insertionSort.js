function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {

        const curr = arr[i];
        for (var j = i-1; j>=0 && arr[j]> curr; j--) {
            arr[j+1]= arr[j];
        };

        arr[j+1] = curr;
    }

    return arr;
}

console.log(insertionSort([5,2,3,1]))
