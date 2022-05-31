const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;//process.env.port es propio dejavascript

//routes
app.get('/',(req,res) =>{
    res.send('welcome To my API')
})
//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to mongodb"))
    .catch((error)=>console.error(error)) 

app.listen(9000, () => console.log('server listening on port', 9000));
