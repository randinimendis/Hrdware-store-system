const express = require("express");
const router = express.Router();
const payment=  require('../model/payment');
const paycontroller = require("../controllers/payment-controller");

router.get("/payments", paycontroller.getAllpayment);//this route will provide all of the payments
router.post("/payments", paycontroller.addpayment);// add item to the database
router.get("/payments/:id", paycontroller.getById);//print using id
router.put("/payments/:id", paycontroller.updatepayment);//update the invoice
router.delete("/payments/:id", paycontroller.deletepayment); //delete the details of invoice    

module.exports = router;