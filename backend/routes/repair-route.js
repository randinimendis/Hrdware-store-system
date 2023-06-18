const express = require('express');
const repairRoutes = express.Router();


let Repairs = require('../model/repair');
let ReturnItems = require('../model/returnitem');

repairRoutes.post('/repair/add',function (req,res){
    console.log("backend called")
    let repairs = new Repairs(req.body);
    repairs.save()
        .then(repairs => {
            res.status(200).json({'repair' : 'Item is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

repairRoutes.post('/repair/addreturnitem',function (req,res){
    
    let returnitems = new ReturnItems(req.body);
    returnitems.save()
        .then(repairs => {
            res.status(200).json({'returnitem' : 'Item is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

repairRoutes.get("/repair/getData",function (req,res){
    console.log("backend called")
    Repairs.find().then((repairs)=>{
        res.json(repairs);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Unable to save database")
    });
});
repairRoutes.get('/repair/getReturnitem',function (req,res){
    ReturnItems.find().then(returnitem=>{
        res.json(returnitem);
    });
});

repairRoutes.get('/repair/getData/:id',function (req,res){
    let id = req.params.id;
    console.log("get item id : " +id);
    Repairs.findOne({$and:[{RID :id}]}, function (err,repairs){
        res.json(repairs);
    });
});
repairRoutes.get('/repair/getReturnitem/:id',function (req,res){
    let id = req.params.id;
    console.log("get item id : " +id);
    ReturnItems.findOne({$and:[{RID :id}]}, function (err,returnitem){
        res.json(returnitem);
    });
});



repairRoutes.get('/repair/editRepair/:id',function (req,res){
    let id = req.params.id;
    Repairs.findOne({$and:[{RID :id}]}, function (err,repair){
        if(err)
        console.log(err);
        else{
            res.json(repair);
        }
      
    });
});

repairRoutes.post('/repair/updateRepair/:id',function (req,res){
    let id = req.params.id;
    console.log("update id : "+id)
    Repairs.findOne({$and:[{RID :id}]}, function (err, repairs){
        if(!repairs)
            res.status(404).send("Data is not found??");
        else{
            repairs.ItemName = req.body.ItemName;
            repairs.RepairPeriod = req.body.RepairPeriod;
            repairs.EstimatedCost = req.body.EstimatedCost;
            repairs.Description = req.body.Description;
            repairs.status = "pending";

            repairs.save().then(repairs => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});
 //console.log("backend called delete")
repairRoutes.get('/repair/deleteRepair/:id',function(req,res){
    Repairs.findByIdAndRemove({_id:req.params.id}, function (err, repairs){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});
repairRoutes.get('/repair/deletereturn/:id',function(req,res){


    ReturnItems.findByIdAndRemove({_id:req.params.id}, function (err, returnitem){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});
repairRoutes.get('/repair/changeRepair/:id',function (req,res){
 
    let id = req.params.id;
    console.log("change status id : "+id)
    Repairs.findById(id, function (err, repair){
        if(!repair)
            res.status(404).send("Data is not found??");
        else{
            repair.status = "Done";

            repair.save().then(repair => {
                res.json('Update Completed');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
});
});
//repairRoutes.route('/getReturnItem').get(function (req,res){
   // ReturnItems.find(function (err,repairs){
      //  res.json(repairs);
   // });
//});

repairRoutes.get('/repair/getReportData/:id',function (req,res){
    let id = req.params.id;
    console.log("get Report item id : " +id);

    Repairs.find({$or:[{RID: id},{ItemName: id},{RepairPeriod: id},{EstimatedCost: id}]},function (err,repairs){ 
        res.json(repairs);
});
});

module.exports = repairRoutes;