var unit=700
var bill=0
var rem=0

if(unit>400){
    rem=unit-400;
    bill=bill+rem*13;
    unit=unit-rem
}
 if(unit>200 && unit<=400){
    rem=unit-200
    bill=bill+rem*8
    unit=unit-rem
}
 if(unit>100 && unit<=200){
    rem=unit-100
    bill=bill+rem*6
    unit=unit-rem

}
 if(unit>0 && unit<=100){
    rem=unit;
    bill=bill+rem*4
    
}

console.log(bill)