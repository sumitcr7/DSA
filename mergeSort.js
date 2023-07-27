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


console.log(merge([1,23],[2,34,45,69]))
