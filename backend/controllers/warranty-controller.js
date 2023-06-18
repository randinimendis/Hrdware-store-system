const warranty = require("../model/warranty");


const getAllwarranty= async(req,res,next) => {
    let warrantyes;
try{
    warrantyes= await warranty.find();
}catch(err){
    console.log (err);
}
if (!warrantyes){
    return  res.status(404).json({massage:"No  found"});
}
return res.status(200).json({warrantyes});
};

//getby
const getById = async(req,res,next) => {
    const id = req.params.id;
    let warrantyd;
    try{
        warrantyd = await warranty.findById(id);

    }catch (err){
        console.log(err);
    }
    if (!warrantyd) {
        return res.status(404).json({message:"NO FOUND"});
    }
    return res.status(200).json({warrantyd});
};


//add
const addwarrantydetails=async(req,res,next)  => {
   const {firstname, lastname, itemname, contactnumber, invoicenumber, purchaseddate, natureoftheproblem, attachitemphotos} = req.body;
    let warrantyd;
    try{
        warrantyd = new warranty ({
         firstname, 
         lastname,
         itemname,
         contactnumber,
         invoicenumber,
         purchaseddate,
         natureoftheproblem,
         attachitemphotos
        });
        await warrantyd.save();// database save funtion
    }catch(err){
        console.log(err);
    }
    
    if (!warrantyd) {
        return res.status(500).json({message:"Unable To Add"});
    }
    return res.status(201).json({warrantyd});
};


//update
const updatewarrantydetails = async(req,res,next) => {
    const id = req.params.id;
    const {firstname, lastname, itemname, contactnumber, invoicenumber, purchaseddate, natureoftheproblem, attachitemphotos} = req.body;
    let warrantyd;
    try{
        warrantyd = await warranty.findByIdAndUpdate(id,{
         firstname, 
         lastname,
         itemname,
         contactnumber,
         invoicenumber,
         purchaseddate,
         natureoftheproblem,
         attachitemphotos

        });
        warrantyd = await warranty.save();// database save funtion
    }
    catch(err){
        console.log(err);
    }
    if (!warrantyd){
        return res.status(500).json({message:"Unable To Update By this Id"}); 
    }
    return res.status(201).json({warrantyd});
};


//delete
const deletewarrantydetails = async(req,res,next) => {
    const id = req.params.id;
    let warrantyd;
    try{
        warrantyd = await warranty.findByIdAndRemove(id);

    }catch(err){
        console.log(err);
    }
    if (!warrantyd){
        return res.status(404).json({message:"Unable To delete By this Id"}); 
    }
    return res.status(200).json({message:'product successfull deleted'});

};

exports.getAllwarranty = getAllwarranty;
exports.addwarrantydetails = addwarrantydetails;
exports.getById =  getById;
exports.updatewarrantydetails = updatewarrantydetails;
exports.deletewarrantydetails = deletewarrantydetails;