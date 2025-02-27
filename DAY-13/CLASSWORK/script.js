//Foreach

// let arr=[1,2,3,4,5,6,7,"Subhajit",8,9,10,11,12,"Subha",13,14,15,16]

// arr.forEach((el, index)=>{
//     console.log(el,index)
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }


//map

// let output=arr.map((el,index)=>{
//     return el**2;
// });
// console.log(output)


//filter

// let output=arr.filter((el,index)=>{
//     return typeof el!=="string" && el%2==0;
// }).map((el,index)=>{
//     return el**2;
// }).filter((el,index)=>{
//     return el%8===0;
// }).reduce((el,acc)=>{
//     return el+acc;
// },0)
// console.log(output)

//Reduce

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// let output=arr.reduce((el,acc)=>{
//     return el+acc;
// },0);
// console.log(output)


// let output=arr.map((el,index)=>{
//     return el;
// }).filter((el,index)=>{
//     return typeof el!=="string" && el%2==1;
// }).filter((el,index)=>{
//     return el%4==1;
// }).reduce((el,acc)=>{
//     return el*acc;
// },1);
// console.log(output);


//sorting

// let ans=arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(ans);


let data=[
    {name:"watch",price:2000,rating:2},
    {name:"phone",price:19999,rating:4},
    {name:"shoe",price:1200,rating:5},
    {name:"car",price:200000,rating:5},
    {name:"suv",price:200000,rating:5},
    {name:"earphone",price:1900,rating:4.5}
]
console.log(data);

let ans=data.sort((a,b)=>{
    if(a.name<b.name){
        return -1;
    }else{
        return 1;
    }
});
console.log(ans)

