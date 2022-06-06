const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors')
const app = express();
const port = process.env.PORT || 9000;//process.env.port es propio dejavascript

const UserModel = require("./models/User");

app.use(express.json())
app.use(cors())


//routes
app.post('/insert', async (req,res) =>{
    //*todo esto viene desde el front a traves de axios en iniciosesion.jsx
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.pass; 
    //*todo esto viene desde el front a traves de axios en iniciosesion.jsx

    const user = new UserModel({name:name,password:password,email:email});
    try{
        await user.save();
        res.send("inserted data")
    }catch(err){
        console.log(err)
    }
})
//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to mongodb"))//recordar encender la bd
    .catch((error)=>console.error(error)) //con las instrucciones del escritorio

app.listen(9000, () => console.log('server listening on port', 9000));
