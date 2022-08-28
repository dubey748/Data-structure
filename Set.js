/* Set - A set is a data structure that can hold a collection of values. The values however must be unique
Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set.
Sets are dynamically sized. You don't have to declare the size of a set before creating it.
Sets do not maintain an insertion order Sets are iterables.
They can be used with a for of loop */

//Set vs Array

/*Arrays can contain duplicate values whereas Sets cannot.
Insertion order is maintained in arrays but it is not the case with sets.
Searching and deleting an element in the set is faster compared to arrays*/



const set = new Set([1, 2, 3])

// To add value
set.add(4)

// cannt add duplicate value
set.add(4)

// To delete value
set.delete(2)

// Find the size of the Set
console.log(set.size)

for (const i of set) {
  console.log(i)
}

//To check value exits or not use has() method

console.log(set.has(4))

//  to delete all element from the set  use  clear()

set.clear()
console.log(set)


