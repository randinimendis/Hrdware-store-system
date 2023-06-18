//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const inquirys = require("../model/inquirys");
const inquirysController=require("../controllers/inquirys-controller")

router.get("/inquiry/get", inquirysController.getAllinquirys);
router.post("/inquiry/",inquirysController.addinquirys);
router.get("/inquiry/get/:id",inquirysController.getById);
router.put("/inquiry/update/:id",inquirysController.updateinquirys);
router.delete("/inquiry/delete/:id",inquirysController.deleteinquirys);

module.exports=router;