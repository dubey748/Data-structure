const arr = [1, 2, "Hi", NaN, true]

console.log(arr)

//Add element in last index use  push method
arr.push(false)
console.log(arr)

// To add element in first index we use unshift

arr.unshift("I am first element inserted by unshift")
console.log(arr)


// To pop element from the last use pop method
arr.pop()
console.log(arr)

// To pop element from the first use shift method

arr.shift()
console.log(arr)

// to irretate all itemin array we can use  for of loop 
for (const i of arr) {
  console.log(i)
}


// map, filter, reduce, slice, splice, concat
// map function create a new array and return 

const a = [1, 22, 4, 5]
const double = a.map((num, i) => {
  console.log(i);
  console.log(num * 2);

})
console.log(a, double)

// reduce function set first parameter as index[0] in first time and treted like privious value  always and next parameter as current state from the index[1] 
const b = [1, 22, 4, 5]
const h = b.reduce((first, current, index) => {
  console.log(index)
  return first + current
})
console.log(h)

// merge two array using concat
const c = [1, 2, 3]
const d = [4, 5]
const concatinate = c.concat(d)
console.log(c)
console.log(d)
console.log(concatinate)
