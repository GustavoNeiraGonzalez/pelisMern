const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;//process.env.port es propio dejavascript

const UserModel = require("./models/User");
//middlewares


//routes
app.get('/', async (req,res) =>{
    const user = new UserModel({name:"zapato",password:"123",email:"zapato@asd.com"});
    try{
        await user.save();
    }catch(err){
        console.log(err)
    }
    res.send('welcome To my API')
})
//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to mongodb"))//recordar encender la bd
    .catch((error)=>console.error(error)) //con las instrucciones del escritorio

app.listen(9000, () => console.log('server listening on port', 9000));
