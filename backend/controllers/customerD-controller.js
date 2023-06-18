const customerD = require("../model/customerD");
const Product = require("../model/product");
const Cart = require("../model/cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongodb = require("mongodb");
const product = require("../model/product");


const getAllcustomerD = async (req, res, next) => {
    let customerdetail;
    try {
        customerdetail = await customerD.find();
        //req.json(bookdetail);
    } catch (err) {
        console.log(err);
    }
    if (!customerdetail) {
        return res.status(404).json({ massage: "No products found" });
    }
    return res.status(200).json({ customerdetail });
};


//getby
const getById = async (req, res, next) => {
    const id = req.params.id;
    let customerdetail;
    try {
        customerdetail = await customerD.findById(id);

    } catch (err) {
        console.log(err);
    }
    if (!customerdetail) {
        return res.status(404).json({ message: "NO FOUND" });
    }
    return res.status(200).json({ customerdetail });
};

//Login
exports.customerLogin = (req, res, next) => {
    const { email, password } = req.body;
    customerD.find({ email: email }).then((user) => {
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        error: err,
                        message: "Authentication failed. Check the password."
                    });
                }
                if (result) {
                    return res.status(200).json({
                        message: "Login success !",
                        user: user[0]
                    });
                } else {
                    return res.status(401).json({

                        message: "Authentication failed. Check the password."
                    });
                }
            });
        } else {
            return res.status(400).json({ message: "User not found !" });
        }
    }).catch(error => {
        return res.status(500).json({ message: error.message });
    })
}

//Reister 
exports.addcustomerD = (req, res, next) => {

    const { fname, lname, email, phone, address, password } = req.body;

    customerD.find({ email: email }).then((results) => {
        if (results.length == 0) {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    try {
                        var token = jwt.sign({ email: email }, "secret");
                        const customerde = new customerD({
                            fname,
                            lname,
                            email,
                            phone,
                            address,
                            password: hash,
                            token: token,
                            role:"customer"
                        });
                        await customerde.save();// database save funtion
                        return res.status(200).json({ message: "User registered !", user: customerde });
                    } catch (err) {
                        return res.status(500).json({
                            error: err
                        });
                    }
                }
            });
        } else {
            return res.status(200).json({ message: "Email already registered !" });
        }
    })
};

//update
const updatecustomerD = async (req, res, next) => {
    const id = req.params.id;
    const { lname, fname, email, phone, address,age,payment_method,nic,gender,password} = req.body;
   // const fileBuffer = req.file.buffer;
    try {
        if(password){
            bcrypt.hash(password, 10, async (err, hash) => {
                var customerde = await customerD.findByIdAndUpdate(id, {
                    fname,
                    lname,
                    email,
                    phone,
                    address,
                    age,
                    payment_method,
                    nic,
                    gender,
                    password:hash
                   // image: new mongodb.Binary(fileBuffer)
                });
                customerde = await customerde.save();// database save funtion
                return res.status(201).json({ customerde });
            })
        }else{
            var customerde = await customerD.findByIdAndUpdate(id, {
                fname,
                lname,
                email,
                phone,
                address,
                age,
                payment_method,
                nic,
                gender,
               // image: new mongodb.Binary(fileBuffer)
            });
            customerde = await customerde.save();// database save funtion
            return res.status(201).json({ customerde });
        }
       
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message:err.message });
    }
    
};

exports.getAcustomer =async (req, res, next) => {
    const id = req.params.id;
    try {
        var customerde = await customerD.findById(id);
         return res.status(201).json({ customerde });
     }
     catch (err) {
         console.log(err);
         return res.status(400).json({ message:err.message });
     }
}

exports.addProduct =async (req, res, next) => {
    const {productName,image,price,description}=req.body
    try {
        const product = new Product({
            productName,
            image,
            price,
            description
        });
        await product.save();// database save funtion
        return res.status(200).json({ message: "Product added !", product: product });
    } catch (err) {
        return res.status(500).json({
            error: err
        });
    }
}

exports.addProductAddToCart = async (req, res, next) => {
    const { productId, customerId } = req.body
    Cart.find({ customer: customerId }).then(async (cartRes) => {
        if (cartRes.length == 0) {
            const cart = new Cart({
                customer: customerId,
                products: [{
                    qty: 1,
                    product: productId
                }]
            });
            await cart.save();
            res.status(200).json({ message: "Product added to cart !", product: product });
        } else {
            var parr= cartRes[0].products.find(element=>{
                if(element.product==productId){
                    return element;
                }
            }) 
            if(parr){
                Cart.updateOne({ customer: customerId , 'products.product': productId},{ $set: { 'products.$.qty': parr.qty+1 } },).then(() => {
                    res.status(200).json({ message: "Product added to cart !", product: product });
                }).catch(error => {
                    console.log(error);
                    return res.status(400).json({ message: error.message });
                })
            }else{
                Cart.updateOne({ customer: customerId }, { $push: { products:{qty: 1,product: productId} } },).then(() => {
                    res.status(200).json({ message: "Product added to cart !", product: product });
                }).catch(error => {
                    console.log(error);
                    return res.status(400).json({ message: error.message });
                })
            }
            
        }
    }).catch(error => {
        return res.status(400).json({ message: error.message });
    })
}

exports.getACart =async (req, res, next) => {
    const id = req.params.id;
    try {
        var cart = await Cart.find({customer:id }).populate({ path: 'products', populate: { path: 'product', model: Product } });
         return res.status(201).json({ cart:cart[0] });
     }
     catch (err) {
         console.log(err);
         return res.status(400).json({ message:err.message });
     }
}

exports.deleteCartItem =async (req, res, next) => {
    const {productId,customerId}=req.body
    console.log(req.body);
    Cart.updateOne({customer:customerId},{ $pull: { products:{product: productId} } },).then((res1)=>{
        console.log(res1);
        res.status(200).json({ message: "Removed item from cart !" });
    }).catch(error=>{
        console.log(error);
        return res.status(400).json({ message:error.message });
    })
}

exports.getAllProducts =async (req, res, next) => {
    try {
        var products = await Product.find();
         return res.status(201).json({ products });
     }
     catch (err) {
         console.log(err);
         return res.status(400).json({ message:err.message });
     }
}


//delete
const deletecustomerD = async (req, res, next) => {
    const id = req.params.id;
    let customerde;
    try {
        customerde = await customerD.findByIdAndRemove(id);

    } catch (err) {
        console.log(err);
    }
    if (!customerde) {
        return res.status(404).json({ message: "Unable To delete By this Id" });
    }
    return res.status(200).json({ message: 'product successfull deleted' });

};

exports.getAllcustomerD = getAllcustomerD;
//exports.addcustomerD=addcustomerD;
exports.getById = getById;
exports.updatecustomerD = updatecustomerD;
exports.deletecustomerD = deletecustomerD;