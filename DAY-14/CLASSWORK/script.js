//create a custom function that take input as an array and return the sorted array
//input=[3,6,9,2,56,34,98,56,23,12,90]
//output=[2,3,6,9,12,23,34,56,56,90,98]

// function margesort(arr){
//     if (arr.length<=1){
//         return arr;
//     }
//     let mid=Math.floor(arr.length/2);
//     let left=margesort(arr.slice(0,mid));
//     let right=margesort(arr.slice(mid));
//     return margesort(left,right);
// }
// function marge(left,right){
//     let sortarr=[];
//     let i=0;j=0;
//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//             sortarr.push(arr[i]);
//             i++;
//         }else{
//             sortarr.push(arr[j]);
//             j++;
//         }
//     }
//     return sortarr.concat(sortarr[i].concat(sortarr[j]));
// }
// console.log(margesort([3,6,9,2,56,34,98,56,23,12,90]))


let data = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQI2yaBrsOhg60x5FPzVUiINeZVKQdCQn58PkSVcFW-htMNxKHmDlWa2sHDc814ubs5q8zKmxyxZDaJv9EfY2zUeIZTfe2NLXxmpz3xKDLa3oUoybYwyZbD"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdeYUxNZtGDEGOk6UWww1m60ZKYwb9UcLbe-6Wc4sq6a5rMK5es6xPtksq6Eb2KrsxFJk9vI-2BQyW4QPOyGXaG6bZ-wXZjfqKhiMJVRGCmOKoXzzwQHslBQ"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd3CcNlyz7VcYXI76DnDqd8VFFZVosP2X-R_bT67iN2OrtS5uQPjju96dTtF_FOhaotYqYSkoCOgS5SqTLrd0CISCtvyMZ2dViDe6cAY7ESGZbpW70As2WKDE"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg"
    },
    {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/8db7a22fd8a14673a4d95c38624139ca_9366/Galaxy_7_Running_Shoes_Black_ID8765_HM1.jpg"
    },
    {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://m.media-amazon.com/images/I/81WIcyHQ7oL.AC_UY1100.jpg"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://cdn.cinemacenter.in/image/cache/catalog/images/0021038_sony-zv-1-digital-camera_500-500x500.jpeg.webp"
    },
    {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://m.media-amazon.com/images/I/71qpXciYP1L.jpg"
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/8/M8022BR1V_1_lar.jpg"
    },
    {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/850/1000/l4bn5ow0/bottle/6/c/9/1000-bpa-free-drinking-water-bottle-with-time-marker-straw-for-original-imagf8npfztmb3qg.jpeg?q=20&crop=false"
    },
    {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAvU3-uz13LNVhjc6HCKGVREFiseFmVfRHA&s"
    },
    {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://m.media-amazon.com/images/I/51Q11RNy8dL.AC_UF894,1000_QL80.jpg"
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjVmOTA4NDkyMzFlMDEyMGMzMjViN2UzLXBvcnRhYmxlLWNoYXJnZXItcG93ZXItYmFuay0yNTgwMG1haC5qcGc.jpg"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://m.media-amazon.com/images/I/51yBOvORkPL.jpg"
    },
    {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QL_OWaxEwuyQMUrYgVwoV9eTsv_hlzcWrg&s"
    },
    {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/850/1000/kgjqefk0/neck-pillow-eye-shade/z/b/b/travel-neck-pillow-unisex-u-shaped-micro-fibre-soft-cushions-original-imafwr8agyk7dt8c.jpeg?q=90&crop=false"
    },
    {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://www.niviasports.com/cdn/shop/files/1_f74628ac-df66-4c71-b112-fd8253ce175a.jpg?v=1716799881"
    },
    {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://lorenzindia.com/cdn/shop/files/MK-1065A_1-PhotoRoom.png?v=1695797189"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://m.media-amazon.com/images/I/61oIAKY9s1L.jpg"
    },
    {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://www.hijibizi.in/cdn/shop/products/WhatsAppImage2022-11-02at22.20.19_1.jpg?v=1667718907&width=1445"
    }
];

function showData(array){

    array.forEach((el ,index) => {
        console.log(el)
        let box=document.createElement("div");
        box.className="parentBox";
    
        let h2=document.createElement("h2");
        h2.innerText=el.name;

        let p1=document.createElement("p");
        p1.innerText=el.category;

        let p2=document.createElement("p");
        p2.innerText=el.price;

        let p3=document.createElement("p");
        p3.innerText=el.rating;

        let img=document.createElement("img");
        img.src=el.image;

        box.append(h2,img,p1,p2,p3);
        document.getElementById("products").append(box);
    });
    
}
showData(data)