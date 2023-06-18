const inquirys = require("../model/inquirys");


const getAllinquirys= async(req,res,next)=>{

    let inquiry;
try{
    inquiry= await inquirys.find();
}catch(err){
    console.log (err);
}
if (!inquiry){
    return  res.status(404).json({massage:"No  found"});
}
return res.status(200).json({inquiry});
};

//getby
const getById= async(req,res,next)=>{
    const id= req.params.id;
    let inquirydet;
    try{
        inquirydet =await inquirys.findById(id);

    }catch (err){
        console.log(err);
    }
    if (!inquirydet){
        return res.status(404).json({message:"NO FOUND"});
    }
    return res.status(200).json({inquirydet});
};

//add
const addinquirys=async(req,res,next)=>{
    const{name,nic,inquiry}=req.body;
    let inquirydet;
    try{
        inquirydet= new inquirys ({
            name,
            nic,
            inquiry
        });
        await inquirydet.save();// database save funtion
    }catch(err){
        console.log(err);
    }
    
    if (!inquirydet){
        return res.status(500).json({message:"Unable To Add"});
    }
    return res.status(201).json({inquirydet});
};
//update
const updateinquirys = async(req,res,next)=>{
    const id =req.params.id;
    const{name,nic,inquiry}=req.body;
    let inquirydet;
    try{
        inquirydet= await  inquirys.findByIdAndUpdate(id,{
            name,
            nic,
            inquiry

        });
        inquirydet = await  inquirys.save();// database save funtion
    }
    catch(err){
        console.log(err);
    }
    if (!inquirydet){
        return res.status(500).json({message:"Unable To Update By this Id"}); 
    }
    return res.status(201).json({inquirydet});
};


//delete
const deleteinquirys = async(req,res,next)=>{
    const id =req.params.id;
    let inquirydet;
    try{
        inquirydet= await inquirys.findByIdAndRemove(id);

    }catch(err){
        console.log(err);
    }
    if (!inquirydet){
        return res.status(404).json({message:"Unable To delete By this Id"}); 
    }
    return res.status(200).json({message:'product successfull deleted'});

};

exports.getAllinquirys=getAllinquirys;
exports.addinquirys= addinquirys;
exports.getById=getById;
exports.updateinquirys=updateinquirys;
exports.deleteinquirys=deleteinquirys;