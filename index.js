import express from 'express';
import connectToDB from './src/configs/dbConn.js';


const Port = process.env.PORT || 3000;

import app from './app.js'

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World",
        success:"true"
    })
})

app.listen(Port,async ()=>{
    // connect to db 
    await connectToDB();
console.log(`App is listening on port ${Port}`)
})


