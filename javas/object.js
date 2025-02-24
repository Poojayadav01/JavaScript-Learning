//singleton
//Object.create

//object literal
const sym=Symbol("mykey")
const jsuser={
    name:"pooja",
    [sym]:"key",
    "full name":"pooja yadav",
    email:"ppp@gmail.com",
    address:'raipur'
}
console.log(jsuser.name)
console.log(jsuser["full name"])
console.log( typeof jsuser[sym])
console.log(jsuser)

//Object.freeze(jsuser)
jsuser.name="poo"
console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello")
}

jsuser.greeting2=function(){
    console.log(`hello ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greeting2())