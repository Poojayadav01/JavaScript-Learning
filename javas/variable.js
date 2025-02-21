const accountId=1234
let email="poo@gmail.com"
var accountPass="0987"


//accountId=12// const are not allowed to change

email="p@gmail.com"
accountPass='0987'
/* prefer not to use var
because of issue in block scope and functional scope */
console.table([accountId, email, accountPass])