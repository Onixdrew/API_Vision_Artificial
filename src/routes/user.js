const express=require("express");
const router=express.Router();
const userSchema=require("../models/user")


// crear usuarios
router.post("/users", (req,res)=>{
    const user=userSchema(req.body)
    user.save()
    .then((dato)=> res.json(dato))
    .catch((error)=>res.json({message:error}))
})

// obtener usuarios

router.get("/users", (req,res)=>{
    userSchema
        .find()
        .then((dato)=> res.json(dato))
        .catch((error)=>res.json({message:error}))
})


// obtener usuario por id

router.get("/users/:id", (req,res)=>{
    const {id}=req.params;
    userSchema
        .findById(id)
        .then((dato)=> res.json(dato))
        .catch((error)=>res.json({message:error}))
})

// actualizar usuarios

router.put("/users/:id", (req,res)=>{
    const {id}=req.params;
    const {cargo,nombre,edad,correo}=req.body;
    userSchema
        .updateOne({_id:id},{$set:{cargo,nombre,edad,correo}})
        .then((dato)=> res.json(dato))
        .catch((error)=>res.json({message:error}))
})

// eliminar usuarios

router.delete("/users/:id", (req,res)=>{
    const {id}=req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((result) => {
            if (result.deletedCount === 1) {
                res.json({ message: "Usuario eliminado correctamente" });
            } else {
                res.status(404).json({ message: "Usuario no encontrado" });
            }
        })
        .catch((error)=>res.json({message:error}))
})

module.exports= router;
