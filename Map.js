//Map

/*
A map is an ordered collection of key-value pairs. 
Both keys and values can be of any data type.
To retrieve a value,you can use the the corresponding key.
Maps are iterables. They can be used with a for of loop
*/

// Map vs Object
/*
Objects are unordered whereas maps are ordered.
Keys in objects can only be string or symbol type whereas in maps, they can be of any type.
An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default.
Objects are not iterables where as maps are iterables.
The number of items in an object must be determined manually where as it is readily available with the size property in a map.
Apart from storing data,you can attach functionality to an object whereas maps are restricted to just storing data 
*/

const map = new Map([["a", 1], ["b", 2], ["c", 3]])

// To  add new value
map.set("d", 4)

// To  delete new value
map.delete("d")

// To check key exits or not

console.log(map.has("d"))

// Find size of Map

console.log(map.size)

// To delte all the key value pair 

map.clear()

for (const [key, value] of map) {
  console.log(`${key} : ${value}`)
}


////////////////////////////////////////////////////////////////////////////////////////////////////
//Updated 
let map = new Map([
  ["name", "anil"],
  ["age", 23],
  [21, 'mark'],
  [true, 'boolean']

  
]);
map.set('colour', 'red')
//map.clear()  //to clear all data from map
// can apply to loop for of and forEach

//for(const i of map){
//console.log(i)
//}

map.forEach((val, key)=>{
    console.log(val)
    console.log(key)
})
//console.warn(map);
//console.log(map.size)
//console.log(map.has(21)) // to find key 
//console.log(map.get(21)) // to find value of perticuler key





