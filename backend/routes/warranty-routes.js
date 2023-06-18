const express = require('express');
const router = express.Router();
const warrantyController=require("../controllers/warranty-controller")

router.get("/warranty/get",warrantyController.getAllwarranty);
router.post("/warranty/", warrantyController.addwarrantydetails);
router.get("/warranty/get/:id", warrantyController.getById);
router.put("/warranty/update/:id", warrantyController. updatewarrantydetails);
router.delete("/warranty/delete/:id", warrantyController.deletewarrantydetails);

module.exports = router;


