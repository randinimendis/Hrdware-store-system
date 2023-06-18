const mongoose= require('mongoose');
const productScema = require ("../model/product");



exports.insertProduct=(req,res)=>{
    const {code , brand , name , price , qty , allocated , available , alertLevel} = req.body
    let newProduct = new productScema();
    newProduct.code = code
    newProduct.brand = brand
    newProduct.productName = name
    newProduct.price = price
    newProduct.qty = qty
    newProduct.allocated = allocated
    newProduct.available = available
    newProduct.alertLevel = alertLevel
    newProduct.save().then((response)=>{
        res.send(response)
    })
}
exports.updateProduct=(req,res)=>{
    const {productId ,code , brand , name , price , qty , allocated , available , alertLevel} = req.body
    productScema.updateOne({_id : productId},{$set :{
        code : code,
        brand : brand,
        productName : name,
        price : price,
        qty : qty,
        allocated : allocated,
        available : available,
        alertLevel : alertLevel
    }}).then((response)=>{
        res.send(response)
    })
}
exports.getAllProducts=(req,res)=>{
    console.log(">>>");
    productScema.find().then((response)=>{
        res.send(response)
    })
}
exports.deleteProduct=(req,res)=>{
    productScema.deleteOne({_id : req.body.productId}).then((response)=>{
        res.send(response)
    })
}
exports.findProductById=(req,res)=>{
    productScema.findOne({_id : req.body.productId}).then((response)=>{
        res.send(response)
    })
}
exports.getEmptyProducts=(req,res)=>{
    productScema.find({available : 0}).then((response)=>{
        res.send(response)
    })
}
exports.getLowProducts=(req,res)=>{
    productScema.find().then((response)=>{
        const list = []
        response.map((item,index)=>{
            if(item.available<item.alertLevel){
                list.push(item)
            }
        })
        res.send(list)        

    })
}