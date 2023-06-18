const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const empdetailsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:true
    },
    position:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("empdetails",empdetailsSchema);
//empdetails
