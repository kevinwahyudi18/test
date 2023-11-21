const express = require('express');
const cors = require('cors');
const router = require("./routes/index")
const products = require("../products")
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/products", (req, res) =>{
  res.send(products)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});