const express = require("express");
const router = express.Router();
const Veh = require("../model/Veh")
const vehsController = require("../controllers/vehs-controller")


router.get("/vehs/get", vehsController.getAllVeh);
router.post("/vehs/", vehsController.addVeh);
router.get("/vehs/get/:id",vehsController.getById);
router.put("/vehs/update/:id",vehsController.updateVeh);
router.delete("/vehs/delete/:id",vehsController.deleteVeh);


module.exports = router;