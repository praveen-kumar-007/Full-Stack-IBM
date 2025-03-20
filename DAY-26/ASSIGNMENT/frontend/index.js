

const productContainer = document.getElementById("product-container");

let currentPage = 1;
let loading = false; 

async function fetchProducts() {
    if (loading) return; 
    loading = true;

    try {
        const response = await fetch(`http://localhost:4040/api/products?page=${currentPage}`, {
            method: "GET"
        });
        const data = await response.json();

        console.log(data);

        displayProducts(data.products);
        currentPage++; 
    } catch (error) {
        console.error("Error fetching products:", error);
    } finally {
        loading = false; 
    }
}

function displayProducts(products) {
    products.forEach((product) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category || "No Category";

        let img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";

        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating || "N/A"}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(product);
        });

        productBox.append(heading, img, name, price, rating, button);
        productContainer.append(productBox);
    });
}

// Scroll event listener
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        fetchProducts();
    }
});

// Initial fetch
fetchProducts();

function addToCart(product) {
    Toastify({
        text: `${product.name} is added to cart`,
        className: "info",
        duration:"500",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}