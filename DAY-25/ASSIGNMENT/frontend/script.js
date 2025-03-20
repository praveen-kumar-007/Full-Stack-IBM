const API_URL = 'http://localhost:5000/api/auth';

// Check if user is logged in
const token = localStorage.getItem('token');
if (token) {
  document.getElementById('loginLink').style.display = 'none';
  document.getElementById('registerLink').style.display = 'none';
  document.getElementById('dashboardLink').style.display = 'inline';
  document.getElementById('logoutButton').style.display = 'inline';
}

// Logout Function
document.getElementById('logoutButton').addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
});

// Login Function
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    window.location.href = 'dashboard.html';
  } else {
    Toastify({ text: data.msg, duration: 3000 }).showToast();
  }
});

// Register Function
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    Toastify({ text: 'Registration successful! Please login.', duration: 3000 }).showToast();
    window.location.href = 'login.html';
  } else {
    Toastify({ text: data.msg, duration: 3000 }).showToast();
  }
});

// Protect Dashboard Page
if (window.location.pathname.includes('dashboard.html')) {
  const token = localStorage.getItem('token');
  if (!token) {
    Toastify({ text: 'Access Denied! Please log in first.', duration: 3000 }).showToast();
    setTimeout(() => { window.location.href = 'login.html'; }, 3000);
  } else {
    // Fetch and display products
    fetchProducts();
    // Render sales chart
    renderSalesChart();
  }
}

// Fetch Products
async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = products.map(product => `
    <div>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    </div>
  `).join('');
}

// Render Sales Chart
function renderSalesChart() {
  const ctx = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    },
  });
}