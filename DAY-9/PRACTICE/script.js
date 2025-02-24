// console.log(5+"5");
console.log(5-"3");
console.log(5*"2");
console.log("10"/2);
console.log(10%"3");


// let x = 10;
// x=x+5;
// x=x*2;
// x=x-3;
// x=x/2;

console.log(5>3 && 10<20);
console.log(5<3 || 10>20);
console.log(!(5>3));


function sum(a,b,c=5){
    return a+b+c;
}
console.log(sum(2,3));
console.log(sum(2,3,10));


function outer(){
    let count=0;
    return function inner(){
        count++;
        console.log(count);
    };
}
const counter1=outer();
counter1(); //Output 1
counter1(); //Output 2
const counter2=outer();
counter2(); //Output 1
counter2(); //Output 2

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const count=counter();
console.log(count());
console.log(count());
console.log(count());