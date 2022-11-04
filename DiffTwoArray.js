const DiffTwoArray= (arr1, arr2) => {
    const union =[];
    for(const i of arr1){
        if(!union.includes(i)){
            union.push(i)
            
        }
    }
    for(const i of arr2){
        if(!union.includes(i)){
            union.push(i)
           
        }
    }
    const diff=[];
    for(currenEl of union){
        if(arr1.includes(currenEl) && !arr2.includes(currenEl)){
            diff.push(currenEl);
        }
        else if (arr2.includes(currenEl) && !arr1.includes(currenEl)){
            diff.push(currenEl);
        }
    }
    return diff
  }
  console.log(DiffTwoArray([1, 2, 3, 5], [1,2,3,4,5]))