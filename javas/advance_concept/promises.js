const promiseOne=new Promise((resolve, reject)=>{
    // Do as asyns
    //BB Calls , Cryptography, network calls
    setTimeout(()=>{
        console.log("async task completed");
         resolve()
        
    },1000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
    
})


new Promise((resolve, reject)=>{
 setTimeout(()=>{
    console.log("async task2");
    resolve()
 },1000)
}).then(()=>{
    console.log("async task 2 completed");
    
})

const promiseThree=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("promised three");
    resolve({name:"pooja", email:"poo@gmail.com"})
  },1000)    
})

promiseThree.then((user)=>{
    console.log(user.email);
    
})



const promisefour=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:'pooja', email:'poo@gamil.com'})
        }else{
            console.log('ERROR: something want wrong');
            
        }
    },1000)
})

promisefour.then((user)=>{
    return user.email
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("promise is either resolved or rejected")

})



const promiseFive=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:'pooja', email:'poo@gamil.com'})
        }else{
            console.log('ERROR: javaScript something want wrong');
            
        }
    },1000)
})
 
async function consumePromise(){
  const response= await promiseFive
  console.log(response);
  
}

consumePromise()


/*async function allUserGet(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        console.log(data);
    
    } catch (error) {
       console.log("E:",error);
        
    }
    
}
allUserGet()
*/

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json
}).then((data)=>{
    console.log(data);
    
})