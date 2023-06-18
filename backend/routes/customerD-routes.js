const express = require("express");
const router = express.Router();
const customerDController = require("../controllers/customerD-controller")
const multer = require("multer");

const upload = multer();


// router.get("/", customerDController.getAllcustomerD);
// router.post("/", customerDController.addcustomerD);
// router.get("/:id",customerDController.getById);
 router.put("/customer/update/:id",upload.single("image"),customerDController.updatecustomerD);
 router.get("/customer/get/:id",customerDController.getAcustomer);
 router.delete("/customer/delete/:id",customerDController.deletecustomerD);
 router.post("/register", customerDController.addcustomerD);
 router.post("/login", customerDController.customerLogin);
 router.post("/product/add", customerDController.addProduct);
 router.put("/addtocart", customerDController.addProductAddToCart);
 router.get("/getcart/:id",customerDController.getACart);
 router.put("/deletecartitem",customerDController.deleteCartItem);
 router.get("/getallproducts",customerDController.getAllProducts);


module.exports = router;