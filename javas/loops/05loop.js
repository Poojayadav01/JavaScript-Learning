const  arr=[1,3,4,5,6,7,8,9]
/*const newarr=arr.filter((num)=>{
    return num>5
})
console.log(newarr)*/
/*const newarr=[]
arr.forEach((num)=>{
    if(num>5){
      newarr.push(num)
    }
})

console.log(newarr);*/

const books=[
    {title:"book one", genre:"fiction", publish:1980, edition:2004},
    {title:"book two", genre:"Non-fiction", publish:1970, edition:2000},
    {title:"book three", genre:"science", publish:1988, edition:2001},
    {title:"book four", genre:"fiction", publish:1990, edition:2009},
    {title:"book five", genre:"history", publish:1981, edition:2007},


]

//const newbook=books.filter((book)=> book.genre==='fiction' || book.publish>=1980)
let newbook=books.filter((book)=> book.genre==='fiction')
newbook=books.filter((book)=>book.publish>=1980)

console.log(newbook);




