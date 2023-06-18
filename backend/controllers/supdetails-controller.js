const supdel = require("../model/supdel");


const getAllsupdel = async (req, res, next) => {

    let supdetails;
    try {
        supdetails = await supdel.find();
    } catch (err) {
        console.log(err);
    }
    if (!supdetails) {
        return res.status(404).json({ massage: "No  found" });
    }
    return res.status(200).json({ supdetails });
};

//getby
const getById = async (req, res, next) => {
    const id = req.params.id;
    let supdet;
    try {
        supdet = await supdel.findById(id);

    } catch (err) {
        console.log(err);
    }
    if (!supdet) {
        return res.status(404).json({ message: "NO FOUND" });
    }
    return res.status(200).json({ supdet });
};

//add
const addsupdel = async (req, res, next) => {
    const { name, email, phone, address, discription } = req.body;
    let supdet;
    try {
        supdet = new supdel({
            name,
            email,
            phone,
            address,
            discription
        });
        await supdet.save();// database save funtion
    } catch (err) {
        console.log(err);
    }

    if (!supdet) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ supdet });
};
//update
const updatesupdel = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, phone, address, discription } = req.body;
    let supdet;
    try {
        supdet = await supdel.findByIdAndUpdate(id, {
            name,
            email,
            phone,
            address,
            discription

        });
        supdet = await supdel.save();// database save funtion
    }
    catch (err) {
        console.log(err);
    }
    if (!supdet) {
        return res.status(500).json({ message: "Unable To Update By this Id" });
    }
    return res.status(201).json({ supdet });
};


//delete
const deletesupdel = async (req, res, next) => {
    const id = req.params.id;
    let supdet;
    try {
        supdet = await supdel.findByIdAndRemove(id);

    } catch (err) {
        console.log(err);
    }
    if (!supdet) {
        return res.status(404).json({ message: "Unable To delete By this Id" });
    }
    return res.status(200).json({ message: 'product successfull deleted' });

};

exports.getAllsupdel = getAllsupdel;
exports.addsupdel = addsupdel;
exports.getById = getById;
exports.updatesupdel = updatesupdel;
exports.deletesupdel = deletesupdel;