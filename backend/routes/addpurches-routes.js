const express = require('express');
const router = express.Router();
const purchdel = require("../model/purchdel");
const addpurchesController = require("../controllers/addpurches-controller")

router.get("/purches/get", addpurchesController.getAllpurchdel);
router.post("/purches/",addpurchesController.addpurchdel);
router.get("/purches/get/:id",addpurchesController.getById);
router.put("/purches/update/:id",addpurchesController.updatepurchdel);
router.delete("/purches/delete/:id",addpurchesController.deletepurchdel);

module.exports = router;

