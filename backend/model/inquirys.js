const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const inquirysSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:true
    },
    inquiry:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("inquirys",inquirysSchema);
//inquirys
