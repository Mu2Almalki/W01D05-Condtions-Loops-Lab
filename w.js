let  A =[1,2,3,4,5,6,7];
let i=0;
while (i< A.length){
    switch(i){
        case 1: console.log("Sunday");
        break;
        case 2: console.log("Monday");
        break;
        case 3: console.log("Tusday");
        break;
        case 4: console.log("Wedensday");
        break;
        case 5:console.log("Thursday");
        break;
        case 6: console.log("Friday");
        break;
    } i++
  
}
// task 2
let n= 4;
if (n%2==0){
    console.log("even")
}else{
    console.log("odd")
}
// Task 3
let num = 85
if (num >= 90 ){
    console.log("A");
}else if(num >=80 || num <=89){
    console.log("B")
}else if(num >=70 || num <=79){
    console.log("C")
}else if(num >=60 || num <=69){
    console.log("D")
}else if(num <=59){
    console.log("F")
}
// Task 4
let y=2000
if(y%2==0){
    console.log("even")
}else{
    console.log("odd")
}
if(y%4==0 && y%100!==0 || y%400==0 ){
    console.log("This is Year")
}
// Task 5
let n1 = 0;
let n2 = 1;
for (let i = 0; i < 20; i++) {
  console.log(i);
  let x = n1 + n2;
  n1 = n2;
  n2 = x;
}
for (let m=1 ;m <=10; m++){
    console.log(m**2)
}
// 
for(let i=1; i<=5; i++){
    for(j=1;j<=i;j++){
        console.log(i*j)
    }
}
let u1 =1
while(u1<=20){
    console.log(odd);
    u1++
}
let num1=1
while(num1%2==0){
    console.log("tru");
    num1++;
}console.log("0");