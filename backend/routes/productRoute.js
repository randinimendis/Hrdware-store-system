const express = require('express');
const inquirysController=require("../controllers/productController.js")

const productRouter = express.Router()
productRouter.get("/product/getOne",inquirysController.findProductById)
productRouter.post("/product/",inquirysController.insertProduct)
productRouter.get("/product",inquirysController.getAllProducts)
productRouter.delete("/product/",inquirysController.deleteProduct)
productRouter.put("/product/",inquirysController.updateProduct)
productRouter.get("/product/emptyProduct",inquirysController.getEmptyProducts)
productRouter.get("/product/lowProduct",inquirysController.getLowProducts)

module.exports = productRouter