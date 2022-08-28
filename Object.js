//An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type

//To retrieve a value, you can use the the corresponding key. This can be achieved using the dot notation or bracket notation

//An object is not an iterable. You cannot use it with a for of loop

const obj = {
  name: "ABhishek Dubey",
  age: 23,
  tech: "JavaScript"
}

console.log(obj)
console.log(typeof (obj))

// To acess the element using Dot notaion
console.log(obj.age)

// To acess the element using Bracket notaion
console.log(obj["name"])

obj.Hobby = "Cricket"
obj.Sal = 35000
obj.data = "Collection"
console.log(obj)
console.log(obj.Hobby)

// To delete properties from obj use Delete oprater

delete obj.Hobby
console.log(obj)


// we can add function also as properties 
const obj1 = {
  name: "ABhishek Dubey",
  age: 23,
  tech: "JavaScript",
  fun: ((a, b) => {
    return a + b
  }),
  funName: function() {
    console.log(this.name)
  }
}
console.log(obj1.fun(5, 10))
obj1.funName()


//More features are Object.keys(), Object.values(), Object.entries()

//Object.keys() - method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.


const obj2 = {
  name: "ABhishek Dubey",
  age: 23,
  tech: "JavaScript",
  fun: ((a, b) => {
    return a + b
  }),
  funName: function() {
    console.log(this.name)
  }
}

console.log(Object.keys(obj2))

//Object.values()

const obj3 = {
  name: "ABhishek Dubey",
  age: 23,
  tech: "JavaScript",
  fun: ((a, b) => {
    return a + b
  }),
  funName: function() {
    console.log(this.name)
  }
}

console.log(Object.values(obj3))

//The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

for (const [key, value] of Object.entries(obj3)) {
  console.log(`${key}: ${value}`);
}