const QuickSort= (arr) => {
   if (arr.length < 2) return arr
   const left=[]
   const right=[];
   const pivot=arr[arr.length-1];
   for(let i=0; i<arr.length-1; i++){
    if(arr[i] < pivot){
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    }
   }
   return [...QuickSort(left), pivot, ...QuickSort(right)]
  }
  console.log(QuickSort([15,16,18,4,7,2,0,-8, -5]))