//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const empdetails = require("../model/empdetails");
const empdetailsController=require("../controllers/empdetails-controller")

router.get("/empdetail/get", empdetailsController.getAllempdetails);
router.post("/empdetail/",empdetailsController.addempdetails);
router.get("/empdetail/get/:id",empdetailsController.getById);
router.put("/empdetail/update/:id",empdetailsController.updateempdetails);
//router.delete("/:id",empdetailsController.deleteempdetails);
router.delete("/empdetail/delete/:id", empdetailsController.deleteempdetails);
module.exports=router;