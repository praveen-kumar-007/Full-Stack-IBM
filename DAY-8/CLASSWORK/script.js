// document.write("hello world")
document.getElementById("parent").style.border="1px solid black";
document.getElementById("parent").style.height="200px";
document.getElementById("parent").style.backgroundColor="blue";

let element=document.createElement("button")
element.innerText="submit";
element.style.backgroundColor="red";
element.style.padding="10px";
document.getElementById("parent").append(element)


// let variable = 10
// console.log(variable)
// variable=15
// console.log(variable)

// const variable = 10
// console.log(variable)
// variable=15
// console.log(variable)


console.log(variable)


function myfunction(){
    var variable = 10
    console.log(variable)
}
myfunction()