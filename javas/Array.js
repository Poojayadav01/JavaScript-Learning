const arr=[1,3,'hello']
console.log(arr[2])

/*array- array is non-primitive data type.
array are used stored a multiple data value in a single variable.
1> JavaScript arrays are resizable and can contain a mix of different data types.
2> javascript array are zero indexed.
*/
//array methods

/*arr.push(100)
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.includes('hello'))
console.log(arr.indexOf(1))
const newarr=arr.join();
console.log(newarr)
console.log(typeof(newarr))
const str=arr.slice(1,3)
console.log(str)

console.log(arr.splice(1,1))*/

console.log(Array.isArray("hiii"))// check the array or not-gives boolean value

console.log(Array.from("Hiiii"))//convert into

const letter=['a','b', 'c', 'd']
const letter2=['e', 'f', 'g']

/*letter.push(letter2)
console.log(letter)*/

/*const letter3=letter.concat(letter2)
console.log(letter3)*/

const letter3=[...letter, ...letter2]//spread operater
console.log(letter3)

const arr3=[1,3,7,[34,6,8,],9,8]
const arr4=arr3.flat()//convert multi-dimensional into 1-d array
console.log(arr4)

const arr5=[1,3,4,{name:'pooja',}]
console.log(arr5)





