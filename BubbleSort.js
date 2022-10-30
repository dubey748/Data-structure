const BubbleSort=(arr)=>{
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]>arr[j+1]){
            let tmp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=tmp;
        }
    }
}
return arr;
}
console.log(BubbleSort([100,5,8,-1,1,2,6,11,7]))