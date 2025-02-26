//1. Student Management system using Object

const student={
    name:"Subhajit Mal",
    rollNumber:184,
    marks:{
        math:80,
        science:65,
        english:50,
        history:70
    },
    getAverageMarks:function(){
        let total=0, count=0;
        for (let mark of Object.values(this.marks)){
            total+=mark;
            count++;
        }
        return total/count;
    },
    checkPassorFail:function(){
        if(this.getAverageMarks()>40){
            return "Pass";
        }else{
            return "Fail";
        }
    }
}
console.log(student.getAverageMarks());
console.log(student.checkPassorFail());


//2.  Library system (Using nested Objects and Methods)

const library={
    books:{
        "Atomic Habits":{author:"James Clear",availableCopies:3},
        "The Alchemist":{author:"Paulo Coelho",availableCopies:5},
    },
    borrowBook:function(bookname){
        if(this.books[bookname].availableCopies>0){
            this.books[bookname].availableCopies--;
        }else{
            console.log(`${bookname} is not available`);
        }

    },
    returnBook:function(bookname){
        if (this.books[bookname]){
            this.books[bookname].availableCopies++;
        }else{
            console.log(`${bookname} is not available`);
        }
    }
};
library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);


//3. Generate Multiplication Table (For loop)

function generateTable(num,limit){
    for(let i=1;i<=limit;i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
generateTable(5,10)


//4. FizzBuzz (if-else condition)

function fizzbuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzbuzz(15);

//5. Reverse a string without using .reverse()

function reverstring(str){
    reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    return reverse;
}
console.log(reverstring("JavaScript"));

//6. Remove duplicats from an Array

function removeDuplicats(arr){
    uniquarr=[];
    for(let i=0;i<arr.length-1;i++){
        if(!uniquarr.includes(arr[i])){
            uniquarr.push(arr[i]);
        }
    }
    return uniquarr;
}
console.log(removeDuplicats([1,2,3,2,4,5,1,6]))

//7. Find the longest word in a sentence

function longestword(sentence){
    let words=sentence.split(" ");
    let longest="";
    for(word of words){
        if(word.length>longest.length){
            longest=word;
        }
    }
    return longest;
}
console.log(longestword("coding is amazing and challenging"));

//8. Custome Array Method (creating your own.map())

function mymap(arr,callback){
    result=[];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }
    return result;
}
function mycallabck(x){
    return x*2;
}
console.log(mymap([1,2,3,4],mycallabck));


//9. Find the first non-repeating character in a string

function firstuniqucharacter(str){
    let charcount={};
    for(let char of str){
        charcount[char]=(charcount[char]||0)+1;
    }
    for(let char of str){
        if(charcount[char]===1){
            return char;
        }
    }
    return null;
}
console.log(firstuniqucharacter("aabbcddce"));


//10. Nested Loop Challenge – Find:airs that Sum to a Target  

function findPairs(arr,target){
    let pairs=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return pairs;
}
console.log(findPairs([2,4,3,5,7,8,9],10));

//11. Implement a stack

let stack=[];
function push(value){
    stack.push(value);
}
function pop(value){
    if(stack.length>0){
        return stack.pop();
    }else{
        return null;
    }
}
function peek(){
    if(stack.length>0){
        return stack[stack.length-1];
    }else{
        return null;
    }
}
function isEmpty(){
    if(stack.length===0){
        return true;
    }else{
        return false;
    }
}
stack.push(10);
stack.push(20);
console.log(pop());     //20
console.log(peek());    //10
console.log(isEmpty())  //false


//12. Find Most Frequent Element in an Array 
function mostFrequentElement(arr){
    let frequency={};
    let maxcount=0;
    let mostfrequent=null;
    for (let num of arr){
        frequency[num]=(frequency[num]||0)+1;
        if(frequency[num]>maxcount){
            maxcount=frequency[num];
            mostfrequent=num;
        }
    }
    return mostfrequent;
}
console.log(mostFrequentElement([1,3,2,3,4,1,3,2,3,5]));