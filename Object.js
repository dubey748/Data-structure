const obj=(data)=>{
    data.contact=12345;
    data.name="peter"

     for(x in data){
        console.warn(data[x])
     }

     console.log(Object.keys(data))
     console.log(Object.values(data))

    console.log(Object.entries(data))

}
console.log(obj({name:"ABhishek", age:24, tech:"dev"}))