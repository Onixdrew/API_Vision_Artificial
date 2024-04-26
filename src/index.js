const express=require('express');
const mongoose= require("mongoose")
require("dotenv").config();
const userRoutes = require("./routes/user")

const app=express();
const port=process.env.PORT || 9000;


app.use(express.json());
app.use("/api",userRoutes)

app.get('/', (req,res)=> {
    res.send("Bienvenido al API de Vision Artifical");
})

//mongoose
mongoose.connect(process.env.mongodb_url).then(()=>console.log("conectado a mongo atlas")).catch(()=>console.error("error al conectar con mongo atlas"));


app.listen(port, ()=> console.log('servidor activado en el puerto', port));
