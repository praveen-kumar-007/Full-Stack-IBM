// //Asynchronous behaviour

// //setTimeout, setInterval

// //Microtask, macrotask

// let name="synchronous";
// console.log(name);

// let surName="code";
// console.log(surName);

// setTimeout(()=>{
//     console.log('setTimeout Task, Macrotask')
// },2000)

// setTimeout(()=>{
//     console.log('setTimeout Task, Macrotask-2')
// },3000)

// let myPromise=new Promise((resolve, reject)=>{
//     let flag=true;
//     if(flag){
//         resolve("Promise resolve succesfilly")
//     }else{
//         reject("Promise rejected")
//     }
// });
// console.log(myPromise);

// // Promise.then().catch(console.log("promise happend"));

// setTimeout(()=>{
//     console.log('setTimeout Task, Macrotask-3')
// },1000)

// queueMicrotask(()=>console.log('QueMicro Task, Macrotask'))
// console.log(name,surName)



// async function fatchData(){
//     let data=await fetch("https://fakestoreapi.com/products");

//     let ans=await data.json();

//     console.log(ans);
// }
// fatchData()

async function fetchData(){
    try{
        let data=await fetch("https://fakestoreapi.com/products");

        let ans=await data.json();

        console.log(ans);

    }catch(error){
        console.log(error);
    }
}
fetchData()



const fetchData=async()=>{
    try{
        let data=await fetch("https://fakestoreapi.com/products");

        let ans=await data.json();

        console.log(ans);

    }catch(error){
        console.log(error);
    }
}
fetchData()