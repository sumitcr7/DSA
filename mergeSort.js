const merge = (arr1,arr2)=>{


    let i=0,j=0;

    const final =[];
    while(i< arr1.length && j< arr2.length){ 
        if(arr1[i]< arr2[j]){
            final.push(arr1[i]);
            i++;
        }else {
            final.push(arr2[j]);
            j++;
        }
    }

    while(i< arr1.length){
        final.push(arr1[i]);
        i++;
    }

    while(j< arr2.length){
        final.push(arr2[j]);
        j++;
    }

    return final;
}


const mergeSort = (arr)=>{

    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);

    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left,right);
    
}

console.log(merge([1,23],[2,34,45,69]));
console.log(mergeSort([1,23,2,4,1,35,32,1,1]));
