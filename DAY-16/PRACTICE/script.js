let Name="Subha";
console.log(Name);

let surName="Jit";
console.log(surName);

setTimeout(()=>{
    console.log("SetTimeOut, MacroTask-1");
},2000);

setTimeout(()=>{
    console.log("SetTimeOut, MacroTask-2");
},3000);

let myPromise=new Promise((resolve,rejec)=>{
    let flag=true;
    if(flag){
        resolve("Promise resolve succesfully");
    }else{
        rejec("Promise rejected");
    }
});
console.log(myPromise);

setTimeout(()=>{
    console.log("SetTimeOut, MacroTask-3");
},1000);

queueMicrotask(()=>{
    console.log("QueueMicroTask, MicroTask");
});

queueMicrotask(()=>{
    console.log("QueueMicroTask, MicroTask-2");
});

queueMicrotask(()=>{
    console.log("QueueMicroTask, MicroTask-1");
});

console.log(Name,surName);


async function fetchData(){
    let data=await fetch("https://fakestoreapi.com/products");

    let ans=await data.json();
    console.log(ans);
}
fetchData()

async function fatchData() {
    try{
        let data=await fetch("https://fakestoreapi.com/products");
        let ans=await data.json();
        console.log(ans);
    }catch(error){
        console.log(error);
    }
}
fatchData();