const merge = (arr1,arr2)=>{


    let i=0,j=0;

    const final =[];
    while(i< arr1.length || j< arr2.length){

        if(i === (arr1.length - 1) ){
            final.push(...arr2.slice(j));
            break;
        }
        if(j === (arr2.length - 1) ){
            final.push(...arr1.slice(i));
            break;
        }
        
        if(arr1[i]< arr2[j]){
            final.push(arr1[i]);
            i++;
        }else {
            final.push(arr2[j]);
            j++;
        }
        
    }

    return final;
}


console.log(merge([1,23],[2,34,45,69]))
