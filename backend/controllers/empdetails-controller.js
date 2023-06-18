const empdetails = require("../model/empdetails");
const customerD = require("../model/customerD");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const getAllempdetails= async(req,res,next)=>{
    let empdetail;
try{
    empdetail= await empdetails.find();
}catch(err){
    console.log (err);
}
if (!empdetail){
    return  res.status(404).json({massage:"No  found"});
}
return res.status(200).json({empdetail});
};

//getby
const getById= async(req,res,next)=>{
    const id= req.params.id;
    let empdet;
    try{
        empdet =await empdetails.findById(id);

    }catch (err){
        console.log(err);
    }
    if (!empdet){
        return res.status(404).json({message:"NO FOUND"});
    }
    return res.status(200).json({empdet});
};

//add
const addempdetails=async(req,res,next)=>{
    const{name,salary,gender,nic,position,email}=req.body;
    let empdet;
    // try{
        customerD.find({ email: email }).then(async(results) => {
            if (results.length == 0) {
                empdet= new empdetails ({
                    name,
                    salary,
                    gender,
                    nic,
                    position
                });
                await empdet.save();
                bcrypt.hash(nic, 10, async (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        try {
                            var token = jwt.sign({ email: email }, "secret");
                            const customerde = new customerD({
                                fname:name,
                                email:email,
                                password: hash,
                                token: token,
                                emp:empdet._id,
                                role:position
                            });
                            await customerde.save();// database save funtion
                            return res.status(201).json({empdet});
                        } catch (err) {
                            return res.status(500).json({
                                error: err
                            });
                        }
                    }
                });
            } else {
                return res.status(400).json({ message: "Email already registered !" });
            }
        })
    // }catch(err){
    //     console.log(err);
    // }
    
    // if (!empdet){
    //     return res.status(500).json({message:"Unable To Add"});
    // }
  //  return res.status(201).json({empdet});
};
//update
const updateempdetails = async(req,res,next)=>{
    const id =req.params.id;
    const{name,salary,gender,nic,position}=req.body;
    let empdet;
    try{
        empdet= await  empdetails.findByIdAndUpdate(id,{
            name,
            salary,
            gender,
            nic,
            position

        });
        empdet = await  empdetails.save();// database save funtion
    }
    catch(err){
        console.log(err);
    }
    if (!empdet){
        return res.status(500).json({message:"Unable To Update By this Id"}); 
    }
    return res.status(201).json({empdet});
};


//delete
const deleteempdetails = async(req,res,next)=>{
    const id =req.params.id;
    let empdet;
    try{
        empdet= await empdetails.findByIdAndRemove(id);

    }catch(err){
        console.log(err);
    }
    if (!empdet){
        return res.status(404).json({message:"Unable To delete By this Id"}); 
    }
    return res.status(200).json({message:'product successfull deleted'});

};

exports.getAllempdetails=getAllempdetails;
exports.addempdetails= addempdetails;
exports.getById=getById;
exports.updateempdetails=updateempdetails;
exports.deleteempdetails=deleteempdetails;