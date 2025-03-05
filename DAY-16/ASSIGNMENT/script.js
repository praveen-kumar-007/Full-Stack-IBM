
const API_PRODUCTS = "https://fakestoreapi.com/products";
const API_USERS = "https://fakestoreapi.com/users";

let allProducts = [];
let allUsers = []; 

// Debounce function
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

// Fetch & display products
async function fetchProducts() {
    try {
        const res = await fetch(API_PRODUCTS);
        allProducts = await res.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Display products
function displayProducts(products) {
    const container = document.getElementById("products-container");
    if (!container) return;
    container.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" width="100">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <p>${product.category}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        </div>
    `).join("");
}

// Navigate to product details
function viewProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product-detail.html";
}

// Fetch & display users
async function fetchUsers() {
    try {
        const res = await fetch(API_USERS);
        allUsers = await res.json();
        displayUsers(allUsers);
        populateCityFilter(allUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Display users
function displayUsers(users) {
    const container = document.getElementById("users-container");
    if (!container) return;
    container.innerHTML = users.map(user => `
        <div class="user">
            <h3>${user.name.firstname} ${user.name.lastname}</h3>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.address.city}</p>
            <button onclick="viewUser(${user.id})">View Details</button>
        </div>
    `).join("");
}

// Navigate to user details
function viewUser(id) {
    localStorage.setItem("userId", id);
    window.location.href = "user-detail.html";
}

// Search products with debounce
const searchProducts = debounce(() => {
    const query = document.getElementById("search")?.value.toLowerCase();
    if (!query) return displayProducts(allProducts);

    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
    );

    displayProducts(filteredProducts);
}, 300);

document.getElementById("search")?.addEventListener("input", searchProducts);

// Filter & sort products
function updateProducts() {
    const sortValue = document.getElementById("sort")?.value;
    const filterValue = document.getElementById("filter")?.value.toLowerCase();

    let filteredProducts = [...allProducts];

    if (filterValue) {
        filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === filterValue);
    }

    if (sortValue === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "rating") {
        filteredProducts.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    }

    displayProducts(filteredProducts);
}

// Search users with debounce
const searchUsers = debounce(() => {
    const query = document.getElementById("user-search")?.value.toLowerCase();
    if (!query) return displayUsers(allUsers);

    const filteredUsers = allUsers.filter(user =>
        user.name.firstname.toLowerCase().includes(query) ||
        user.name.lastname.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.address.city.toLowerCase().includes(query)
    );

    displayUsers(filteredUsers);
}, 300);

document.getElementById("user-search")?.addEventListener("input", searchUsers);

// Populate the city filter dropdown
function populateCityFilter(users) {
    const cityDropdown = document.getElementById("user-filter");
    if (!cityDropdown) return;

    const cities = [...new Set(users.map(user => user.address.city))];

    cityDropdown.innerHTML = '<option value="">All Cities</option>' + 
        cities.map(city => `<option value="${city.toLowerCase()}">${city}</option>`).join("");
}

// Filtering and sorting users
function updateUsers() {
    const sortValue = document.getElementById("user-sort")?.value;
    const filterValue = document.getElementById("user-filter")?.value.toLowerCase();

    let filteredUsers = [...allUsers];

    if (filterValue) {
        filteredUsers = filteredUsers.filter(user => user.address.city.toLowerCase() === filterValue);
    }

    if (sortValue === "name-asc") {
        filteredUsers.sort((a, b) => a.name.firstname.localeCompare(b.name.firstname));
    } else if (sortValue === "name-desc") {
        filteredUsers.sort((a, b) => b.name.firstname.localeCompare(a.name.firstname));
    }

    displayUsers(filteredUsers);
}

function goback() {
    window.location.href="index.html";
}


function userBack() {
    window.location.href="users.html";
}

// Attach event listeners to sort and filter dropdowns
document.getElementById("user-sort")?.addEventListener("change", updateUsers);
document.getElementById("user-filter")?.addEventListener("change", updateUsers);
document.getElementById("sort")?.addEventListener("change", updateProducts);
document.getElementById("filter")?.addEventListener("change", updateProducts);

// Fetch data when the page loads
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("products-container")) fetchProducts();
    if (document.getElementById("users-container")) fetchUsers();
});
