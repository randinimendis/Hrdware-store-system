//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const supdel = require("../model/supdel");
const supdetailsController = require("../controllers/supdetails-controller")

/*router.post('/post/save', (req, res) => {
    let newPost = new Posts(req.body);


     newPost.save((err) => {
         if (err) {
             return res.status(400).json({
                 error: err
             });
         }
         return res.status(200).json({
             success: "post saved success!!"
         });
     });
 });*/


router.get("/supdetails/get", supdetailsController.getAllsupdel);
router.post("/supdetails/", supdetailsController.addsupdel);
router.get("/supdetails/get/:id", supdetailsController.getById);
router.put("/supdetails/update/:id", supdetailsController.updatesupdel);
router.delete("/supdetails/delete/:id", supdetailsController.deletesupdel);

module.exports = router;
