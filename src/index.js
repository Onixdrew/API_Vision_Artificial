const express=require('express');
const mongoose= require("mongoose")
const app=express();
const port=process.env.PORT || 9000;

app.get('/', (req,res)=> {
    res.send("Bienvenido al API de Vision Artifical");
})

//mongoose
mongoose.connect("mongodb+srv://Andrew:<password>@cluster0.qj0gkdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.listen(port, ()=> console.log('servidor activado en el puerto', port));
