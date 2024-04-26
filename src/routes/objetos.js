const express=require("express");
const router=express.Router();
const userSchema=require("../models/user")


// crear objetos
router.post("/users", (req,res)=>{
    const user=userSchema(req.body)
    user.save()
    .then((dato)=> res.json(dato))
    .catch((error)=>res.json({message:error}))
})

// obtener objetos

router.get("/users", (req,res)=>{
    userSchema
        .find()
        .then((dato)=> res.json(dato))
        .catch((error)=>res.json({message:error}))
})


// obtener objetos por id

router.get("/users/:id", (req,res)=>{
    const {id}=req.params;
    userSchema
        .findById(id)
        .then((dato)=> res.json(dato))
        .catch((error)=>res.json({message:error}))
})

// actualizar objetos

router.put("/users/:id", (req,res)=>{
    const {id}=req.params;
    const {tipo,serial,fecha}=req.body;
    userSchema
        .updateOne({_id:id},{$set:{tipo,serial,fecha}})
        .then((dato)=> res.json(dato))
        .catch((error)=>res.json({message:error}))
})

// eliminar objetos

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
