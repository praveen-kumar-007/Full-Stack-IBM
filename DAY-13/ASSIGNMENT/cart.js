
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "<tr><th>Name</th><th>Price</th><th>Category</th><th>Image</th><th>Rating</th><th>Actions</th></tr>";
    cart.forEach((item, index) => {
        let row = cartContainer.insertRow();
        row.innerHTML = `<td>${item.name}</td><td>$${item.price}</td><td>${item.category}</td><td><img src="${item.image}" style="height:50px; width:50px;"></td><td>${item.rating}</td><td><button onclick="removeItem(${index})">Remove</button></td>`;
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    displayCart();
}

function backToProducts() {
    window.location.href = "index.html";
}

displayCart();
