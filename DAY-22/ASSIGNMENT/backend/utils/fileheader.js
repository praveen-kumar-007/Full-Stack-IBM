const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../products.json');

const readProductsFromFile = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeProductsToFile = (products) => {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
};

module.exports = { readProductsFromFile, writeProductsToFile };