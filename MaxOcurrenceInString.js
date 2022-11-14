const max=(str)=>{
let strObj={};
let maxKey='';
for(let i=0;i<str.length;i++){
    // console.warn(str[i])
    let key=str[i];
    if(!strObj[key]){
        strObj[key]=0;
    };
    strObj[key]++;
    if(maxKey == '' || strObj[key]>strObj[maxKey] )
    {
        maxKey=key;
    }
}
console.log(strObj)
return maxKey;

}
console.warn(max("hellllllloooooooooooooooooooooooooooooo"))
