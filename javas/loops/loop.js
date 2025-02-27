//for loop
const array=[1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
    
}

for(let i=2;i<=10;i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} =`, i*j);
        
    }
    console.log("\n");
    
}

// break , continue 

for(let i=1; i<=10; i++){
    if(i==5){
        console.log("detected 5");
        break
    }
    console.log(`value of i is ${i}`);
    
}


//continue

for(let i=1; i<=10; i++){
    if(i==5){
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${i}`);
    
}



// while loop

let i=0;
while(i<=10){
    console.log(i);
    i+=2
    
}

let arr=[1,2,3,4]
let j=0
while(j<arr.length){
    console.log(arr[j]);
    j+=1
}