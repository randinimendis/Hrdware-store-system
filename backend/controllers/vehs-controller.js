const Veh = require('../model/Veh');
const router = require("../routes/veh-routes");



const getAllVeh = async(req,res,next) => {
    let vehs;
        try{
            vehs = await Veh.find();
        }catch(err){
        console.log(err);
    }
    if(!vehs){
        return res.status(404).json({message:"no Vehicle found upload again"});
    }
    return res.status(200).json({vehs});

};

const getById = async(req,res,next) => {
    const id = req.params.id
    let vehi;
    try{
        vehi = await Veh.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!vehi){
        return res.status(404).json({message:"no Vehicle found upload again"});
    }
    return res.status(200).json({vehi});
}

const addVeh = async(req,res,next) =>{
  
    let vehi;
    
    try{
        vehi = new Veh({
            
              
                regNo : req.body.regNo,
                vCode: req.body.vCode,
                brand : req.body.brand,
                capacity : req.body.capacity,
                licence_expDate : req.body.licence_expDate,
                
        });
   
        await vehi.save();
    }catch(err){
            console.log(err);
    }
    if(!vehi){
        return res.status(500).json({message:"unable to add vehicle details to invoice"});
    }
    return res.status(201).json({vehi});
};
const updateVeh = async(req,res,next) =>{
    const id = req.params.id;
    let vehi;
    try{
        const vehi = await Veh.findOneAndUpdate({_id:id},{
           
            regNo : req.body.regNo,
            vCode: req.body.vCode,
            brand : req.body.brand,
            capacity : req.body.capacity,
            licence_expDate : req.body.licence_expDate,
            
        });
        if(vehi){
            return res.status(200).json({vehi});
        }
    }catch(err){
        console.log(err);
    }
    if(!vehi){
        return res.status(404).json({message:"unable to update vehicle invoice"});
    }
    
};
const deleteVeh = async(req,res,next) =>{
    const id = req.params.id;
    let vehi;
    try{
        vehi = await Veh.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!vehi){
        return res.status(404).json({message:"unable to Remove vehicle invoice"});
    }
    return res.status(200).json({message:"vehicle details successfully deleted"});
};  

exports.getAllVeh = getAllVeh;
exports.addVeh = addVeh;
exports.getById = getById;
exports.updateVeh = updateVeh;
exports.deleteVeh = deleteVeh;

// const Veh = require("../model/Veh");
// const router = require("../routes/veh-routes");

// const getAllVeh= async(req,res,next)=>{

//     let vehs;
// try{
//     vehs= await Veh.find();
// }catch(err){
//     console.log (err);
// }
// if (!vehs){
//     return  res.status(404).json({massage:"No  found"});
// }
// return res.status(200).json({vehs});
// };

// //getby
// const getById= async(req,res,next)=>{
//     const id= req.params.id;
//     let vehi;
//     try{
//         vehi =await Veh.findById(id);

//     }catch (err){
//         console.log(err);
//     }
//     if (!vehi){
//         return res.status(404).json({message:"NO FOUND"});
//     }
//     return res.status(200).json({vehi});
// };

// //add
// const addVeh=async(req,res,next)=>{
//     const{regNo,vCode,brand,capacity,licence_expDate}=req.body;
//     let vehi;
//     try{
//         vehi= new Veh ({
//             regNo,
//             vCode,
//             brand,
//             capacity,
//             licence_expDate
//         });
//         await vehi.save();// database save funtion
//     }catch(err){
//         console.log(err);
//     }
    
//     if (!vehi){
//         return res.status(500).json({message:"Unable To Add"});
//     }
//     return res.status(201).json({vehi});
// };
// //update
// const updateVeh = async(req,res,next)=>{
//     const id =req.params.id;
//     const{regNo,vCode,brand,capacity,licence_expDate}=req.body;
//     let vehi;
//     try{
//         vehi= await Veh.findByIdAndUpdate(id,{
//             regNo,
//             vCode,
//             brand,
//             capacity,
//             licence_expDate

//         });
//         vehi = await vehi.save();// database save funtion
//     }
//     catch(err){
//         console.log(err);
//     }
//     if (!vehi){
//         return res.status(500).json({message:"Unable To Update By this Id"}); 
//     }
//     return res.status(201).json({vehi});
// };


// //delete
// const deleteVeh = async(req,res,next)=>{
//     const id =req.params.id;
//     let vehi;
//     try{
//         vehi= await Veh.findByIdAndRemove(id);

//     }catch(err){
//         console.log(err);
//     }
//     if (!vehi){
//         return res.status(404).json({message:"Unable To delete By this Id"}); 
//     }
//     return res.status(200).json({message:'product successfull deleted'});

// };

// exports.getAllVeh=getAllVeh;
// exports.addeVeh= addVeh;
// exports.getById=getById;
// exports.updateVeh=updateVeh;
// exports.deleteVeh=deleteVeh;