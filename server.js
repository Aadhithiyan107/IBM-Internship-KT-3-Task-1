const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "data", "products.json");

/* ---------- Helper Functions ---------- */
const readProducts = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};

const writeProducts = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

/* ---------- CREATE (POST) ---------- */
app.post("/api/products", (req, res) => {
  const products = readProducts();

  const newProduct = {
    id: Date.now(),
    productName: req.body.productName,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    supplier: req.body.supplier
  };

  products.push(newProduct);
  writeProducts(products);

  res.status(201).json(newProduct);
});

/* ---------- READ ALL (GET) ---------- */
app.get("/api/products", (req, res) => {
  res.json(readProducts());
});

/* ---------- READ ONE (GET BY ID) ---------- */
app.get("/api/products/:id", (req, res) => {
  const products = readProducts();
  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

/* ---------- UPDATE (PUT) ---------- */
app.put("/api/products/:id", (req, res) => {
  const products = readProducts();
  const id = Number(req.params.id);

  const updated = products.map(product =>
    product.id === id ? { ...product, ...req.body } : product
  );

  writeProducts(updated);
  res.json({ message: "Product updated successfully" });
});

/* ---------- DELETE ---------- */
app.delete("/api/products/:id", (req, res) => {
  const products = readProducts();
  const id = Number(req.params.id);

  const filtered = products.filter(p => p.id !== id);
  writeProducts(filtered);

  res.json({ message: "Product deleted successfully" });
});

/* ---------- SERVER ---------- */
app.listen(5001, () => {
  console.log("Product Inventory API running at http://localhost:5001");
});
