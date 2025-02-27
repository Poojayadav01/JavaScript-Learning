
const month=3

switch (month) {
    case 1:
        console.log("january");
         break;
    case 2:
        console.log("Febuary");
         break;
    case 3:
        console.log("March");
         break;
    case 4:
        console.log(April);
         break;
    case 5:
        console.log("May");
         break;
    case 6:
        console.log("June");
             break;
    
        
    default:
        break;
}


//falsy value:- false, 0, -0, bigInt 0n, null, undefined, NaN
//truthy value:- "0", "false", [], {}, function(){}

//check the array is empty or not
/*const arr=[]
if(arr.length==0){
    console.log("Array is empty")
}*/

//check object is empty

/*const obj={}
if(Object.keys(obj).length==0){
    console.log("Object is Empty")
}*/

/*
false==0//true
false==''//true
0==''//true*/

//Nullish coalesing operater(??) null undefined

let val1;
//val1=5??6            ==o/p-5
//val1=null??6         ==o/p-6
//val1=undefined??15   //o/p-15
val1=null??2??10       //o/p-2
console.log(val1);


//Tenary Operater
// condition ?True;false

const milkPrice=90;
milkPrice<=80?console.log("milk price is less then 80"):console.log("more then 80");

