const mongoose= require("mongoose");
const userSchema= mongoose.Schema({
    cargo:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    correo:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model("usuarios", userSchema)