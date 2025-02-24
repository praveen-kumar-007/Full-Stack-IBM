//Section 1:Data Types & Length
let x="5";
let y=5;
console.log(x==y);
//Output will be true. 
//Because the '==' operator compair the value of x and y. In this case javascript automatically convert the value of x from string to number after that it compair and find bothe x and y is equal.
console.log(x===y);
//Output will be false.
//Because the '===' operator compair the value as well as the Datatype of x and y. Here the Datatype of x is string and y is number.


function lengthoflongword(words){
    return words.reduce((maxlength,word)=>Math.max(maxlength,word.length),0);
}
const words=["JavaScript","programming","Function","Hoisting"];
console.log(lengthoflongword(words))

//Section 2: let, const, var & scope
function testScope(){
    if (true){
        var a=10;
        let b=20;
        const c=30;
    }
    console.log(a); // 10
    //console.log(b); //ReferenceError
    //console.log(c); //ReferenceError
}
testScope();

//var is  globaly scope it can Accessible throughout the function. But let and const are block scope this are not Accessible outside the function.
const name="John";
function greet(){
    if(true){
        const message = "Hello " + name;
        console.log(message);
    }
}
greet();

//Section 3:Traditional Function vs. Arrow Function
const multiply=(a,b)=>a*b;

const obj={
    name:"Alice",
    sayHello:function(){
        setTimeout(()=>{
            console.log("Hello, "+this.name);
        },1000);
    }
};
obj.sayHello();

//Output will be Hello, Alice
//Because the arrow function inside setTimeout inherits this from sayHello, which refers to obj.

//Section 4:Hoisting
console.log(a);
var a=10;
//Output will be 10
console.log(b);
let b=20;
//Output will be undefined


console.log(square(5));
function square(n){
    return n*n;
}
console.log(double(4));
var double = function(n){
    return n*2;
};
//Problem:- TypeError, double is not a function
//Right
console.log(square(5));
function square(n){
    return n*n;
}
var double = function(n){
    return n*2;
};
console.log(double(4));

//Section 5:Operators (Arithmetic, Assignment, Comparison, Logical)
console.log(5+"5"); // Output 55

console.log(5-"3"); //Output 2

console.log(5*"2"); //Output 10

console.log("10"/2); //Output 5

console.log(10%"3"); //Output 1


// let x = 10;
x+=5;
x*=2;
x-=3;
x/=2;

console.log(5>3 && 10<20); //Output true

console.log(5<3 || 10>20); // Output false

console.log(!(5>3)); //Output false



//Section 6:Function Parameters vs Arguments

function sum(a,b,c=5){
    return a+b+c;
}
console.log(sum(2,3)); //Output 10
console.log(sum(2,3,10)); //Output 15


function all_sum(...args){
    return sum(args)
};
console.log(all_sum(5.2));
console.log(all_sum(2,1,5));
console.log(all_sum());


//Bonus: Hard Challenge Question

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


//Numbre Reversal 

function reversenumber(num){
    let isnegitive=num<0;
    num=Math.abs(num);
    let reverse =0;
    while(num>0){
        let digit=num%10;
        reverse=reverse*10+digit;
        num=Math.floor(num/10);
    }
    return isnegitive ? -reverse:reverse;
}
console.log(reversenumber(4321))
console.log(reversenumber(-576))

//custome length function
function customelength(str){
    let count = 0;
    for (let char of str){
        count++;
    }
    return count;
}
console.log(customelength("JavaScript")) //Output 10

//Avoid Hoisting Bug

console.log(add(2,3));
console.log(multiply(2,3));
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
};
//Replaced the function expression with a function declaration for multiply.

//Function that returns Another Function
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const count=counter();
console.log(count()); //Output 1
console.log(count()); //Output 2
console.log(count()); //Output 3