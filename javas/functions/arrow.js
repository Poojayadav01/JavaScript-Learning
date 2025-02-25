const user={
    username:"Pooja",
    email: "poo@gmail.com",
    welcomeMess:function(){
        console.log(`${this.username}, Welcome to Website`)
        //console.log(this)
    }
}
/*user.welcomeMess()
user.username="khushi"
user.welcomeMess()
user.username="kiran"
user.welcomeMess()
user.username="Vishnu"
user.welcomeMess()*/

//console.log(this)
const fun=()=>{
    const user="poo"
    console.log(this.user)
}
//fun()

const add=(num1, num2)=>{
    return num1+num2
}
//console.log(add(3,4));

const add1=(num1, num2)=> num1+num2
console.log(add1(2,3));

const add2=(num1,num2)=>(num1-num2)
console.log(add2(8,2));

const objPrin=()=>console.log({user:'poo'})

objPrin()



