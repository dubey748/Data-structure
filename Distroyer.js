/*function Seek(arr){

return arr.filter(i=>![...arguments].slice(1).includes(i))

 //const fltarr=arr.filter(i=>!argArr.includes(i))
 /*for(const i of arr){
    if(!argArr.includes(i)){
        fltarr.push(i)
    }
 }*/
 //return fltarr
 //} 
   const Seek=(...arr)=>{
   return arr[0].filter(i=> !arr.slice(1).includes(i))
   }
   console.log(Seek([1, 2, 3 ,4], 1, 2)) 