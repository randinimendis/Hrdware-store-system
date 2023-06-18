const purchdel = require("../model/purchdel");


const getAllpurchdel = async (req, res, next) => {

    let addpurche;
    try {
        addpurche = await purchdel.find();
    } catch (err) {
        console.log(err);
    }
    if (!addpurche) {
        return res.status(404).json({ massage: "No  found" });
    }
    return res.status(200).json({ addpurche });
};

//getby
const getById = async (req, res, next) => {
    const id = req.params.id;
    let purdet;
    try {
        purdet = await purchdel.findById(id);

    } catch (err) {
        console.log(err);
    }
    if (!purdet) {
        return res.status(404).json({ message: "NO FOUND" });
    }
    return res.status(200).json({ purdet });
};

//add
const addpurchdel = async (req, res, next) => {
    const { productname,suppliername,requireddate,supplierid,quentity,note  } = req.body;
    let purdet;
    try {
        purdet = new purchdel({
            productname,
            suppliername, 
            requireddate,
            supplierid,
            quentity,
            note
        });
        await purdet.save();// database save funtion
    } catch (err) {
        console.log(err);
    }

    if (!purdet) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ purdet });
};
//update
const updatepurchdel = async (req, res, next) => {
    const id = req.params.id;
    const { productname,suppliername,requireddate,supplierid,quentity,note } = req.body;
    let purdet;
    try {
        purdet = await purchdel.findByIdAndUpdate(id, {
            productname,
            suppliername, 
            requireddate,
            supplierid,
            quentity,
            note

        });
        purdet = await purchdel.save();// database save funtion
    }
    catch (err) {
        console.log(err);
    }
    if (!purdet) {
        return res.status(500).json({ message: "Unable To Update By this Id" });
    }
    return res.status(201).json({ purdet });
};


//delete
const deletepurchdel = async (req, res, next) => {
    const id = req.params.id;
    let purdet;
    try {
        purdet = await purchdel.findByIdAndRemove(id);

    } catch (err) {
        console.log(err);
    }
    if (!purdet) {
        return res.status(404).json({ message: "Unable To delete By this Id" });
    }
    return res.status(200).json({ message: 'product successfull deleted' });

};

exports.getAllpurchdel = getAllpurchdel;
exports.addpurchdel = addpurchdel;
exports.getById = getById;
exports.updatepurchdel = updatepurchdel;
exports.deletepurchdel = deletepurchdel;