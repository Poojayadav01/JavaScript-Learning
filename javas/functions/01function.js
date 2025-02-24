function hello(a){
    console.log(a)
}

//hello("kiran")

function userlogin(username='poo'){
    if(!username){
        console.log("please Enter a username")
        return
    }
    return `${username}  logged in`
}

//console.log(userlogin('kiran'))

function calculateCartPrice(...num){
    return num
}

//console.log(calculateCartPrice(200, 100, 900))

const user={
    username:"pooj",
    email:'poo@gmail.com'
}

function handleUser(anyobject){
    const {username:user ,email}=anyobject
    console.log(`My name is ${user} and my email is  ${email}`)
}

//handleUser(user)

const num=[1,4,5,6]

function printSecondElement(num1){
    return num1[1]
} 
console.log(printSecondElement(num))