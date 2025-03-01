const arr=[1,2,3,4,5,6]

//const newarr=arr.map((num)=> num+10)
//map used when we need  perform operation on the array
const newarr=arr
.map((num)=>num*10)
.map((num)=>num+2)
.filter((num)=>num>=30&&num<=50)
console.log(newarr);
