const mongoose= require("mongoose");
const userSchema= mongoose.Schema({
    tipo:{
        type:String,
        required:true
    },
    
    serial:{
        type:Number,
        required:true
    },
    fecha:{
        type:Number,
        required:true
    }
});

module.exports= mongoose.model("usuarios", userSchema)