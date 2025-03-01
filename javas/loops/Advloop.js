let n=4

for(let i=1; i<=n;i++){
   let str="#";
   let space=" "
   console.log(space.repeat(n-i)+str.repeat(i*2-1))
}
    
    
    


//2i-1 -2-1=1
//4-1  =3
//6-1 = 5
//8-1 =7

//for of loop

const arr=['a','b','c','d']
for (const i of arr) {
   console.log(i);
   
}

const str="hello hii "
for (const s of str) {
   console.log(s);
   
}
//Maps
const map=new Map();
map.set('a',1)
map.set('b',2)

for (const [key, value] of map) {
   console.log(key,':-',value);
   
}
//console.log(map)
const obj={

   'name':"pooo",
   'age':21
}


