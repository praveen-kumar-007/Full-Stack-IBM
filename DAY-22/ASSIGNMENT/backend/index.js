const fileHandler = require('./utils/fileheader');
const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const logRequest = require('./logger');
const productsData = require('./data');
const { readProductsFromFile, writeProductsToFile } = require('./utils/fileheader');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logRequest);

// System Information 
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Total Memory: ${os.totalmem()}`);

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Express API!');
});

// Get all products
app.get('/products', (req, res) => {
  const products = readProductsFromFile();
  res.json(products);
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const products = readProductsFromFile();
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Add a new product
app.post('/products', (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newProduct = {
    id: crypto.randomUUID(),
    name,
    price,
    category,
  };

  const products = readProductsFromFile();
  products.push(newProduct);
  writeProductsToFile(products);

  res.status(201).json(newProduct);
});

// Update a product
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;

  const products = readProductsFromFile();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex] = { ...products[productIndex], name, price, category };
  writeProductsToFile(products);

  res.json(products[productIndex]);
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const products = readProductsFromFile();
  const updatedProducts = products.filter(p => p.id !== id);

  if (updatedProducts.length === products.length) {
    return res.status(404).json({ message: 'Product not found' });
  }

  writeProductsToFile(updatedProducts);
  res.json({ message: 'Product deleted successfully' });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});