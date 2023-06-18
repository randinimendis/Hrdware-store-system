const payment = require('../model/payment');

const getAllpayment = async(req,res,next) => {
    console.log(">>>>");
    let payments;
        try{
            payments = await payment.find();
        }catch(err){
        console.log(err);
    }
    if(!payments){
        return res.status(404).json({message:"no payment found upload again"});
    }
    return res.status(200).json({payments});

};

const getById = async(req,res,next) => {
    const id = req.params.id
    let Payment;
    try{
        Payment = await payment.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!Payment){
        return res.status(404).json({message:"no payment found upload again"});
    }
    return res.status(200).json({Payment});
}

const addpayment = async(req,res,next) =>{
  
    let Payment;
    
    try{
        Payment = new payment({
            
              
                name : req.body.name,
                city : req.body.city,
                address : req.body.address,
                email : req.body.email,
                paymenttype : req.body.paymenttype,
                
        });
   
        await Payment.save();
    }catch(err){
            console.log(err);
    }
    if(!Payment){
        return res.status(500).json({message:"unable to add payment details to invoice"});
    }
    return res.status(201).json({Payment});
};
const updatepayment = async(req,res,next) =>{
    const id = req.params.id;
    let Payment;
    try{
        Payment = await payment.findByIdAndUpdate(id,{
           
            name : req.body.name,
            city : req.body.city,
            address : req.body.address,
            email:req.body.email,
            paymenttype: req.body.paymenttype
            
            
        });
        Payment = await Payment.save();
    }catch(err){
        console.log(err);
    }
    if(!Payment){
        return res.status(404).json({message:"unable to update payment invoice"});
    }
    return res.status(200).json({Payment});
};
const deletepayment = async(req,res,next) =>{
    const id = req.params.id;
    let Payment;
    try{
        Payment = await payment.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!Payment){
        return res.status(404).json({message:"unable to Remove payment invoice"});
    }
    return res.status(200).json({message:"payemet details successfully deleted"});
};  

exports.getAllpayment = getAllpayment;
exports.addpayment = addpayment;
exports.getById = getById;
exports.updatepayment = updatepayment;
exports.deletepayment = deletepayment;