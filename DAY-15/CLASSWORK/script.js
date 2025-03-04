
let DataCart = JSON.parse(localStorage.getItem("DataCart"));


console.log(DataCart)

function showData(data){
    document.getElementById("products").innerHTML="";
    data.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let rating = document.createElement("p");
        rating.innerText = el.rating;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", ()=>{
            deleteFun(el, index);
        })
        productBox.append(heading, img, name, price, rating, button);
        document.getElementById("products").append(productBox);
    });
}
showData(DataCart)
function deleteFun(el, index){
    // console.log("delete function is called");
    let deletedCartData = JSON.parse(localStorage.getItem("DataCart")) || [];
    deletedCartData.splice(index, 1);
    console.log(deletedCartData)
    localStorage.setItem("DataCart", JSON.stringify(deletedCartData));
    showData(deletedCartData);
}