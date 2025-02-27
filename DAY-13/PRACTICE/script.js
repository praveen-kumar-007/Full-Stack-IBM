// let arr=[1,9,5,4,7,85,"Subhajit",45,36,77];
// arr.forEach((el,idx)=>{
//     console.log(el,idx);
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }

// let output=arr.map((el)=>{
//     return el*2;
// });
// console.log(output);

// let output=arr.filter((el)=>{
//     return typeof el !=="number";
// });
// console.log(output);

// let output=arr.filter((el)=>{
//     return typeof el!=='string' && el%2==1 || el%3==0;
// });
// console.log(output);

// let arr=[1,9,5,4,7,85,45,36,77];
// let output=arr.reduce((el,acc)=>{
//     return el+acc;
// },100);
// console.log(output);

// let output=arr.reduce((el,acc)=>{
//     return el*acc;
// });
// console.log(output);

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
// let output=arr.filter((el,idx)=>{
//     return el%2==0 || el%5==0;          //2,4,5,85,45,36
// }).filter((el)=>{
//     return el%2==0 && el%3==0;         //36
// }).map((el)=>{
//     return el**2;                     //4,2025,1296
// }).reduce((el,acc)=>{
//     return el+acc;
// },2);
// console.log(output);


// let arr=[1,9,5,4,7,85,45,36,77];
// let output=arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(output);

// let ans=arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(ans);


let data=[
    {name:"watch",price:2000,rating:2},
    {name:"phone",price:19999,rating:4},
    {name:"shoe",price:1200,rating:5},
    {name:"car",price:200000,rating:5},
    {name:"suv",price:200000,rating:5},
    {name:"earphone",price:1900,rating:4.5}
];

// let output=data.sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(output);

// let output1=data.sort((a,b)=>{
//     return b.price-a.price;
// });
// console.log(output1)

// let ans=data.sort((a,b)=>{
//     if(a.name<b.name){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(ans);

// let ans=data.sort((a,b)=>{
//     return a.rating-b.rating;
// });
// console.log(ans);

let ans=data.sort((a,b)=>{
    return b.rating-a.rating;
});
console.log(ans);