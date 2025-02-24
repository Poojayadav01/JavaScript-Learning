//const user=new Object()
const user={}
user.id="12"
user.name="sam"
user.email="sam@gmail.com"

//console.log(user)

const user1={
    fullname:{
        userfullname:{
            firstname:"sam",
            lastname:"malhotra"
        }
    }
}

//console.log(user1.fullname.userfullname.firstname)

//const user3=Object.assign({}, user, user1)
const user3={...user, ...user1}
console.log(user3)

console.log(Object.keys(user3))
console.log(Object.values(user3))


const course={
    name:"javascript",
    price:1000,
    courseInstructor:"hitesh"
}
const {name, price,courseInstructor:inst}=course
console.log(inst)